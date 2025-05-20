'use server';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { uploadAvatarImage } from '@/lib/upload';
import { Prisma } from '@prisma/client';

type TypeOptions = {
  search: string;
  category?: string;
  sortBy: string;
  page: number;
  itemPerPage?: number;
  onlyRecurringBills?: boolean;
};

const sortMap: Record<string, Prisma.TransactionOrderByWithRelationInput> = {
  latest: { date: 'desc' },
  oldest: { date: 'asc' },
  atoz: { name: 'asc' },
  ztoa: { name: 'desc' },
  highest: { amount: 'desc' },
  lowest: { amount: 'asc' },
};

export async function getTransactions(options: TypeOptions) {
  const session = await auth();
  if (!session?.user?.id) {
    return { transactions: [], totalCount: 0 };
  }
  const userId = session.user.id;

  const { search, category, sortBy, page, itemPerPage, onlyRecurringBills } =
    options;

  try {
    const where: Prisma.TransactionWhereInput = { userId };
    const orderBy = sortMap[sortBy] ?? sortMap.latest;

    if (search) {
      where.OR = [{ name: { contains: search, mode: 'insensitive' } }];
    }

    if (category !== 'all') {
      where.category = category;
    }

    if (onlyRecurringBills) {
      where.recurring = true;
    }

    const findArgs: Prisma.TransactionFindManyArgs = {
      where,
      orderBy,
    };

    if (!onlyRecurringBills && itemPerPage) {
      findArgs.take = itemPerPage;
      findArgs.skip = (page - 1) * itemPerPage;
    }

    const transactions = await prisma.transaction.findMany(findArgs);
    const totalCount = await prisma.transaction.count({ where });

    return { transactions, totalCount };
  } catch (error) {
    console.error('[getTransaction Error]', error);
    throw new Error('Failed to fetch transactions');
  }
}

export async function getAllTransactions() {
  const session = await auth();
  if (!session?.user?.id) {
    return [];
  }

  return prisma.transaction.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function createTransaction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error('You must be logged in to add a transaction.');
  }
  const userId = session.user.id;

  const avatarFile = formData.get('avatar') as File | null;
  let avatarUrl: string | null = null;

  if (avatarFile && avatarFile.size > 0) {
    avatarUrl = await uploadAvatarImage(avatarFile);
  }

  const name = (formData.get('name') as string)?.trim();
  if (!name) throw new Error('Transaction name is required.');

  const amountStr = formData.get('amount') as string;
  if (!amountStr) throw new Error('Amount is required.');
  const amount = parseFloat(amountStr);
  if (isNaN(amount)) throw new Error('Amount must be a number.');

  const category = (formData.get('category') as string)?.trim();
  if (!category) throw new Error('Category is required.');

  const dateStr = (formData.get('date') as string)?.trim();
  if (!dateStr || isNaN(Date.parse(dateStr))) {
    throw new Error('A valid date is required.');
  }

  const recurringStr = formData.get('recurring') as string | null;
  const recurring = recurringStr === 'true';

  await prisma.$transaction(async (tx) => {
    await tx.transaction.create({
      data: {
        name,
        amount,
        category,
        date: dateStr,
        userId: userId,
        recurring,
        avatar: avatarUrl,
      },
    });
  });
  redirect('/transactions');
}

export async function updateTransaction(formData: FormData) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error('Not authenticated');

  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const newAmount = parseFloat(formData.get('amount') as string);
  const category = formData.get('category') as string;
  const date = formData.get('date') as string;
  const recurring = formData.get('recurring') === 'true';

  await prisma.$transaction(async (tx) => {
    // 1. Récupérer la transaction existante pour connaître l'ancien montant
    const existingTransaction = await tx.transaction.findUnique({
      where: { id, userId },
      select: { amount: true },
    });

    if (!existingTransaction) {
      throw new Error('Transaction not found');
    }

    // 2. Mettre à jour la transaction
    await tx.transaction.update({
      where: { id, userId },
      data: {
        name,
        amount: newAmount,
        category,
        date,
        recurring,
      },
    });
  });
  redirect('/transactions');
}
export async function deleteTransaction(formData: FormData) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error('Unauthorized');

  const id = formData.get('id') as string;

  await prisma.$transaction(async (tx) => {
    // 1. Récupérer la transaction à supprimer pour connaître son montant
    const transactionToDelete = await tx.transaction.findUnique({
      where: { id, userId },
      select: { amount: true },
    });

    if (!transactionToDelete) {
      throw new Error('Transaction not found');
    }

    // 2. Supprimer la transaction
    await tx.transaction.delete({
      where: { id, userId },
    });
  });
  redirect('/transactions');
}

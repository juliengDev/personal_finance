import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export type UserBalance = {
  current: number;
  income: number;
  expenses: number;
};

export async function getUserBalance(): Promise<UserBalance> {
  const session = await auth();
  if (!session?.user?.id) {
    return { current: 0, income: 0, expenses: 0 };
  }

  const userId = session.user.id;

  // Sum all positive transactions
  const { _sum: inc } = await prisma.transaction.aggregate({
    where: { userId, amount: { gt: 0 } },
    _sum: { amount: true },
  });

  // Sum all negative transactions
  const { _sum: exp } = await prisma.transaction.aggregate({
    where: { userId, amount: { lt: 0 } },
    _sum: { amount: true },
  });

  const income = inc.amount ?? 0;
  const expenses = Math.abs(exp.amount ?? 0);
  const current = income - expenses;

  return { current, income, expenses };
}
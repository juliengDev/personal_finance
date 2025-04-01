import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  try {
    const data = await prisma.user.findMany();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function getBalance() {
  try {
    const data = await prisma.balance.findMany();
    return data;
  } catch (error) {
    console.error("Error fetching balance:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function getTransactions() {
  try {
    const data = await prisma.transaction.findMany();
    return data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function getBudget() {
  try {
    const data = await prisma.budget.findMany();
    return data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
  } finally {
    await prisma.$disconnect();
  }
}

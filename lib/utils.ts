import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface Transaction {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

export interface Budget {
  category: string;
  maximum: number;
  theme: string;
}

export interface FinancialData {
  balance: {
    current: number;
    income: number;
    expenses: number;
  };
  transactions: Transaction[];
  budgets: Budget[];
  // Other fields omitted for brevity
}

export interface FinancialDataItem {
  id: string;
  title: string;
  amount?: number;
  dueSoon?: string;
  theme: string;
}
export type FinancialDataResult = FinancialDataItem[];

export interface FinancialSummary {
  paidBills: number;
  totalUpcoming: number;
  dueSoon: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number): string {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatDateToShortString(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' }); // ex: "Aug"
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

/**
 * Calcule le résumé financier pour le mois courant
 * @param data Les données financières
 * @returns Résumé financier contenant les factures payées, les paiements à venir et les montants dus bientôt
 */
export function calculateFinancialSummary(data: FinancialData) {
  // Vérification que les données sont disponibles
  if (!data || !data.transactions) {
    throw new Error('Données financières non disponibles');
  }

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const today = now.getDate();

  // Filtrer les transactions pour le mois courant
  const currentMonthTransactions = data.transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear
    );
  });

  // Calculer les factures payées (tous les paiements de factures effectués ce mois-ci)
  const paidBills = currentMonthTransactions
    .filter(
      (transaction) =>
        transaction.category === 'Bills' && transaction.amount < 0
    )
    .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);

  // Trouver les transactions récurrentes qui sont des factures
  const recurringBills = data.transactions.filter(
    (transaction) =>
      transaction.category === 'Bills' &&
      transaction.recurring === true &&
      transaction.amount < 0
  );

  // Calculer les factures à venir (factures récurrentes qui n'ont pas été payées ce mois-ci)
  const paidRecurringBillNames = new Set(
    currentMonthTransactions
      .filter(
        (t) => t.category === 'Bills' && t.recurring === true && t.amount < 0
      )
      .map((t) => t.name)
  );

  const upcomingBills = recurringBills
    .filter((bill) => !paidRecurringBillNames.has(bill.name))
    .reduce((total, bill) => total + Math.abs(bill.amount), 0);

  // Calculer les factures dues prochainement (factures récurrentes dues dans les 7 prochains jours)
  const dueSoonBills = recurringBills
    .filter((bill) => {
      const billDate = new Date(bill.date);
      const billDayOfMonth = billDate.getDate();

      // Une facture est due bientôt si elle est due dans les 7 prochains jours et n'a pas été payée
      const daysUntilDue = billDayOfMonth - today;
      return (
        daysUntilDue >= 0 &&
        daysUntilDue <= 7 &&
        !paidRecurringBillNames.has(bill.name)
      );
    })
    .reduce((total, bill) => total + Math.abs(bill.amount), 0);

  return {
    paidBills,
    totalUpcoming: upcomingBills,
    dueSoon: dueSoonBills,
  };
}



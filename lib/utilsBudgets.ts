import data from '@/data/data.json';

type BudgetTransaction = {
  category: BudgetCategory;
  date: string; // ISO 8601 format
  amount: number;
  name: string;
};

export type BudgetCategory =
  | 'Entertainment'
  | 'Dine Out'
  | 'General'
  | 'Bills'
  | 'Education'
  | 'Groceries'
  | 'Lifestyle'
  | 'Personal Care'
  | 'Shopping'
  | 'Transportation';

type TransactionsByCategory = Record<string, BudgetTransaction[]>;

const { transactions } = data;
// Liste des catégories uniques basées sur les transactions
const categoryNames = [...new Set(transactions.map((t) => t.category))];
// Récupérer les transactions groupées par catégorie
const transactionsByCategory: TransactionsByCategory = categoryNames.reduce(
  (acc, category) => {
    acc[category] = transactions
      .filter((t) => t.category === category)
      .map((t) => ({
        ...t,
        category: t.category as BudgetCategory,
      }));
    return acc;
  },
  {} as TransactionsByCategory
);

// Obtenir les 3 dernières transactions d'une catégorie (tous mois confondus)
export function getLastThreeTransactions(category: BudgetCategory) {
  return [...transactionsByCategory[category]]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

// Obtenir les transactions d'une catégorie pour le mois courant
export function getCurrentMonthTransactions(category: BudgetCategory) {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0 = janvier
  const currentYear = now.getFullYear();

  return transactionsByCategory[category].filter((t) => {
    const date = new Date(t.date);
    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });
}
// Calcul du total dépensé ce mois-ci pour une catégorie
export function getSpentThisMonth(category: BudgetCategory): number {
  return getCurrentMonthTransactions(category).reduce(
    (total, t) => total + t.amount,
    0
  );
}

export function getSpent(category: BudgetCategory): number {
  return [...transactionsByCategory[category]].reduce((acc, t) => {
    acc = acc + t.amount;
    return Number(Math.abs(acc).toFixed(2));
  }, 0);
}

export function getMax(category: BudgetCategory): number | undefined {
  const budget = data.budgets.find((t) => t.category === category);
  return budget?.maximum;
}

export function getAllTransactions(category: BudgetCategory) {
  return [...transactionsByCategory[category]].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

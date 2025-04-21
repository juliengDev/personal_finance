import data from '@/data/data.json';

import {
  BudgetCategory,
  getAllTransactions,
  getLastThreeTransactions,
  getMax,
  getSpent,
  getSpentThisMonth,
} from '@/lib/utilsBudgets';
import BudgetCard from './BudgetCard';

const { budgets } = data;

const entertainmentSpent = getSpentThisMonth('Entertainment');
const latestEntertainmentTx = getLastThreeTransactions('Entertainment');
const spentThisMonth = getSpentThisMonth('Entertainment');
const spent = getSpent('Entertainment');
const max = getMax('Entertainment');
const allEntertainmentTx = getAllTransactions('Entertainment');

function BudgetList() {
  return budgets ? (
    <div>
      <ul className="flex flex-col gap-6">
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.category}
            {...budget}
            category={budget.category as BudgetCategory}
          />
        ))}
      </ul>
    </div>
  ) : (
    <p>No Budgets</p>
  );
}

export default BudgetList;

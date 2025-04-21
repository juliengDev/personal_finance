'use client';

import { v4 as uuidv4 } from 'uuid';
import data from '../../data/data.json';
import BudgetPieChart from '../BudgetPieChart';
import CardHeader from '../ui/CardHeader';
import CardMiniOverView from '../ui/CardMiniOverView';

const MAX_DISPLAY = 4;
const { budgets: allBudgets } = data;

const displayedBudget = allBudgets.slice(0, MAX_DISPLAY).map((transaction) => ({
  ...transaction,
  id: uuidv4(),
}));

function BudgetsCard() {
  return (
    <section className="col-span-full flex flex-col justify-between gap-6 rounded-lg bg-white p-8">
      <CardHeader title="Budgets" href="/budgets" />
      <div className="md:flex">
        <BudgetPieChart />

        <div className="col-span-full mx-auto grid w-full max-w-[340px] grid-cols-2 gap-4">
          {displayedBudget &&
            displayedBudget.map((budget) => (
              <CardMiniOverView
                key={budget.id}
                title={budget.category}
                amount={budget.maximum}
                color={budget.theme}
                type="budgets"
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default BudgetsCard;

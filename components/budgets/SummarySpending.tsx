import React from 'react';
import CardMiniBudgets from '../ui/CardMiniBudgets';
import data from '@/data/data.json';
import { v4 as uuidv4 } from 'uuid';
import { BudgetCategory, getSpent } from '@/lib/utilsBudgets';

const MAX_DISPLAY = 4;
const { budgets: allBudgets } = data;

const displayedBudget = allBudgets.slice(0, MAX_DISPLAY).map((transaction) => ({
  ...transaction,
  id: uuidv4(),
  category: transaction.category as BudgetCategory, 
}));

function SummarySpending() {
  return (
    <div className="mx-5">
      <h2 className="text-preset-2 text-grey-900 mb-6">Spending Summary</h2>
      {displayedBudget &&
        displayedBudget.map(({ id, category, maximum, theme }) => (
          <React.Fragment key={id}>
            <CardMiniBudgets
              category={category}
              maximum={maximum}
              theme={theme}
              spent={getSpent(category)}
            />
            <div className="my-4 h-px border-b border-gray-300 last:border-b-0"></div>
          </React.Fragment>
        ))}
    </div>
  );
}

export default SummarySpending;

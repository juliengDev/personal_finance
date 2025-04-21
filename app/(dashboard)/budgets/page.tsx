'use client';

import BudgetPieChart from '@/components/BudgetPieChart';
import AddBudget from '@/components/budgets/AddBudget';
import BudgetList from '@/components/budgets/BudgetList';
import SummarySpending from '@/components/budgets/SummarySpending';
import Title from '@/components/ui/Title';

function Page() {
  return (
    <section className="col-span-full h-screen px-4 py-6 xl:col-span-1 xl:h-screen xl:overflow-y-auto">
      <header className="mb-8.5 flex items-center justify-between">
        <Title name="Budgets" />
        <AddBudget />
      </header>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-8 rounded-xl bg-white">
          <BudgetPieChart />
          <SummarySpending />
        </div>
        <BudgetList />
      </div>
    </section>
  );
}

export default Page;

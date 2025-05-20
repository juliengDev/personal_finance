import { Budget, Pot, Transaction } from '@prisma/client';
import { UserBalance } from '@/actions/balance';

import BudgetsCard from '@/components/overview/BudgetsCard';
import OverviewCards from '@/components/overview/OverviewCards';
import PotsCard from '@/components/overview/PotsCard';
import RecurringBills from '@/components/overview/RecurringBills';
import TransactionsCard from '@/components/overview/TransactionsCard';
import Title from '@/components/ui/Title';

function Overview({
  budgets,
  transactions,
  balance,
  pots,
}: {
  budgets: Budget[];
  transactions: Transaction[];
  balance: UserBalance;
  pots: Pot[];
}) {
  return (
    <section className="col-span-full h-screen px-4 py-6 md:p-10 xl:col-span-1 xl:h-screen xl:overflow-y-auto">
      <div className="col-span-full mb-8">
        <Title name="Overview" />
      </div>

      <div className="col-span-full mb-8">
        <OverviewCards balance={balance} />
      </div>

      <div className="col-span-full flex w-full flex-col gap-8 xl:h-full xl:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <PotsCard pots={pots} />
          <TransactionsCard transactions={transactions} />
        </div>

        <div className="flex flex-1 flex-col gap-8 xl:h-full">
          <BudgetsCard budgets={budgets} transactions={transactions} />
          <RecurringBills transactions={transactions} />
        </div>
      </div>
    </section>
  );
}

export default Overview;

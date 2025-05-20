import { getUserBalance } from '@/actions/balance';
import { getBudgets } from '@/actions/budgets';
import { getPots } from '@/actions/pots';
import { getAllTransactions } from '@/actions/transactions';
import Overview from '@/components/overview/Overview';

async function Page() {
  const budgets = await getBudgets();
  const transactions = await getAllTransactions();
  const balance = await getUserBalance();
  const pots = await getPots();

  return (
    <Overview
      budgets={budgets}
      transactions={transactions}
      balance={balance}
      pots={pots}
    />
  );
}

export default Page;

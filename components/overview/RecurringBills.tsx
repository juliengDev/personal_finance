import CardHeader from '../ui/CardHeader';
import data from '../../data/data.json';
import { v4 as uuidv4 } from 'uuid';
import {
  calculateFinancialSummary,
  FinancialData,
  FinancialDataResult,
} from '@/lib/utils';
import CardMini from '../ui/CardMiniOverView';
const MAX_DISPLAY = 3;

function getFinancialSummaryForCurrentMonth(
  data: FinancialData
): FinancialDataResult {
  const summary = calculateFinancialSummary(data);
  return [
    {
      id: uuidv4(),
      title: 'Paid Bills',
      amount: Number(summary.paidBills.toFixed(2)),
      theme: '#277C78',
    },
    {
      id: uuidv4(),
      title: 'Total Upcoming',
      amount: Number(summary.totalUpcoming.toFixed(2)),
      theme: '#F2CDAC',
    },
    {
      id: uuidv4(),
      title: 'Due Soon',
      amount: Number(summary.dueSoon.toFixed(2)),
      theme: '#82C9D7',
    },
  ];
}

const recurring = getFinancialSummaryForCurrentMonth(data);

function RecurringBills() {
  return (
    <section className="col-span-full flex flex-col justify-between gap-6 rounded-lg bg-white p-8">
      <CardHeader title="Recurring Bills" href="/recurring-bills" />
      {recurring &&
        recurring.map((item) => (
          <CardMini
            key={item.id}
            title={item.title}
            amount={item.amount ?? 0}
            color={item.theme}
            type="recurringBills"
          />
        ))}
    </section>
  );
}

export default RecurringBills;

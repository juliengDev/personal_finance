import { UserBalance } from '@/actions/balance';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatAmount } from '@/lib/utils';

export type CardProps = {
  title: string;
  amount: number;
  isFirstCard: boolean;
};
export type TitleProps = {
  name: string;
};

function OverviewCards({ balance }: { balance: UserBalance }) {
  return (
    <div className="col-span-full flex w-full flex-col justify-between gap-6 md:flex-row">
      <SummaryCard
        title="Current"
        amount={balance.current}
        isFirstCard={true}
      />
      <SummaryCard title="Income" amount={balance.income} isFirstCard={false} />
      <SummaryCard
        title="Expenses"
        amount={balance.expenses}
        isFirstCard={false}
      />
    </div>
  );
}

function SummaryCard({ title, amount, isFirstCard }: CardProps) {
  const displayAmount = formatAmount(amount);
  return (
    <Card
      className={`flex-1 ${isFirstCard ? 'bg-grey-900 text-white' : 'text-grey-900 border-0 bg-white'}`}
    >
      <CardHeader>
        <CardTitle
          className={`text-preset-4 ${isFirstCard ? 'text-white' : 'text-grey-500'} `}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-preset-1">${displayAmount}</CardContent>
    </Card>
  );
}
export default OverviewCards;

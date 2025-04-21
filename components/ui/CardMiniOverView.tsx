type CardType = 'pots' | 'budgets' | 'recurringBills';

type CardMiniType = {
  title: string;
  amount: number;
  color: string;
  type: CardType;
};

const classMap: Record<CardType, string> = {
  pots: 'relative flex max-h-13 flex-col gap-2 rounded-lg pl-4 bg-white',
  budgets: 'relative flex max-h-13 flex-col gap-2 rounded-lg pl-4 bg-white',
  recurringBills:
    'relative flex justify-between max-h-13 gap-2 rounded-lg py-4 px-5 bg-beige-100',
};

const CardMiniOverView = ({ title, amount, color, type }: CardMiniType) => {
  const colorStyle = color.startsWith('#') ? color : color;

  return (
    <div className={classMap[type]}>
      <div
        className="absolute top-0 left-0 h-full w-1 rounded-full"
        style={{ backgroundColor: colorStyle }}
      />

      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-bold text-gray-900">${amount}</p>
    </div>
  );
};

export default CardMiniOverView;

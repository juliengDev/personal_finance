import { BudgetCategory } from '@/lib/utilsBudgets';

type CardMiniType = {
  category: BudgetCategory;
  maximum: number;
  spent: number;
  theme: string;
};

function CardMiniBudgets({ category, maximum, spent, theme }: CardMiniType) {
  const colorStyle = theme.startsWith('#') ? theme : theme;
  return (
    <li className="relative flex max-h-5 flex-col gap-2 rounded-lg bg-white pl-4">
      <div
        className="absolute top-0 left-0 h-full w-1 rounded-full"
        style={{ backgroundColor: colorStyle }}
      />
      <div className="flex items-center justify-between">
        <p className="text-preset-4 text-gray-500">{category}</p>
        <p className="text-preset-5 text-gray-500">
          <span className="text-preset-3 text-gray-900">${spent}</span>
          {` of ${maximum}`}
        </p>
      </div>
    </li>
  );
}

export default CardMiniBudgets;

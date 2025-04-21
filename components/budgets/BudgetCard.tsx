import { BudgetCategory, getSpent } from '@/lib/utilsBudgets';
import BudgetDropDown from './BudgetDropDown';
import { Progress } from '@/components/ui/progress';

type Budget = {
  category: BudgetCategory;
  maximum: number;
  theme: string;
};

function BudgetCard({ category, maximum, theme }: Budget) {
  const spent = getSpent(category);
  const percentage = parseFloat(((spent / maximum) * 100).toFixed(2));
  return (
    <li className="flex flex-col gap-5 rounded-xl bg-white px-5 py-7">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div
            style={{ backgroundColor: theme }}
            className={`h-4 w-4 rounded-full`}
          ></div>
          <h3 className="text-preset-2 text-grey-900">{category}</h3>
        </div>
        <BudgetDropDown />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-grey-500 text-preset-4">Maximum of ${maximum}</p>
        <Progress
          className="bg-beige-100 h-8 w-full rounded-md" // rounded-md équivaut à environ 4px
          value={percentage}
          indicatorColor={theme}
          innerPadding={4}
          indicatorClassName="rounded-md" // Appliquer le même border-radius à l'indicateur
        />
      </div>
    </li>
  );
}

export default BudgetCard;

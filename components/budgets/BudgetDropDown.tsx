import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

function BudgetDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-grey-300 cursor-pointer">
        ...
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="z-50 border-none bg-white">
        <DropdownMenuItem className="hover:bg-grey-100">
          Edit Budget
        </DropdownMenuItem>
        <div className="mx-auto my-1 h-px w-[80%] border-b border-gray-300 last:border-b-0"></div>
        <DropdownMenuItem className="hover:bg-grey-100 text-red">
          Delete Budget
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BudgetDropDown;

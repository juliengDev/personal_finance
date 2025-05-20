/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

type MobileSelectMenuProps = {
  iconSrc: string;
  alt: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
};

function SelectInputMobile({
  iconSrc,
  alt,
  label,
  value,
  onChange,
  options,
}: MobileSelectMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button type="button" aria-haspopup="listbox" aria-expanded={open}>
            <img src={iconSrc} alt={alt} className="h-4 w-4 cursor-pointer" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="end"
          sideOffset={30}
          className="max-h-64 w-fit overflow-y-auto border-none px-5 md:hidden"
        >
          <ul role="listbox" className="flex flex-col">
            {/* This is the label element that is always visible */}
            <li className="border-grey-100 text-grey-500 border-b-1 pb-2 last:border-b-0">
              <Button type="button" disabled variant="dropdown" aria-disabled>
                {label}
              </Button>
            </li>

            {/* This is the list of options */}
            {options.map((opt) => {
              const isActive = opt.value === value;

              const handleClick = () => {
                onChange(opt.value);
                setOpen(false);
              };

              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isActive}
                  className="border-grey-100 border-b-1 py-2 last:border-b-0 last:pb-0"
                >
                  <Button
                    variant="dropdown"
                    className={`${isActive && 'font-bold'}`}
                    onClick={handleClick}
                  >
                    {opt.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default SelectInputMobile;

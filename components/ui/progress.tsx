'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  indicatorColor?: string;
  innerPadding?: number;
}

function Progress({
  className,
  value,
  indicatorColor,
  innerPadding = 0,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'relative flex w-full items-center justify-start overflow-hidden rounded-md',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 p-1">
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full rounded-sm transition-all"
          style={{
            width: `${value || 0}%`,
            backgroundColor: indicatorColor || 'var(--primary)',
          }}
        />
      </div>
    </ProgressPrimitive.Root>
  );
}

export { Progress };

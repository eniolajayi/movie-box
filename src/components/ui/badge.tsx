import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-gray-900 text-gray-50 hover:bg-gray-900/80',
        secondary:
          'border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80 ',
        destructive:
          'border-transparent bg-red-500 text-gray-50 hover:bg-red-500/80',
        outline: 'text-gray-950 dark:text-gray-50',
        primary: 'border border-red-100 text-red-700  text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

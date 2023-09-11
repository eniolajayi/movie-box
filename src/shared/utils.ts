import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add comment
export function getPercentValue(
  num: number,
  total: number,
  fractionDigit: number = 0,
) {
  return Number.parseInt(((num / total) * 100).toFixed(fractionDigit));
}

import { type ReactNode, type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  largeText?: boolean;
  largeMarginX?: boolean;
  extraLargeMarginX?: boolean;
  children: ReactNode;
} & ComponentProps<'p'>;

export function Paragraph({
  largeText,
  largeMarginX,
  children,
  className,
  ...spread
}: Props) {
  return (
    <p
      className={cn(
        'my-10 flex flex-col px-6 text-xs sm:px-20 lg:px-28',
        { 'text-lg': largeText },
        { 'px-14 sm:px-24 lg:px-60': largeMarginX },
        className,
      )}
      {...spread}
    >
      {children}
    </p>
  );
}

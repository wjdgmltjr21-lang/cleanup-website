import * as React from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn('rounded-2xl bg-sky px-5 py-3 font-semibold text-navy transition hover:scale-[1.02] hover:opacity-90 disabled:opacity-50', className)} {...props} />;
}

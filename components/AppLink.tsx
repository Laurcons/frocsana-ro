import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

import Link, { LinkProps } from 'next/link';

import { SquareArrowOutUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function AppLink({
  href,
  external = false,
  children,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: boolean }) {
  return (
    <Link href={href} className={cn('text-cyan-800', className)} {...rest}>
      <span className="underline">{children}</span> {external && <SquareArrowOutUpRight className="inline-block w-3" />}
    </Link>
  );
}

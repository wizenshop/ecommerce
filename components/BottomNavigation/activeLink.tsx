'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ActiveLink({ href, children, ...res }: ActiveLinkProps) {
  const pathName = usePathname();
  const isCurrentPath = pathName == href;

  const linkClasses = clsx({
    'text-colorActiveMenuIcon': isCurrentPath,
  });

  return (
    <Link {...res} href={href} className={linkClasses}>
      {children}
    </Link>
  );
}

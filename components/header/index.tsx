'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';

import { BottomNavigation } from '../BottomNavigation';
//import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from './DesktopMenu';

import { useMediaQuery } from 'react-responsive';

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  /*
    {isMobile ? (
        <>
          <BottomNavigation />
        </>
      ) : (
        <p></p>
      )}

  */
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

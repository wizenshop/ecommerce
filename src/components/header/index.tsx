'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';

import { BottomNavigation } from '../BottomNavigation';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';

import useIsMobile from '@/hooks/useIsMobile';

export function Header() {
  const isMobile =  useIsMobile();

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
    <>
      {isMobile && <BottomNavigation />}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          {/* <MainNav items={siteConfig.mainNav} /> */}

          <div className="flex flex-1 items-center justify-end space-x-4">
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
          </div>
        </div>
      </header>
    </>
  );
}

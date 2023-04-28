'use client';

import { BottomNavigation } from '../BottomNavigation';
//import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from './DesktopMenu';

import { useMediaQuery } from 'react-responsive';

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? (
        <>
          <BottomNavigation />
        </>
      ) : (
        <p></p>
      )}
    </>
  );
}

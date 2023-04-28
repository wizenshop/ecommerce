"use client";


import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { BottomNavigation } from "./BottomNavigation";

import { useMediaQuery } from "react-responsive";

/**
 *  {isMobile ? (
        <>
          <MobileMenu />
          <BottomNavigation />
        </>
      ) : (
        <DesktopMenu />
      )}
 */
export function Header() {
 // const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
     <DesktopMenu />
    </>
  );
}

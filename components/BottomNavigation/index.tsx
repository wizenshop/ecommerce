import Link from 'next/link';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const activeItemStyles = {
  color: '$colorActiveMenuIcon',
};

export function BottomNavigation() {
  return (
    <header className="fixed bottom-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
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
                <BiHomeAlt size={30} />
                <span className="sr-only">Home</span>
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
                <AiOutlineShoppingCart size={30} />
                <span className="sr-only">Carrinho</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

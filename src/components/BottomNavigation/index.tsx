import Link from 'next/link';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { ActiveLink } from '../BottomNavigation/activeLink';
import { buttonVariants } from '../ui/button';

const activeItemStyles = {
  color: '$colorActiveMenuIcon',
};

export function BottomNavigation() {
  return (
    <header className="fixed border-t bottom-0 z-40 w-full border-b bg-background shadow-md h-shadow-gray-dark">
      <div className="flex flex-1 items-center justify-center">
        <nav className="flex items-center justify-center gap-10">
          <div
            className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
            })}
          >
            <ActiveLink href="#">
              <BiHomeAlt size={30} />
              <span className="sr-only">Home</span>
            </ActiveLink>
          </div>

          <div
            className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
            })}
          >
            <ActiveLink href="#">
              <FiShoppingBag size={25} />
              <span className="sr-only">Produtos</span>
            </ActiveLink>
          </div>

          <div
            className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
            })}
          >
            <ActiveLink href="#">
              <AiOutlineShoppingCart size={30} />
              <span className="sr-only">Carrinho</span>
            </ActiveLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

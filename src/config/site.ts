export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  bottomNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Produtos',
      href: '/carrinho',
    },
    {
      title: 'Cart',
      href: '/carrinho',
    },
    {
      title: 'Perfil',
      href: '/perfil',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};

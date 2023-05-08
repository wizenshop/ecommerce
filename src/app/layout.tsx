import '../styles/globals.css';
import { Metadata } from 'next';


import { ThemeProvider } from '../components/theme-provider';
import { TailwindIndicator } from '../components/tailwind-indicator';
import { Header } from '../components/header';
import { ButtonWhatsapp } from '../components/ButtonWhatsapp';
import { siteConfig } from '../config/site';
import { cn } from '../lib/utils';
import { fontSans } from '../lib/fonts';



export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col pb-10">
              <Header />
              <div className="flex-1">
                <ButtonWhatsapp />
                {children}
              </div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

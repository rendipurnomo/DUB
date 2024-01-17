"use client";

import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/DarkMode/theme-provider';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHomePage);

  useEffect(() => {
    if(isLoading)return
  },[isLoading])
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {isLoading && isHomePage ? (
              <SplashScreen finishLoading={() => setIsLoading(false)} />
            ) : (
              <Layout>
                <Navbar />
                <Toaster
                  position="top-center"
                  toastOptions={{
                    style: {
                      background: '#ffffff',
                      color: '#000',
                    },
                  }}
                />
                {/* <PageButton /> */}
                {children}
                <Footer />
              </Layout>
            )}
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}

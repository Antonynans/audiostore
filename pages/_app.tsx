import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { CartProvider } from '../context';
import { Toaster } from 'react-hot-toast';

function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
     setHasMounted(true);
  }, []);

  if (!hasMounted) {
     return null;
  }
  return (
     <div {...delegated}>{children}</div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ClientOnly>
        <CartProvider>
        <Toaster />
          <Component {...pageProps} />
        </CartProvider>
      </ClientOnly>

  )
}

export default MyApp

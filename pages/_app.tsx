import React from 'react';
import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { CartProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      </CartProvider>
  )
}

export default MyApp

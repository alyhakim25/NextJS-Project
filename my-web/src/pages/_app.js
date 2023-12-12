import { PopupProvider } from '@/component/context'
import '@/styles/globals.css'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  
  return (
    //<PopupProvider>
    <Component {...pageProps} />
    //</PopupProvider>
    )
}

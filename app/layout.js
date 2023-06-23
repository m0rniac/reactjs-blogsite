import React from 'react';
import Script from 'next/script';
import { Inter } from 'next/font/google';

import { NavBar } from "./NavBar";
import Footer from "./Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aloha | La Hora Libre',
  description: 'lahoralibre.com',
  icons: {
    icon: '/LOGO_noBackground.png',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
          {/* [Corpus; Bootstrap .JS] */}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe' crossOrigin='anonymous' />
          <NavBar />
          {children}
          <Footer />
      </body>
    </html>
  )
}

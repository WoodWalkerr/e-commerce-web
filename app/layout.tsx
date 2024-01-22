import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CartProvider from "./components/Providers";
import ShoppingCartModal from './components/ShoppingCartModal';
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopEase',
  description: 'ShopEase is your all-in-one solution for a seamless and enjoyable shopping journey. Designed with simplicity and convenience in mind, ShopEase brings together a range of features to enhance your online shopping experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

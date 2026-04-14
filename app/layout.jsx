import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://alkemeins.com/habitational'),
  title: {
    template: '%s | ALKEME Insurance Services',
    default: 'Habitational Insurance | ALKEME Insurance Services',
  },
  description: 'ALKEME Insurance Services provides specialized habitational insurance for apartment buildings, condominiums, rental properties, and property management companies. Coverage for property, liability, flood, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ALKEME Insurance Services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'ALKEME Insurance Services \u2014 Habitational Insurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habitational Insurance | ALKEME Insurance Services',
    description: 'Specialized habitational insurance for apartment buildings, condos, and rental properties across all 50 states.',
    images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://alkemeins.com/habitational/',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}

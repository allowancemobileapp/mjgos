import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Toaster } from "@/components/ui/toaster";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: {
    default: 'MJGOS - Simplicity and Functionality',
    template: '%s | MJGOS',
  },
  description: 'MJGOS (Mr James Group of SAAS) builds high-quality, functional software solutions including web apps, websites, and mobile apps.',
  openGraph: {
    title: 'MJGOS - Simplicity and Functionality',
    description: 'MJGOS builds high-quality, functional software solutions.',
    url: 'https://mjgos.example.com', // Replace with actual URL
    siteName: 'MJGOS',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'MJGOS App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MJGOS - Simplicity and Functionality',
    description: 'MJGOS builds high-quality, functional software solutions.',
    // creator: '@yourtwitterhandle', // Replace with actual Twitter handle
    images: ['https://placehold.co/1200x600.png'], // Replace with actual Twitter image
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
  // verification: { // Add verification tags if needed
  //   google: 'your-google-site-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

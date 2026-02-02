import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baliexpresslaundry.vercel.app"),
  icons: {
    icon: '/logo-compressed.png',
    apple: '/logo-compressed.png',
  },
  title: "Bali Express Laundry | 2-Hour Express Service in Bali | Free Pickup & Delivery",
  description: "Premium laundry service in Bali with 2-hour express turnaround. Free pickup & delivery across Seminyak, Canggu, Kuta & more. Open 24/7. WhatsApp: +62 851-9850-4914",
  keywords: [
    "Bali laundry",
    "express laundry Bali",
    "24 hour laundry service Bali",
    "laundry pickup delivery Bali",
    "Canggu laundry",
    "Seminyak laundry",
    "Kuta laundry",
    "fast laundry service Bali",
    "shoe laundry Bali",
    "wash iron fold Bali",
    "dedicated machine laundry"
  ],
  authors: [{ name: "Bali Express Laundry" }],
  creator: "Bali Express Laundry",
  publisher: "Bali Express Laundry",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://baliexpresslaundry.vercel.app",
    title: "Bali Express Laundry | 2-Hour Express Service in Bali",
    description: "Premium laundry service in Bali with 2-hour express turnaround. Free pickup & delivery across Seminyak, Canggu, Kuta & more. Open 24/7.",
    siteName: "Bali Express Laundry",
    images: [
      {
        url: "https://baliexpresslaundry.vercel.app/logo-compressed.png",
        width: 300,
        height: 158,
        alt: "Bali Express Laundry Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Express Laundry | 2-Hour Express Service in Bali",
    description: "Premium laundry service in Bali with 2-hour express turnaround. Free pickup & delivery across Seminyak, Canggu, Kuta & more. Open 24/7.",
    images: {
      url: "https://baliexpresslaundry.vercel.app/logo-compressed.png",
      alt: "Bali Express Laundry Logo"
    }
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://baliexpresslaundry.vercel.app",
  },
  // Content Security Policy
  securityHeaders: {
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:*.gstatic.com https://*.googleapis.com; font-src 'self' data: https://*.gstatic.com https://*.googleapis.com; connect-src 'self' blob:; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; report-uri https://baliexpresslaundry.vercel.app/csp-violation;",
    "X-Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"
import { Blaka, Righteous, Open_Sans } from 'next/font/google';
import "./globals.css";

const blaka = Blaka({
  weight: ['400'], // Specify font weights (optional)
  subsets: ['latin'], // Specify subsets
  variable: "--font-quicksand",
});

const openSans = Open_Sans({
  weight: ['400'], // Specify font weights (optional)
  subsets: ['latin'], // Specify subsets
  variable: "--font-open-sans",
});

const righteous = Righteous({
  weight: ['400'], // Specify font weights (optional)
  subsets: ['latin'], // Specify subsets
  variable: "--font-righteous",
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// app/layout.tsx
export const metadata = {
  title: "Zwenti | Xcalilabs", // Default page title
  description: "An awesome 20 questions game, find who or what it is!",
  icons: {
    icon: "/favicon.ico", // Path to favicon
    apple: "/apple-touch-icon.png", // Apple touch icon
  },
  openGraph: {
    title: "Zwenti | Xcalilabs",
    description: "An awesome 20 questions game, find who or what it is!",
    url: "https://who-s-that.vercel.app",
    siteName: "Zwenti",
    // images: [
    //   {
    //     url: "https://mywebsite.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Zwenti",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "./Zwenti.png",
    title: "Zwenti | Xcalilabs",
    description: "An awesome 20 questions game, find who or what it is!",
    images: ["./Zwenti.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${blaka.variable} ${righteous.variable} ${openSans.variable}`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

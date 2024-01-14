import "./globals.css";
import { ReactNode } from "react";
import { Roboto, Montserrat } from 'next/font/google'
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: "Next 14 Boilerplate",
  description:
    "My own config for Next.js 14 Boilerplate",
  openGraph: {
    title: "Next 14 Boilerplate",
    description:
      "My own config for Next.js 14 Boilerplate",
    url: "https://yourdomain.com",
    siteName: "Next 14 Boilerplate",
    images: [
      {
        url: "/thumbnail.png",
        width: 1440,
        height: 1020,
      },
    ],
  },
};

const montserrat = Montserrat({
  variable: '--primary',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ["100","300","400","500","700", "900" ],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--secondary',
})


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserrat.variable} bg-highlight`}>
      <body className="min-h-screen w-full">{children}</body>
    </html>
  );
}

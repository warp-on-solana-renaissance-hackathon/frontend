import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins(
  { subsets: ["latin"],
    weight: '400',
});

export const metadata: Metadata = {
  title: "Warp.fi",
  description: "Warp Finance is a decentralized finance protocol that enables users to engage in direct swaps from one asset to another.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={font.className}>
          <Analytics />
          {children}
        </body>
    </html>
  );
}

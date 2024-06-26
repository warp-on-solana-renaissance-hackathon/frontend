import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import Providers from "@/app/providers";

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
          <ThemeProvider
            attribute="class"
            disableTransitionOnChange
            enableSystem
            forcedTheme="dark"
          >
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
        </body>
    </html>
  );
}

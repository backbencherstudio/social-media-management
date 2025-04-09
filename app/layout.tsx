import { AppConfig } from "@/config/app.config";
import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from 'next/font/google';
import localFont from 'next/font/local';

// Load Inter Tight from Google Fonts
const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
});

// Load Serotiva from local files
const serotiva = localFont({
  src: '../public/fonts/Serotiva-Bold.otf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${interTight.className} ${serotiva.className}`}>
      <body>{children}</body>
    </html>
  );
}

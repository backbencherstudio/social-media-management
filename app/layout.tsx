import { AppConfig } from "@/config/app.config";
import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import { ReduxProvider } from "@/src/redux/provider";

// Load Inter Tight from Google Fonts
const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

// Load Serotiva with all weights
const serotiva = localFont({
  src: [
    {
      path: "../public/fonts/Serotiva-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Serotiva-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Serotiva-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-serotiva",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.className} ${serotiva.variable}`}
    >
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

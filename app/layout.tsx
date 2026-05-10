import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christie Shen | Strategic Business Leader",
  description:
    "Director & Head of Strategy at Adobe. 15+ years driving growth strategy, AI go-to-market, and operational transformation.",
  openGraph: {
    title: "Christie Shen | Strategic Business Leader",
    description:
      "Director & Head of Strategy at Adobe. 15+ years driving growth strategy, AI go-to-market, and operational transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-white text-[#1C1C1C]">{children}</body>
    </html>
  );
}

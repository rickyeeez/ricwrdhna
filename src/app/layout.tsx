import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RicWrdhna Dev",
  description:
    "Portfolio Ricky Triyoga Wardhana, which made from Next JS , Tailwind and Designed In Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#221e1e] ${outfit.className} text-white`}>
        {children}
      </body>
    </html>
  );
}

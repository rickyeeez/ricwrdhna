import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricky Triyoga Wardhana | Portfolio",
  description:
    "Explore the portfolio of Ricky Triyoga Wardhana, a skilled developer specializing in Next.js, Tailwind CSS, and Figma designs. Discover projects, skills, and experience in web development.",
  keywords:
    "Ricky Triyoga Wardhana, Next.js Developer, Tailwind CSS, Figma designs, Web Development Portfolio, Frontend Developer, Web Projects, Web Developer Skills",
  authors: { name: "Ricky Triyoga Wardhana" },
  robots: "index, follow",
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PatriArchPlus",
  description:
    "PatriArchPlus - Innovant des solutions architecturales pour une vie moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="">
      <head>
        <link rel="Canoniques" href="https://patriarchplus.com" />
      </head>
      <body className={inter.className + "  min-h-screen"}>{children}</body>
    </html>
  );
}

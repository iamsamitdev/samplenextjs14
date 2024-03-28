import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: ["Create Next App", "Next.js"],

  // Additional
  icons: "/favicon.ico",

  // Robots
  robots: "index, follow",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="text-2xl">Header</h1>
        {children}
        <h1 className="text-2xl">Footer</h1>
      </body>
    </html>
  );
}

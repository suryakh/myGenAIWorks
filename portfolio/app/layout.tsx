import type { Metadata } from "next";
import { Raleway, DM_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Surya Khandavilli | Full Stack Developer",
  description:
    "Portfolio of Surya Khandavilli — Full Stack Developer with expertise in React, Node.js, Next.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${dmSans.variable} dark`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

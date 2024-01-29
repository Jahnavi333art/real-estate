import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BM Real Estate & Constructions",
  description: "BM Real Estate & Constructions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="min-h-screen relative flex flex-col">
          {/* Navbar */}
          <Navbar />

          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}

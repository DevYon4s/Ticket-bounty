import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { buttonVariants } from "@/components/ui/button"
import "./globals.css";
import Link from "next/link";
import { homepath, tickets } from "@/path";
import { LucideKanban } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket bounty",
  description: "Ticket bounty is a simple ticket management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-secondary/80 backdrop-blur-md border-b border-gray-200 px-8 py-4">
          <div>

            <Link href={homepath()} className={buttonVariants({ variant: "ghost" })}>
              <LucideKanban size={48} />
              <h1 className="font-bold text-lg">Ticket Bounty</h1>
            </Link>

          </div>
          <div>
            <Link href={tickets()} className={buttonVariants({ variant: "default" })}>Tickets</Link>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">{children}</main>

      </body>
    </html>
  );
}

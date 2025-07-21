import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/header";

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
      <body>
        <Header />
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">{children}</main>

      </body>
    </html>
  );
}

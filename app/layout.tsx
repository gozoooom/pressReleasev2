import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "Zoooom Newsroom",
  description: "Latest press releases and news from Zoooom",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-white border-b">
        <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

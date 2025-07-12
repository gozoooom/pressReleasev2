import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Zoooom Newsroom",
  description: "Latest press releases and news from Zoooom",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-white border-b">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">zoooom</Link>
            <div className="flex space-x-6">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/garage" className="hover:underline">My Garage</Link>
              <Link href="/mechanic" className="hover:underline">Mechanic</Link>
              <Link href="/about" className="hover:underline">About Us</Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
              <input
                type="text"
                placeholder="Search"
                className="border px-2 py-1 rounded"
              />
              <button className="border px-3 py-1 rounded text-sm">Search</button>
            </div>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-100 text-sm py-4 mt-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
            <p>&copy; Zoooom, All Rights Reserved</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/garage" className="hover:underline">My Garage</Link>
              <Link href="/mechanic" className="hover:underline">Mechanics</Link>
              <Link href="/about" className="hover:underline">About Us</Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
              <Link href="/" className="hover:underline">Newsroom</Link>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/cookies" className="hover:underline">Cookies Policy</Link>
              <Link href="/privacy" className="hover:underline">Privacy Notice</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

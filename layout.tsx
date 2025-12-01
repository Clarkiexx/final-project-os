import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "valle",
  description: "Creative web design portfolio",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[var(--color-primary-50)] to-indigo-100 min-h-screen text-[var(--color-foreground)] antialiased`}>
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <main className="pt-24">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Scheduling", path: "/fcfs" },
  { name: "Contact", path: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/profiles2.jpg" alt="Valle" width={44} height={44} className="rounded-full object-cover ring-2 ring-white/40" />
          <span className="text-lg font-semibold text-[var(--color-foreground)] hidden sm:inline">Valle</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-md transition ${pathname === item.path ? 'text-[var(--color-primary-600)] font-semibold' : 'text-slate-600 hover:text-[var(--color-primary-600)]'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="p-2">
            <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="md:hidden">
            <div className="absolute inset-0 bg-black/30" onClick={() => setIsOpen(false)} />
            <div className="relative bg-white/95 p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                <Link href="/" className="flex items-center gap-3">
                  <Image src="/profiles2.jpg" alt="Valle" width={36} height={36} className="rounded-full object-cover" />
                  <span className="text-lg font-bold text-gray-800">Valle</span>
                </Link>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="p-2">
                  <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <nav>
                <ul className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path} onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md ${pathname === item.path ? 'text-[var(--color-primary-600)] font-semibold' : 'text-gray-700 hover:text-[var(--color-primary-600)]'}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

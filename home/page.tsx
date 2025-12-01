"use client";

import { motion } from "framer-motion";
import AnimatedPhoto from "@/app/components/animated-photo";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-700 leading-tight">
            Hello —
            <br />
            <span className="text-[var(--color-primary-600)] inline-block">I'm Clark Valle</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 font-semibold">Front-end Web Designer</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-lg text-slate-600"
          >
            I design responsive, user-focused digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 sm:mt-10"
          >
            <Link
              href="/contacts"
              className="inline-block bg-[var(--color-primary-500)] text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[var(--color-primary-600)] transition shadow-md hover:shadow-lg"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <AnimatedPhoto />
        </motion.div>
      </div>
    </section>
  );
}
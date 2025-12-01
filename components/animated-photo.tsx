"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedPhoto() {
  return (
    <div className="relative w-80 h-80 mx-auto">

      {/* subtle animated indigo ring halo */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.6, 0.95, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ boxShadow: "0 0 60px var(--color-primary-600)", borderRadius: "50%" }}
      />

      <motion.div
        className="relative w-full h-full overflow-hidden rounded-full ring-4 ring-[var(--color-primary-600)]/20 shadow-2xl"
        animate={{}}
      >
        <Image
          src="/profiles2.jpg"
          alt="Profile"
          fill
          className="object-cover rounded-full"
        />
      </motion.div>
    </div>
  );
}

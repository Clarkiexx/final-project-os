"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sales Report System",
    desc: "Daily sales reporting dashboard with export features and simple analytics.",
    img: "/sales.jpg",
    link: "https://github.com/Clarkiexx/LAZHOPPEE",
    tags: ["Node", "Express", "MySQL"],
  },
  
  {
    title: "CareSync",
    desc: "A remote care-button system for elderly communication and alerts.",
    img: "/caresync.jpg",
    link: "https://github.com/Clarkiexx/profile-page",
    tags: ["IoT", "React", "Prototype"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800"
        >
          Selected Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ translateY: -8 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-xl transition-transform duration-300 focus-within:shadow-xl"
            >
              <div className="flex flex-col sm:flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.img || `/placeholder.svg?height=600&width=800`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-5 sm:p-6 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tags || []).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--color-primary-600)] text-white text-sm font-semibold hover:bg-[var(--color-primary-700)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:ring-offset-2"
                    >
                      View Project
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>

                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-700">
                      Open link
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
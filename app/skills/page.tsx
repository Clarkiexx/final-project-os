"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Figma", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Webflow", level: 80 },
  { name: "JavaScript", level: 87 },
  { name: "TypeScript", level: 82 },
  { name: "Express", level: 88 },
  { name: "PHP", level: 82 },
];

const Logo = ({ name }: { name: string }) => {
  switch (name) {
    case "Figma":
      return <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 rounded-md" />;
    case "UI/UX Design":
      return (
        <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-black text-sm">UX</div>
      );
    case "React / Next.js":
      return (
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl font-light">N</div>
      );
    case "Tailwind CSS":
      return (
        <div className="w-10 h-10 bg-[var(--color-primary-500)] rounded-xl flex items-center justify-center text-white font-bold text-sm">TW</div>
      );
    case "Webflow":
      return <div className="w-10 h-10 bg-[var(--color-primary-600)] rounded-lg flex items-center justify-center text-white font-bold">W</div>;
    case "JavaScript":
      return <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold">JS</div>;
    case "TypeScript":
      return <div className="w-10 h-10 bg-[var(--color-primary-700)] rounded-xl flex items-center justify-center text-white font-bold">TS</div>;
    case "Express":
      return <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-white font-mono">EX</div>;
    case "PHP":
      return <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">PHP</div>;
    default:
      return <div className="w-10 h-10 bg-gray-400 rounded-xl" />;
  }
};

function levelLabel(level: number) {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Proficient";
  return "Learning";
}

export default function Skills() {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--color-primary-50)] via-white to-purple-50">
      <div className="max-w-6xl mx-auto">

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">Skills & Tools</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">A curated set of tools and technologies I use frequently — with proficiency levels and concise labels.</p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, i) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 focus-within:shadow-lg"
              tabIndex={0}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-1 bg-white rounded-lg shadow-inner">
                    <Logo name={skill.name} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{skill.name}</h3>
                    <div className="text-xs text-gray-500">{levelLabel(skill.level)}</div>
                  </div>
                </div>

                <div className="text-sm font-semibold text-[var(--color-primary-600)]">{skill.level}%</div>
              </div>

              <div className="mt-4">
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + i * 0.05 }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-700)] shadow-sm"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>{skill.level}%</span>
                  <span>{levelLabel(skill.level)}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"

import { Code, Server, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-transparent min-h-screen flex flex-col items-center px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-4 md:gap-12 justify-center items-start">
        {/* Left: Intro text and button */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xs md:max-w-sm lg:sticky top-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">Things I do for you that simply make your software better.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Various elements: server-side, UI, Microservices, cloud, all the stages, even people.</p>
          {/* <button className="px-6 py-2 rounded-lg bg-[var(--primary)] text-white font-semibold shadow hover:brightness-95 transition mb-2">See all services</button> */}
        </div>
        {/* Right: Services grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* General code (highlighted) */}
          <motion.div
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-xl p-4 md:p-8 shadow-sm min-h-[160px] md:min-h-[200px] border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-[var(--primary)] flex flex-col items-start justify-between animate-fade-in-up transition-all rotate-3"
            whileHover={{ scale: 1.04 }}
          >
            <Code size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-sm mb-4">
              I build modern and responsive websites using technologies like React, Next.js, and Tailwind CSS. My focus is on creating fast, accessible, and user-friendly interfaces.
            </p>

          </motion.div>
          {/* Code systems */}
          <motion.div
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-xl p-4 md:p-8 shadow-sm min-h-[160px] md:min-h-[200px] border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-[var(--primary)] flex flex-col items-start justify-between animate-fade-in-up transition-all"
            whileHover={{ scale: 1.04 }}
          >
            <Server size={32} className="text-blue-200 mb-4" />
            <h3 className="text-xl font-bold mb-2">API Development</h3>
            <p className="text-sm mb-4">
              I create secure and scalable RESTful APIs using Node.js and Express, connected to MongoDB or MySQL, to power full-featured applications.
            </p>

          </motion.div>
          {/* DevOps */}
          <motion.div
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-xl p-4 md:p-8 shadow-sm min-h-[160px] md:min-h-[200px] border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-[var(--primary)] flex flex-col items-start justify-between animate-fade-in-up transition-all"
            whileHover={{ scale: 1.04 }}
          >
            <Smartphone size={32} className="text-blue-200 mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
            <p className="text-sm mb-4">
              I develop cross-platform mobile apps using React Native, with a focus on smooth performance and consistent user experience across devices.
            </p>

          </motion.div>
          {/* Agile consulting */}
          <motion.div
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-xl p-4 md:p-8 shadow-sm min-h-[160px] md:min-h-[200px] border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-[var(--primary)] flex flex-col items-start justify-between animate-fade-in-up transition-all"
            whileHover={{ scale: 1.04 }}
          >
            <Users size={32} className="text-blue-200 mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
            <p className="text-sm mb-4">
              I work efficiently in teams using Git, GitHub, Trello, and Agile practices like Scrum or Kanban to ensure organized and productive workflows.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
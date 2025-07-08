"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      className="w-full max-w-full md:max-w-4xl mx-auto my-8 md:my-16 p-4 md:p-8 rounded-2xl shadow-sm"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-[var(--primary)] text-center"
        variants={{ hidden: { opacity: 0, y: -30 }, show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8 } } }}
      >
        Expérience
      </motion.h2>
      <motion.div
        className="space-y-4 md:space-y-6"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
      >
        <ExperienceCard
          title="Senior Frontend Developer - TechCorp"
          period="2021 - Présent"
          items={[
            "Conception et développement d'applications React/Next.js à fort trafic",
            "Encadrement d'une équipe de 4 développeurs",
            "Mise en place de CI/CD et bonnes pratiques de code"
          ]}
          delay={0.1}
        />
        <ExperienceCard
          title="Développeur Fullstack - WebSolutions"
          period="2018 - 2021"
          items={[
            "Développement d'APIs REST et d'interfaces utilisateurs modernes",
            "Optimisation des performances et accessibilité"
          ]}
          delay={0.2}
        />
      </motion.div>
    </motion.section>
  );
}

function ExperienceCard({ title, period, items, delay }: {
  title: string,
  period: string,
  items: string[],
  delay: number
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm group hover:shadow-md hover:border-[var(--primary)] transition-all duration-300 border border-gray-200 dark:border-gray-700"
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8, delay } } }}
      whileHover={{ y: -8, scale: 1.04, boxShadow: "0 4px 32px 0 #4ade8055" }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-700">{period}</p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
} 
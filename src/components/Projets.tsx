"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Code2, ExternalLink } from "lucide-react";

export default function Projets() {
  return (
    <motion.section
      id="projects"
      className="w-full my-16 p-4 md:p-8 rounded-2xl"
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
        className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-50 text-center"
        variants={{ hidden: { opacity: 0, y: -30 }, show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8 } } }}
      >
        Projets
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
      >
        {/* Projet 1 */}
        <ProjectCard
          image="/chat.png"
          badge="Ancien projet"
          badgeColor="bg-orange-400"
          title="Message de discussion"
          description="Cette application permet aux utilisateurs de discuter en temps réel grâce à un système de messagerie instantanée. Elle est construite avec ReactJS côté frontend et Node.js avec Socket.io côté backend pour gérer les connexions en temps réel."
          tags={["ReactJS", "JavaScript", "Tailwind CSS", "Socket.io", "Node.js/Express", "MongoDB"]}
          links={[
            { label: "Code Frontend", href: "https://github.com/Rojokabut/frontend_chat" },
            { label: "Code Backend", href: "https://github.com/Rojokabut/backend_chat" }
          ]}
          delay={0.1}
        />
        {/* Projet 2 */}
        <ProjectCard
          image="/capt_portfolio.jpg"
          title="Portfolio"
          description="Ce portfolio présente mes projets, compétences et outils utilisés en développement web. Il est développé avec Next.js pour la performance, TypeScript pour la robustesse du code, et Tailwind CSS pour un design moderne et responsive."
          tags={["Next.js", "TypeScript", "Tailwind CSS"]}
          links={[
            { label: "Voir le code", href: "https://github.com/Rojokabut/portfolio" },
            { label: "Voir demo", href: "https://rojoniaina.vercel.app" }
          ]}
          delay={0.2}
        />
        {/* Projet 3 */}
        <ProjectCard
          image="/chatteo.png"
          badge="Projet recent"
          badgeColor="bg-green-400"
          title="Chatteo"
          description=
            "Chatteo est un site de conversation avec une IA, développé avec Next.js, Tailwind CSS et l'API Gemini. Il offre une interface simple et moderne pour discuter avec une intelligence artificielle en temps réel."
          tags={["Next.js", "TypeScript", "Tailwind CSS", "API Gemini"]}
          links={[
            { label: "Voir le code", href: "https://github.com/Rojokabut/chatteo" },
            { label: "Voir demo", href: "https://chatteo.vercel.app" }
          ]}
          delay={0.3}
        />


        {/* Projet 4 */}
        <ProjectCard
          image="/portfolio.PNG"
          title="Portfolio"
          description="Ce portfolio présente mes projets, compétences et outils utilisés en développement web. Il est développé avec Next.js pour la performance, TypeScript pour la robustesse du code, et Tailwind CSS pour un design moderne et responsive."
          tags={["Next.js", "TypeScript", "Tailwind CSS"]}
          links={[
            { label: "Voir le code", href: "#" },
            { label: "Voir demo", href: "#" }
          ]}
          delay={0.2}
        />
      </motion.div>
    </motion.section>
  );
}

function ProjectCard({ image, badge, title, description, tags, links, delay }: {
  image: string,
  badge?: string,
  badgeColor?: string,
  title: string,
  description: string,
  tags: string[],
  links: { label: string, href: string }[],
  delay: number
}) {
  // Fonction pour choisir l'icône selon le label
  const getIcon = (label: string) => {
    const lower = label.toLowerCase();
    if (lower.includes("github")) return <Github size={18} className="inline-block mr-2 -mt-0.5" />;
    if (lower.includes("code")) return <Code2 size={18} className="inline-block mr-2 -mt-0.5" />;
    if (lower.includes("demo") || lower.includes("voir") || lower.includes("eye")) return <ExternalLink size={18} className="inline-block mr-2 -mt-0.5" />;
    if (lower.includes("backend") || lower.includes("frontend")) return <Code2 size={18} className="inline-block mr-2 -mt-0.5" />;
    return <ExternalLink size={18} className="inline-block mr-2 -mt-0.5" />;
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl p-0 shadow-sm flex flex-col border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-[var(--primary)] transition-all duration-200"
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8, delay } } }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative w-full h-28 sm:h-40 rounded-t-xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        {badge && (
          <span className="absolute top-3 right-3 border border-blue-400 bg-slate-900/80 text-blue-300 text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-1 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full font-medium">{tag}</span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              className="flex-1 border border-[var(--primary)] bg-white text-[var(--primary)] text-sm font-semibold py-2 rounded-lg text-center transition hover:bg-[var(--primary)] hover:text-white hover:shadow flex items-center justify-center gap-2"
            >
              {getIcon(link.label)}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 
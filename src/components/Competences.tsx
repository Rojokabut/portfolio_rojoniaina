"use client";

import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  // 🧱 Fondations Web
  {
    name: "HTML",
    percent: 95,
    color: "#FF4C4C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Structure sémantique des pages web.",
    category: "Fondations Web",
  },
  {
    name: "CSS",
    percent: 90,
    color: "#3498FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Stylisation responsive et moderne.",
    category: "Fondations Web",
  },
  {
    name: "JavaScript",
    percent: 85,
    color: "#FFE156",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Logique et interactivité du web.",
    category: "Fondations Web",
  },
  {
    name: "TypeScript",
    percent: 80,
    color: "#007ACC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    desc: "Typage robuste pour JavaScript.",
    category: "Fondations Web",
  },

  // ⚛️ Frameworks & Bibliothèques Front-end
  {
    name: "React",
    percent: 80,
    color: "#4CD7FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Création d'interfaces interactives.",
    category: "Front-end",
  },
  {
    name: "Next.js",
    percent: 80,
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    desc: "Développement d'applications web performantes avec Next.js.",
    category: "Front-end",
  },
  {
    name: "Tailwind CSS",
    percent: 85,
    color: "#38BDF8",
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    desc: "Création d'interfaces modernes et responsives avec Tailwind CSS.",
    category: "Front-end",
  },
  {
    name: "Framer Motion",
    percent: 80,
    color: "#E65AF5",
    icon: "/framer.svg",
    desc: "Animations fluides et interactives avec Framer Motion.",
    category: "Front-end",
  },

  // ⚙️ Back-end & Full-Stack
  {
    name: "Node.js",
    percent: 80,
    color: "#4CFF4C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    desc: "Serveur JavaScript pour les applications full-stack.",
    category: "Back-end",
  },
  {
    name: "Express",
    percent: 80,
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    desc: "Framework léger pour Node.js.",
    category: "Back-end",
  },
  {
    name: "PHP",
    percent: 80,
    color: "#777BB4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    desc: "Langage serveur classique pour le web.",
    category: "Back-end",
  },
  {
    name: "Laravel",
    percent: 80,
    color: "#FF2D20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    desc: "Framework PHP moderne et structuré.",
    category: "Back-end",
  },
  {
    name: "Python",
    percent: 75,
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    desc: "Langage polyvalent pour le développement rapide.",
    category: "Back-end",
  },
  {
    name: "Django",
    percent: 70,
    color: "#092E20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    desc: "Framework Python pour les applications web sécurisées.",
    category: "Back-end",
  },

  // 🗃️ Bases de données
  {
    name: "MySQL",
    percent: 85,
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    desc: "Système de gestion de base de données relationnelle.",
    category: "Base de données",
  },
  {
    name: "MongoDB",
    percent: 85,
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    desc: "Base de données NoSQL orientée documents.",
    category: "Base de données",
  },

  // 🛠️ Outils & Environnement
  {
    name: "Git",
    percent: 70,
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    desc: "Gestion de version distribuée avec Git.",
    category: "Outils",
  },
  {
    name: "Docker",
    percent: 70,
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    desc: "Conteneurisation d'applications.",
    category: "Outils",
  },
  {
    name: "Linux",
    percent: 80,
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    desc: "Utilisation des systèmes Linux pour le dev web.",
    category: "Outils",
  },
  {
    name: "Figma",
    percent: 65,
    color: "#F24E1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    desc: "Conception d'interfaces UI/UX.",
    category: "Outils",
  },
];

// Fonction utilitaire pour convertir hex en rgb
function hexToRgb(hex: string): string {
  // Remove '#' if present
  hex = hex.replace('#', '');
  // Convert 3-digit hex to 6-digit
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

function SkillCircle({ name, percent, color, icon, delay }: { name: string, percent: number, color: string, icon: string, delay: number }) {
  const iconSize = 72;
  const radius = 24; // petit cercle
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Ajout pour l'animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, percent, {
        duration: 1.2,
        delay: delay || 0,
        ease: "easeOut",
        onUpdate: (latest: number) => {
          setDisplayPercent(Math.round(latest));
        },
      });
      return () => controls.stop();
    } else {
      setDisplayPercent(0);
    }
  }, [isInView, percent, delay]);

  const strokeDashoffset =
    circumference - (displayPercent / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-black/30 rounded-xl p-4 sm:p-6 shadow-md w-40 sm:w-48 max-w-xs group backdrop-blur-md border border-white/10"
      whileHover={{ y: -8, scale: 1.04, boxShadow: "0 4px 32px 0 #38bdf855" }}
      transition={{ type: 'spring', stiffness: 300 }}
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8, delay } } }}
    >
      <div className="flex flex-row items-center justify-center w-full mb-2 gap-4">
        <Image src={icon} alt={name} width={iconSize} height={iconSize} className="z-0 rounded-xl" />
        <div className="relative flex items-center justify-center" style={{ width: radius * 2, height: radius * 2 }}>
          <svg
            className="absolute top-1/2 left-1/2 z-10"
            style={{ transform: 'translate(-50%, -50%)' }}
            height={radius * 2}
            width={radius * 2}
          >
            <circle
              stroke="#222"
              fill="none"
              strokeWidth={stroke}
              cx={radius}
              cy={radius}
              r={normalizedRadius}
            />
            <circle
              fill={color.startsWith('#') ? `rgba(${hexToRgb(color)}, 0.35)` : color}
              stroke="none"
              cx={radius}
              cy={radius}
              r={normalizedRadius}
            />
            <circle
              stroke={color}
              fill="none"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              cx={radius}
              cy={radius}
              r={normalizedRadius}
              style={{ transition: "stroke-dashoffset 0.2s" }}
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 z-20 text-white font-bold text-xs" style={{ transform: 'translate(-50%, -50%)' }}>
            {displayPercent}%
          </span>
        </div>
      </div>
      <div className="text-white text-lg font-semibold mb-1">{name}</div>
    </motion.div>
  );
}

export default function Competences() {
  return (
    <motion.section
      id="skills"
      className="w-full max-w-8xl mx-auto my-16 p-8 bg-slate-900/80 rounded-2xl shadow-lg"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12, delayChildren: 0.2 }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-white text-center"
        variants={{ hidden: { opacity: 0, y: -30 }, show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8 } } }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-10 justify-items-center"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
      >
        {skills.map((skill, i) => (
          <SkillCircle key={skill.name} {...skill} delay={0.1 + i * 0.05} />
        ))}
      </motion.div>
    </motion.section>
  );
} 
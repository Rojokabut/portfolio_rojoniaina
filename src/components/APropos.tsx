"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Easing } from "framer-motion"
import { MdWavingHand } from "react-icons/md"
import { Sparkles, Code2, Database , Linkedin, Github, Mail} from "lucide-react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

// Animations personnalisées
const fadeInCustom = (direction = "up", delay = 0) => {
  let x = 0, y = 0
  if (direction === "left") x = -40
  if (direction === "right") x = 40
  if (direction === "up") y = 40
  if (direction === "down") y = -40
  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1, x: 0, y: 0,
      transition: { type: "spring" as const, duration: 0.8, delay },
    }
  }
}
const staggerContainerCustom = (delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren
    }
  }
})
const textRevealCustom = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.42, 0, 0.58, 1] as Easing }
  }
})

const services = [
  {
    icon: Code2,
    title: "Développement Frontend",
    description: "Création d'interfaces modernes et intuitives avec React, Next.js et les dernières technologies web.",
    features: ["React.js & Next.js", "TypeScript", "Tailwind CSS", "Animations fluides"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2,
  },
  {
    icon: Database,
    title: "Développement Backend",
    description: "Conception d'APIs robustes et scalables avec une architecture moderne et sécurisée.",
    features: ["Node.js & Express","Laravel", "Bases de données", "APIs RESTful", "Authentification"],
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.4,
  },
]

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative flex flex-col min-h-screen lg:flex-row items-center justify-center gap-6 lg:gap-12 bg-slate-900/80 rounded-3xl p-8 lg:p-16 shadow-2xl overflow-hidden border border-blue-500/10 mt-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.18, delayChildren: 0.2 }
        }
      }}
    >
      {/* Partie gauche : Photo + bulles stats */}
      <motion.div
        className="relative flex-shrink-0 flex flex-col items-center justify-center min-w-[140px] min-h-[180px] sm:min-w-[260px] sm:min-h-[320px]"
        variants={{ hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8 } } }}
      >
        {/* Cercle graphique */}
        <motion.div
          className="absolute -z-10 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-400 opacity-30 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
        {/* Photo de profil */}
        <motion.div
          className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-70 md:h-70 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl"
          whileHover={{ scale: 1.04, boxShadow: "0 0 32px 8px #60a5fa55" }}
        >
          <Image src="/photo.jpg" alt="Photo de profil" fill  />
        </motion.div>
        {/* Bulles statistiques */}
        {/* <motion.div className="absolute -top-4 -left-8" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}>
          <StatBubble value="16+" label="Years of Experience" color="bg-emerald-500" />
        </motion.div>
        <motion.div className="absolute -bottom-4 -left-12" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}>
          <StatBubble value="215+" label="Project Completed" color="bg-blue-500" />
        </motion.div>
        <motion.div className="absolute bottom-0 -right-8" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}>
          <StatBubble value="97+" label="Happy Clients" color="bg-cyan-500" />
        </motion.div> */}
      </motion.div>

      {/* Partie droite : Texte + boutons */}
      <motion.div 
        className="flex-1 max-w-xl space-y-6"
        variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8, delay: 0.2 } } }}
      >
        <motion.h2 className="text-lg uppercase tracking-widest text-cyan-400 font-semibold mb-2" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}>Let me introduce myself</motion.h2>
        <motion.h1 className="text-4xl font-bold text-white mb-4" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}>About me</motion.h1>
        <motion.p className="text-slate-300 text-lg leading-relaxed" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.5 } } }}>
          A journey shaped by curiosity and continuous learning.<br />
          I'm <span className="font-bold text-cyan-400">Rojo Niaina</span>, a passionate Full-Stack Developer focused on delivering innovative and high-quality web and mobile applications. I love building seamless user experiences using modern technologies like React, Node.js, and Tailwind CSS. Whether it's crafting a beautiful interface or designing a solid backend, I always aim for performance, clarity, and innovation.
        </motion.p>
        <motion.div className="mt-4" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.6 } } }}>
          <span className="block text-slate-400 mb-1 font-semibold">Contact</span>
          <span className="text-slate-200">Interested in working together or starting a new project? Feel free to reach out — I'm always open to exciting opportunities.<br />
            <a href="mailto:rojo.niaina@gmail.com" className="text-cyan-400 underline">rojonianaravelomanana@gmail.com</a>
          </span>
        </motion.div>
        <motion.div className="flex flex-wrap gap-4 mt-6" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.7 } } }}>
          <a href="https://www.linkedin.com/in/rojo-niaina" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/RojoKabut" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition">
            <Github size={20} /> GitHub
          </a>
          <a href="mailto:rojoniainaravelomanana@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
            <Mail size={20} /> Email
          </a>
          <a href="https://wa.me/+261340563335" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition">
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </motion.div>

        {/* <motion.div className="flex gap-4 mt-6" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.7 } } }}>
          <a href="mailto:rojo.niaina@gmail.com" className="px-6 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition">HIRE ME</a>
          <a href="#" className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition">DOWNLOAD CV</a>
        </motion.div> */}
      </motion.div>

    </motion.section>
  )
}

// Composant bulle statistique
function StatBubble({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${color} text-white rounded-2xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 mb-2 border-4 border-slate-900/80`}
      style={{ minWidth: 70, maxWidth: 120 }}>
      <span className="text-lg sm:text-2xl font-bold drop-shadow-lg">{value}</span>
      <span className="text-xs font-medium opacity-80 whitespace-nowrap">{label}</span>
    </div>
  )
}

// Composant ServiceCard amélioré
interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ size: number; className: string }>
    title: string
    description: string
    features: string[]
    gradient: string
    delay: number
  }
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      variants={fadeInCustom("up", service.delay)}
      whileHover={{ y: -8, scale: 1.04, boxShadow: "0 4px 32px 0 #38bdf855" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden shadow-lg"
    >
      {/* Effet de brillance au hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <div className="relative z-10 flex flex-col md:flex-row justify-center md:items-start items-center gap-2 space-x-6">
        {/* Icône */}
        <div
          className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={28} className="text-white" />
        </div>
        {/* Contenu */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className=" text-slate-300 leading-relaxed">{service.description}</p>
          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-200 border-slate-600/50 group-hover:border-blue-300 group-hover:border-blue-500/50 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

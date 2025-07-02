"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Linkedin, Github, Mail} from "lucide-react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

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
          I&apos;m <span className="font-bold text-cyan-400">Rojo Niaina</span>, a passionate Full-Stack Developer focused on delivering innovative and high-quality web and mobile applications. I love building seamless user experiences using modern technologies like React, Node.js, and Tailwind CSS. Whether it&apos;s crafting a beautiful interface or designing a solid backend, I always aim for performance, clarity, and innovation.
        </motion.p>
        <motion.div className="mt-4" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.6 } } }}>
          <span className="block text-slate-400 mb-1 font-semibold">Contact</span>
          <span className="text-slate-200">Interested in working together or starting a new project? Feel free to reach out — I&apos;m always open to exciting opportunities.<br />
            <a href="mailto:rojo.niaina@gmail.com" className="text-cyan-400 underline">rojonianaravelomanana@gmail.com</a>
          </span>
        </motion.div>
        <motion.div className="flex flex-wrap gap-4 mt-6" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.7 } } }}>
          <a href="https://www.linkedin.com/in/rojoniaina-ravelomanana-6351782a2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
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




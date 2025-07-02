"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main id="home" className="flex flex-col items-center justify-center min-h-[80vh] w-full bg-transparent pt-24">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8 md:gap-24 mt-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.18, delayChildren: 0.2 }
          }
        }}
      >
        {/* Photo de profil avec halo animé */}
        <motion.div
          className="relative flex-shrink-0 group"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } }
          }}
          whileHover={{ scale: 1.04, }}
        >
          <motion.div
            className="absolute -inset-4 rounded-full bg-blue-600 opacity-40 blur-2xl animate-pulse z-0"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <Image
            src="/photo_profil.png"
            alt="Photo de profil"
            width={128}
            height={128}
            className="rounded-full relative z-10 border-4 border-blue-700 shadow-xl group-hover:shadow-blue-400/40 transition duration-300 w-40 h-40 md:w-64 md:h-64"
            priority
          />
        </motion.div>
        {/* Texte de présentation */}
        <motion.div
          className="flex flex-col items-start justify-center text-left max-w-xs md:max-w-xl space-y-4"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8, delay: 0.2 } }
          }}
        >
          <motion.span className="text-lg text-blue-400" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}>Hello, I'm</motion.span>
          <motion.h1 className="text-3xl md:text-4xl font-bold text-white" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}>Rojo Niaina</motion.h1>
          <motion.h2 className="text-xl md:text-2xl font-semibold text-blue-300" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.5 } } }}>And I'm a <span className="text-blue-400">FullStack Developer</span></motion.h2>
          <motion.p className="text-gray-300 max-w-md" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.6 } } }}>
            Passionate Full-Stack Developer driven by technological innovation and a commitment to excellence in web and mobile development.
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block mt-4 px-7 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.7 } } }}
          >
            Me contacter
          </motion.a>
        </motion.div>
      </motion.div>
    </main>
  );
}




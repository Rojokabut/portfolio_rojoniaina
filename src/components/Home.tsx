"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Download } from "lucide-react";
import Modal from "./Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = React.useState(false);

  // Fonction pour lancer le téléchargement du CV
  const handleDownloadCV = () => {
    setModalOpen(false);
    // Crée un lien temporaire pour télécharger le fichier
    const link = document.createElement("a");
    link.href = "/CV_RAVELOMANANA_Rojoniaina.pdf";
    link.download = "CV_RAVELOMANANA_Rojoniaina.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
       
        <motion.div
          className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-70 md:h-70 rounded-full overflow-hidden"
          whileHover={{ scale: 1.04, boxShadow: "0 0 32px 8px #60a5fa55" }}
        >
          <Image src="/photo.jpg" alt="Photo de profil" fill  />
        </motion.div>
        {/* Texte de présentation */}
        <motion.div
          className="flex flex-col items-start justify-center text-left max-w-xs md:max-w-xl space-y-4"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8, delay: 0.2 } }
          }}
        >
          <motion.span className="text-lg text-gray-600 dark:text-white" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}>Hello, I&apos;m</motion.span>
          <motion.h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-200" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}>
            {"Rojo Niaina".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  delay: 0.45 + i * 0.07,
                  duration: 1.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2 className="text-xl md:text-2xl font-semibold text-blue-500" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.5 } } }}>And I&apos;m a <span className="text-blue-400">FullStack Developer</span></motion.h2>
          <motion.p className="text-gray-800 dark:text-gray-300 max-w-md " variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.6 } } }}>
            Passionate Full-Stack Developer driven by technological innovation and a commitment to excellence in web and mobile development.
          </motion.p>

          <motion.a
            href="#"
            className="flex items-center gap-2 mt-4 px-7 py-3 rounded-lg bg-[var(--primary)] text-white font-semibold shadow-lg hover:brightness-95 transition-all text-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.7 } } }}
            onClick={(e) => { e.preventDefault(); setModalOpen(true); }}
          >
            <span>
              Download CV
            </span>
            <Download width={16} height={16}/>
          </motion.a>
        </motion.div>
      </motion.div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDownloadCV}
        title="Télécharger le CV ?"
        description="Voulez-vous télécharger le CV de Rojo Niaina ?"
      />
    </main>
  );
}




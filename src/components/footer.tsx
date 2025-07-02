"use client"

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#181A1B] text-gray-300 py-6 md:py-10 px-2 md:px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 md:gap-8">
        {/* Navigation principale */}
        <nav className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-16 text-lg font-normal w-full justify-between items-center md:items-start">
            {['Projects', 'Services', 'About', 'Contact', 'Formation'].map((item) => {
              // Map display name to section id
              const idMap: Record<string, string> = {
                Projects: 'projects',
                Services: 'services',
                About: 'about',
                Contact: 'contact',
                Formation: 'formation',
              };
              const handleScroll = () => {
                const el = document.getElementById(idMap[item]);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              };
              return (
                <motion.li
                  key={item}
                  whileHover={{ y: -4, color: '#38bdf8' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="cursor-pointer transition-colors duration-200"
                  onClick={handleScroll}
                >
                  {item}
                </motion.li>
              );
            })}
          </ul>
        </nav>
        {/* Icônes */}
        <div className="flex gap-4 md:gap-8 mb-6">
          {[1,2,3,4].map((i) => (
            <motion.div
              key={i}
              className="bg-[#232526] p-3 rounded-lg"
              whileHover={{ scale: 1.15, boxShadow: "0 0 16px #38bdf855" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="sr-only">Icon {i}</span>
            </motion.div>
          ))}
        </div>
        {/* Liens légaux */}
        <div className="flex gap-4 md:gap-8 mb-6">
        {[ 
          { icon: <Github size={20} />, link: "https://github.com/RojoKabut", label: "GitHub" },
          { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/rojo-niaina", label: "LinkedIn" },
          { icon: <Mail size={20} />, link: "mailto:rojoniainaravelomanana@gmail.com", label: "Email" },
          { icon: <Smartphone size={20} />, link: "https://wa.me/+261340563335", label: "WhatsApp" },
        ].map(({ icon, link, label }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#232526] p-3 rounded-lg text-white"
            whileHover={{ scale: 1.15, boxShadow: "0 0 16px #38bdf855" }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}
      </div>

        {/* Copyright */}
        <motion.div className="text-xs text-gray-500" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>© 2024 Studio. All Rights Reserved.</motion.div>
      </div>
    </motion.footer>
  );
}
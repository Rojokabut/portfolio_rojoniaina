"use client"
import Link from "next/link"
import { Menu} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
// import { FaGithub } from "react-icons/fa"
import { useTheme } from "next-themes"
import { Sun, Moon, Laptop } from "lucide-react"
import React from "react";

function handleSmoothScroll(href: string, onClick?: () => void) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            if (onClick) onClick();
        } else if (onClick) {
            onClick();
        }
    };
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <Link
            className="relative px-2 py-1 rounded focus:outline-none focus:text-[var(--primary)] focus:bg-[var(--primary)]/10 transition text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] group"
            href={href}
            onClick={handleSmoothScroll(href, onClick)}
        >
            <span className="z-10 relative">{children}</span>
            <span className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-0.5 bg-[var(--primary)] transition-all duration-300 rounded-full" style={{transitionProperty:'width'}} />
        </Link>
    );
}

function ThemeToggleButton() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Choix de l'icône principale selon le thème actif
  let MainIcon = Sun;
  if (currentTheme === "dark") MainIcon = Moon;
  if (theme === "system") MainIcon = Laptop;

  // Fermer le menu si clic en dehors
  React.useEffect(() => {
    if (!open) return;
    function handleClick() {
      setOpen(false);
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <div className="relative ml-2">
      <button
        className="p-2 rounded-full border border-[var(--primary)] bg-white dark:bg-gray-900 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
        onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
        aria-label="Changer le mode d'affichage"
        type="button"
      >
        <MainIcon className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 flex flex-col py-2">
          <button
            className={`flex items-center px-4 py-2 text-sm gap-2 hover:bg-[var(--primary)]/10 transition ${theme === "light" ? "font-bold text-[var(--primary)]" : "text-gray-700 dark:text-gray-200"}`}
            onClick={() => { setTheme("light"); setOpen(false); }}
            type="button"
          >
            <Sun className="w-4 h-4" /> Mode clair
          </button>
          <button
            className={`flex items-center px-4 py-2 text-sm gap-2 hover:bg-[var(--primary)]/10 transition ${theme === "dark" ? "font-bold text-[var(--primary)]" : "text-gray-700 dark:text-gray-200"}`}
            onClick={() => { setTheme("dark"); setOpen(false); }}
            type="button"
          >
            <Moon className="w-4 h-4" /> Mode sombre
          </button>
          <button
            className={`flex items-center px-4 py-2 text-sm gap-2 hover:bg-[var(--primary)]/10 transition ${theme === "system" ? "font-bold text-[var(--primary)]" : "text-gray-700 dark:text-gray-200"}`}
            onClick={() => { setTheme("system"); setOpen(false); }}
            type="button"
          >
            <Laptop className="w-4 h-4" /> Mode système
          </button>
        </div>
      )}
    </div>
  );
}

export default function NavBar(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return(
        <>
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 12 }}
                className="w-full flex justify-between items-center py-4 px-2 md:px-10  backdrop-blur-md fixed top-0 left-0 z-50"
            >
                <button
                    className="lg:hidden block bg-gray-100 dark:bg-gray-800 p-2 rounded-xl cursor-pointer dark:hover:bg-gray-950"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Ouvrir le menu"
                >
                    <Menu className="dark:text-white text-gray-600 w-6 h-6"/>
                </button>
                <h1 className="text-2xl font-bold select-none text-[var(--primary)] ">Rojo <label htmlFor="" className="text-[#DCBF03]">Niaina</label> </h1>
                <div className="hidden lg:flex items-center space-x-3 text-white xl:text-base font-medium text-xs">
                    <NavLink href="#home">Accueil</NavLink>
                    <NavLink href="#about">À propos</NavLink>
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#skills">Compétences</NavLink>
                    <NavLink href="#formation">Formation</NavLink>
                    <NavLink href="#projects">Projets</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </div>
                <div className="flex items-center">
                   {/* <Link href='https://github.com/Rojokabut' className="bg-gray-900 hover:bg-gray-950 px-4 py-2  flex md:space-x-1 rounded-xl items-center">
                        <FaGithub className="text-white w-6 h-6"/>
                        <span className="text-gray-200 hidden md:block">Github</span>
                   </Link> */}
                    
                    {/* <button className="hidden md:flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-blue-600 transition font-semibold shadow-lg">
                        <span>Download CV</span>
                        <Download width={16} height={16}/>
                    </button> */}
                    <ThemeToggleButton />
                </div>
            </motion.nav>
            {/* Sidebar mobile */}
            {sidebarOpen && (
                <motion.aside
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg z-[100] flex flex-col p-6 space-y-6 lg:hidden"
                >
                    <button
                        className="self-end mb-4 text-white hover:text-blue-400"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Fermer le menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex flex-col space-y-4 text-white text-lg font-medium">
                        <NavLink href="#home" onClick={() => setSidebarOpen(false)}>Accueil</NavLink>
                        {/* <NavLink href="#statistique" onClick={() => setSidebarOpen(false)}>Statistique</NavLink> */}
                        <NavLink href="#about" onClick={() => setSidebarOpen(false)}>À propos</NavLink>
                        <NavLink href="#services" onClick={() => setSidebarOpen(false)}>Services</NavLink>
                        <NavLink href="#skills" onClick={() => setSidebarOpen(false)}>Compétences</NavLink>
                        <NavLink href="#formation" onClick={() => setSidebarOpen(false)}>Formation</NavLink>
                        <NavLink href="#projects" onClick={() => setSidebarOpen(false)}>Projets</NavLink>
                        <NavLink href="#contact" onClick={() => setSidebarOpen(false)}>Contact</NavLink>
                    </nav>
                </motion.aside>
            )}
            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[99] lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    )
}
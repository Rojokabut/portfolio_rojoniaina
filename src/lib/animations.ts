// "use client"

// import type { Variants, Transition } from "framer-motion"

// // ===== EASINGS PERSONNALISÉS =====
// export const customEasing = {
//   smooth: [0.42, 0, 0.58, 1] as const,
//   bounce: [0.68, -0.55, 0.265, 1.55] as const,
//   elastic: [0.175, 0.885, 0.32, 1.275] as const,
//   sharp: [0.4, 0, 0.2, 1] as const,
// }

// // ===== DURÉES STANDARD =====
// export const duration = {
//   fast: 0.3,
//   normal: 0.6,
//   slow: 0.8,
//   verySlow: 1.2,
// }

// // ===== ANIMATIONS DE BASE =====

// // Fade In avec directions
// export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay = 0): Variants => {
//   let x = 0,
//     y = 0

//   switch (direction) {
//     case "left":
//       x = -40
//       break
//     case "right":
//       x = 40
//       break
//     case "up":
//       y = 40
//       break
//     case "down":
//       y = -40
//       break
//   }

//   return {
//     hidden: {
//       opacity: 0,
//       x,
//       y,
//       scale: 0.95,
//     },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         duration: duration.normal,
//         delay,
//         ease: customEasing.smooth,
//       },
//     },
//   }
// }

// // Slide In avec directions
// export const slideIn = (direction: "up" | "down" | "left" | "right" = "left", delay = 0): Variants => {
//   let x = 0,
//     y = 0

//   switch (direction) {
//     case "left":
//       x = -100
//       break
//     case "right":
//       x = 100
//       break
//     case "up":
//       y = 100
//       break
//     case "down":
//       y = -100
//       break
//   }

//   return {
//     hidden: {
//       opacity: 0,
//       x,
//       y,
//     },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay,
//       },
//     },
//   }
// }

// // Scale In
// export const scaleIn = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     scale: 0.8,
//     rotate: -5,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 20,
//       delay,
//     },
//   },
// })

// // Rotate In
// export const rotateIn = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     rotate: -180,
//     scale: 0.5,
//   },
//   show: {
//     opacity: 1,
//     rotate: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 150,
//       damping: 15,
//       delay,
//     },
//   },
// })

// // ===== ANIMATIONS DE CONTENEURS =====

// // Stagger Container
// export const staggerContainer = (delayChildren = 0, staggerChildren = 0.1): Variants => ({
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren,
//       delayChildren,
//     },
//   },
// })

// // Stagger rapide
// export const staggerFast = (delayChildren = 0): Variants => staggerContainer(delayChildren, 0.05)

// // Stagger lent
// export const staggerSlow = (delayChildren = 0): Variants => staggerContainer(delayChildren, 0.2)

// // ===== ANIMATIONS DE TEXTE =====

// // Révélation de texte
// export const textReveal = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     y: 20,
//     skewY: 5,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     skewY: 0,
//     transition: {
//       duration: duration.normal,
//       delay,
//       ease: customEasing.smooth,
//     },
//   },
// })

// // Animation de titre
// export const titleAnimation = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.9,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//       delay,
//     },
//   },
// })

// // Animation de paragraphe
// export const paragraphAnimation = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: duration.slow,
//       delay,
//       ease: customEasing.smooth,
//     },
//   },
// })

// // ===== ANIMATIONS DE CARTES =====

// // Card Hover
// export const cardHover: Variants = {
//   rest: {
//     scale: 1,
//     y: 0,
//     rotateX: 0,
//     rotateY: 0,
//   },
//   hover: {
//     scale: 1.05,
//     y: -10,
//     rotateX: 5,
//     rotateY: 5,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 20,
//     },
//   },
// }

// // Card Tap
// export const cardTap: Variants = {
//   tap: {
//     scale: 0.95,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 25,
//     },
//   },
// }

// // Card Float (animation continue)
// export const cardFloat: Variants = {
//   animate: {
//     y: [-5, 5, -5],
//     transition: {
//       duration: 3,
//       repeat: Number.POSITIVE_INFINITY,
//       ease: "easeInOut",
//     },
//   },
// }

// // ===== ANIMATIONS DE BOUTONS =====

// // Button Hover
// export const buttonHover: Variants = {
//   rest: {
//     scale: 1,
//     boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
//   },
//   hover: {
//     scale: 1.05,
//     boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 25,
//     },
//   },
//   tap: {
//     scale: 0.95,
//   },
// }

// // Button Pulse
// export const buttonPulse: Variants = {
//   animate: {
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 2,
//       repeat: Number.POSITIVE_INFINITY,
//       ease: "easeInOut",
//     },
//   },
// }

// // ===== ANIMATIONS D'ICÔNES =====

// // Icon Bounce
// export const iconBounce: Variants = {
//   animate: {
//     y: [0, -10, 0],
//     transition: {
//       duration: 1.5,
//       repeat: Number.POSITIVE_INFINITY,
//       ease: "easeInOut",
//     },
//   },
// }

// // Icon Rotate
// export const iconRotate: Variants = {
//   animate: {
//     rotate: [0, 360],
//     transition: {
//       duration: 2,
//       repeat: Number.POSITIVE_INFINITY,
//       ease: "linear",
//     },
//   },
// }

// // Icon Wiggle
// export const iconWiggle: Variants = {
//   animate: {
//     rotate: [0, 10, -10, 10, 0],
//     transition: {
//       duration: 0.5,
//       repeat: Number.POSITIVE_INFINITY,
//       repeatDelay: 3,
//       ease: "easeInOut",
//     },
//   },
// }

// // ===== ANIMATIONS DE NAVIGATION =====

// // Nav Item
// export const navItem: Variants = {
//   hidden: {
//     opacity: 0,
//     y: -20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 20,
//     },
//   },
//   hover: {
//     y: -2,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 25,
//     },
//   },
// }

// // Mobile Menu
// export const mobileMenu: Variants = {
//   closed: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.3,
//       ease: customEasing.sharp,
//     },
//   },
//   open: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       duration: 0.3,
//       ease: customEasing.sharp,
//     },
//   },
// }

// // ===== ANIMATIONS DE PROGRESSION =====

// // Progress Bar
// export const progressBar = (width: number, delay = 0): Variants => ({
//   hidden: {
//     width: 0,
//     opacity: 0,
//   },
//   show: {
//     width: `${width}%`,
//     opacity: 1,
//     transition: {
//       duration: duration.slow,
//       delay,
//       ease: customEasing.smooth,
//     },
//   },
// })

// // Counter Animation
// export const counterAnimation = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 15,
//       delay,
//     },
//   },
// })

// // ===== ANIMATIONS DE MODAL =====

// // Modal Backdrop
// export const modalBackdrop: Variants = {
//   hidden: {
//     opacity: 0,
//   },
//   show: {
//     opacity: 1,
//     transition: {
//       duration: duration.fast,
//     },
//   },
// }

// // Modal Content
// export const modalContent: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.8,
//     y: 50,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 25,
//     },
//   },
// }

// // ===== ANIMATIONS DE FORMULAIRE =====

// // Form Field
// export const formField = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     x: -20,
//   },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: duration.normal,
//       delay,
//       ease: customEasing.smooth,
//     },
//   },
//   focus: {
//     scale: 1.02,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 25,
//     },
//   },
// })

// // Form Submit
// export const formSubmit: Variants = {
//   idle: {
//     scale: 1,
//   },
//   loading: {
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 1,
//       repeat: Number.POSITIVE_INFINITY,
//       ease: "easeInOut",
//     },
//   },
//   success: {
//     scale: [1, 1.2, 1],
//     backgroundColor: ["#3B82F6", "#10B981", "#3B82F6"],
//     transition: {
//       duration: 0.6,
//       ease: customEasing.bounce,
//     },
//   },
// }

// // ===== ANIMATIONS DE PAGE =====

// // Page Transition
// export const pageTransition: Variants = {
//   initial: {
//     opacity: 0,
//     y: 20,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: duration.normal,
//       ease: customEasing.smooth,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: {
//       duration: duration.fast,
//       ease: customEasing.sharp,
//     },
//   },
// }

// // Section Reveal
// export const sectionReveal = (delay = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     y: 100,
//     scale: 0.95,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//       delay,
//     },
//   },
// })

// // ===== ANIMATIONS SPÉCIALES =====

// // Glitch Effect
// export const glitchEffect: Variants = {
//   animate: {
//     x: [0, -2, 2, 0],
//     // skew: [0, 2, -2, 0],
//     transition: {
//       duration: 0.2,
//       repeat: 3,
//       repeatDelay: 2,
//     },
//   },
// }

// // Typewriter Effect
// export const typewriter = (text: string, delay = 0): Variants => ({
//   hidden: {
//     width: 0,
//   },
//   show: {
//     width: "100%",
//     transition: {
//       duration: text.length * 0.1,
//       delay,
//       ease: "linear",
//     },
//   },
// })

// // Parallax Effect
// export const parallax = (offset: number): Variants => ({
//   animate: {
//     y: offset,
//     transition: {
//       duration: 0,
//     },
//   },
// })

// // ===== TRANSITIONS PERSONNALISÉES =====

// // Spring Transition
// export const springTransition: Transition = {
//   type: "spring",
//   stiffness: 100,
//   damping: 15,
// }

// // Smooth Transition
// export const smoothTransition: Transition = {
//   duration: duration.normal,
//   ease: customEasing.smooth,
// }

// // Bounce Transition
// export const bounceTransition: Transition = {
//   type: "spring",
//   stiffness: 300,
//   damping: 20,
// }

// // ===== UTILITAIRES =====

// // Créer une animation personnalisée
// export const createCustomAnimation = (
//   from: Record<string, any>,
//   to: Record<string, any>,
//   transition?: Transition,
// ): Variants => ({
//   hidden: from,
//   show: {
//     ...to,
//     transition: transition || smoothTransition,
//   },
// })

// // Combiner plusieurs animations
// export const combineAnimations = (...animations: Variants[]): Variants => {
//   return animations.reduce(
//     (combined, animation) => ({
//       ...combined,
//       ...animation,
//     }),
//     {},
//   )
// }

// // Animation avec délai aléatoire
// export const randomDelay = (min = 0, max = 0.5): number => {
//   return Math.random() * (max - min) + min
// }

// // ===== PRESETS D'ANIMATIONS =====

// // Preset pour les cartes de service
// export const serviceCardPreset = (delay = 0): Variants => combineAnimations(fadeIn("up", delay), cardHover)

// // Preset pour les éléments de navigation
// export const navPreset = (delay = 0): Variants => combineAnimations(slideIn("down", delay), navItem)

// // Preset pour les sections principales
// export const sectionPreset = (delay = 0): Variants =>
//   combineAnimations(sectionReveal(delay), staggerContainer(0.1, 0.15))

// export default {
//   // Animations de base
//   fadeIn,
//   slideIn,
//   scaleIn,
//   rotateIn,

//   // Conteneurs
//   staggerContainer,
//   staggerFast,
//   staggerSlow,

//   // Texte
//   textReveal,
//   titleAnimation,
//   paragraphAnimation,

//   // Cartes
//   cardHover,
//   cardTap,
//   cardFloat,

//   // Boutons
//   buttonHover,
//   buttonPulse,

//   // Icônes
//   iconBounce,
//   iconRotate,
//   iconWiggle,

//   // Navigation
//   navItem,
//   mobileMenu,

//   // Progression
//   progressBar,
//   counterAnimation,

//   // Modal
//   modalBackdrop,
//   modalContent,

//   // Formulaire
//   formField,
//   formSubmit,

//   // Page
//   pageTransition,
//   sectionReveal,

//   // Spéciales
//   glitchEffect,
//   typewriter,
//   parallax,

//   // Transitions
//   springTransition,
//   smoothTransition,
//   bounceTransition,

//   // Utilitaires
//   createCustomAnimation,
//   combineAnimations,
//   randomDelay,

//   // Presets
//   serviceCardPreset,
//   navPreset,
//   sectionPreset,
// }

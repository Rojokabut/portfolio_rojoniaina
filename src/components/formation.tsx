"use client"
import { useRef, useState, useEffect } from "react"
import { Calendar, University, GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"


interface Formation {
  id: string
  date: string
  diplome: string
  ecole: string
  type: "diplome" | "certification" | "formation"
  status: "completed" | "in-progress" | "planned"
  color : string
  bgColor: string
}

const formations: Formation[] = [
   {
    id: "master",
    date: "2025 - 2026",
    diplome: "MASTER en Informatique (Programmation)",
    ecole: "IFT Ambondrona",
    type: "diplome",
    status: "in-progress",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    id: "licence",
    date: "2024 - 2025",
    diplome: "LICENCE en Informatique (Programmation)",
    ecole: "IFT Ambondrona",
    type: "diplome",
    status: "completed",
    color: "text-green-400", 
    bgColor: "bg-green-500/10" 
  },
  {
    id: "mobile-app",
    date: "2025",
    diplome: "Attestation Création d'application mobile",
    ecole: "Orange Digital Center",
    type: "certification",
    status: "completed",
    color: "text-green-400", 
    bgColor: "bg-green-500/10" 
  },
  {
    id: "anglais",
    date: "2021",
    diplome: "Certificat Anglais parlé",
    ecole: "FLTC Tsaralalana",
    type: "certification",
    status: "completed",
    color: "text-green-400", 
    bgColor: "bg-green-500/10" 
  },
  {
    id: "bac",
    date: "2019 - 2020",
    diplome: "Baccalauréat série C",
    ecole: "Aceem Ivato",
    type: "diplome",
    status: "completed",
    color: "text-green-400", 
    bgColor: "bg-green-500/10" 
  },
]

const typeConfig = {
  diplome: { icon: GraduationCap, color: "text-blue-400", bgColor: "bg-blue-500/10" },
  certification: { icon: Award, color: "text-green-400", bgColor: "bg-green-500/10" },
  formation: { icon: University, color: "text-purple-400", bgColor: "bg-purple-500/10" },
}

const statusConfig = {
  completed: { label: "Terminé", color: "bg-green-500", textColor: "text-green-100" },
  "in-progress": { label: "En cours", color: "bg-blue-500", textColor: "text-blue-100" },
  planned: { label: "Prévu", color: "bg-orange-500", textColor: "text-orange-100" },
}

export default function Formation() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <div ref={ref} id="formation" className="overflow-hidden px-5 lg:px-20">
      {/* Titre mobile */}
      <div className="text-center mb-6">
        <motion.h1
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Formation
        </motion.h1>
      </div>

      {/* Timeline desktop / Grille mobile */}
      <div className="relative">
        {/* Ligne de timeline (desktop uniquement) */}
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

        <div className={`${isVisible ? "block" : "hidden"} space-y-6 lg:space-y-8`}>
          {formations.map((formation, index) => (
            <FormationCard key={formation.id} formation={formation} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Composant pour chaque carte de formation
interface FormationCardProps {
  formation: Formation
  index: number
}

function FormationCard({ formation, index }: FormationCardProps) {
  const typeInfo = typeConfig[formation.type]
  const statusInfo = statusConfig[formation.status]
  const TypeIcon = typeInfo.icon

  return (
    <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="relative lg:ml-20"
    >
      {/* Point de timeline (desktop) */}
      <div className="hidden lg:block absolute -left-[70px] top-6 w-4 h-4 bg-white rounded-full border-4 border-blue-500 shadow-lg" />

      {/* Carte */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-950 hover:border-blue-800 transition-all duration-300 group">
        {/* En-tête avec statut */}
        <div className="flex justify-between items-start mb-4">
          <div className={`flex items-center space-x-3 p-3 rounded-xl ${formation.bgColor}`}>
            <TypeIcon size={24} className={formation.color} />
            <span className="text-white font-semibold">
              {formation.type.charAt(0).toUpperCase() + formation.type.slice(1)}
            </span>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color} ${statusInfo.textColor}`}>
            {statusInfo.label}
          </span>
        </div>

        {/* Contenu */}
        <div className="space-y-3">
          {/* Date */}
          <div className="flex items-center space-x-3">
            <Calendar size={18} className="text-blue-400 flex-shrink-0" />
            <span className="text-gray-300 font-medium">{formation.date}</span>
          </div>

          {/* Diplôme */}
          <div className="flex items-start space-x-3">
            <GraduationCap size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <span className="text-white font-semibold leading-relaxed">{formation.diplome}</span>
          </div>

          {/* École */}
          <div className="flex items-center space-x-3">
            <University size={18} className="text-blue-400 flex-shrink-0" />
            <span className="text-gray-300">{formation.ecole}</span>
          </div>
        </div>

        {/* Effet hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}

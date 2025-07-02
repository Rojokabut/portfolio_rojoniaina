"use client"

import NavBar from "../components/NavBar"
import Home from "../components/Home"
import Competences from "../components/Competences"
import APropos from "../components/APropos"
import Experience from "../components/Experience"
import Projets from "../components/Projets"
import Contact from "../components/Contact"
import Statistique from "../components/Statistique"
import Services from "../components/Services"
import Footer from "../components/footer"
import Formation from "@/components/formation"

export default function HomePage(){
  return(
    <div className="min-h-screen w-full bg-transparent">
      <div className="relative h-screen">
        <NavBar />
        <Home />
        <Statistique />
      </div>
      <APropos />
      <Services/>
      <Competences />
      <Formation />
      {/* <Experience /> */}
      <Projets />
      <Contact />
      <Footer/>
    </div>
  )
}
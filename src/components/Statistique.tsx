"use client"

export default function Statistique(){
    return(
        <div className=" md:absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-8 py-6  w-full max-w-full animate-fade-in-up z-20">
            <Stat value="1+" label="Années d'expérience" />
            {/* <Stat value="30+" label="Projets livrés avec succès" /> */}
            <Stat value="8+" label="Technologies maîtrisées" />
            {/* <Stat value="100+" label="Clients satisfaits" /> */}
      </div>
    )
}
function Stat({ value, label }: { value: string; label: string }) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-[var(--primary)]">{value}</span>
        <span className="text-gray-900 dark:text-gray-100 text-sm text-center ">{label}</span>
      </div>
    );
  }
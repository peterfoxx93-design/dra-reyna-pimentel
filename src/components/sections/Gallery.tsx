"use client";

import { ArrowUpRight, Star } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const cases = [
  {
    title: "Diseño de Sonrisa",
    desc: "Transformación estética con carillas, blanqueamiento y rehabilitación profesional.",
    gradient: "from-brand-400 to-brand-600",
    icon: "✨",
  },
  {
    title: "Ortodoncia",
    desc: "Brackets tradicionales y estéticos. Corregimos la alineación para una sonrisa perfecta.",
    gradient: "from-accent to-brand-400",
    icon: "😬",
  },
  {
    title: "Rehabilitación Estética",
    desc: "Coronas, puentes e implantes. Función y belleza restauradas con materiales de última generación.",
    gradient: "from-brand-600 to-dark",
    icon: "🦷",
  },
  {
    title: "Atención Integral",
    desc: "Odontología general, preventiva y pediatrica. Cuidamos toda tu salud bucal.",
    gradient: "from-brand-300 to-brand-500",
    icon: "👩‍⚕️",
  },
];

export default function Gallery() {
  return (
    <AnimatedSection id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Sonrisas que hablan por sí solas
          </h2>
          <p className="text-dark/60">
            Cada paciente es único. Cada sonrisa, una historia de confianza y
            transformación.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cases.map((item, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-br ${item.gradient}`}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

              {/* Content */}
              <div className="relative p-8 sm:p-10 min-h-[240px] flex flex-col justify-end">
                {/* Icon */}
                <span className="text-4xl mb-4">{item.icon}</span>

                {/* Tag */}
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3 w-fit">
                  Caso de éxito
                </span>

                {/* Title + Desc */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 max-w-sm">{item.desc}</p>

                {/* Instagram link */}
                <a
                  href="https://www.instagram.com/drareynapimentel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-white/70 hover:text-white text-sm font-medium transition-colors group/link"
                >
                  Ver casos reales en Instagram
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/drareynapimentel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-all shadow-soft"
          >
            <Star className="w-4 h-4 fill-white" />
            Ver resultados en @dra.reynapimentel
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

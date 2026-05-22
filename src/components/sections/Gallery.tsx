"use client";

import { SwatchBook, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GlassCard from "@/components/shared/GlassCard";

const cases = [
  {
    image: "/images/gallery-smile-1.jpg",
    title: "Diseño de Sonrisa",
    desc: "Transformación completa con carillas y blanqueamiento. Resultado natural y radiante.",
    tag: "Antes/Después",
  },
  {
    image: "/images/gallery-smile-2.jpg",
    title: "Ortodoncia",
    desc: "Corrección de alineación dental con brackets estéticos. Sonrisa perfecta en 18 meses.",
    tag: "Tratamiento",
  },
  {
    image: "/images/gallery-smile-3.jpg",
    title: "Rehabilitación Estética",
    desc: "Coronas de porcelana y reconstrucción total. Función y belleza restauradas.",
    tag: "Restauración",
  },
  {
    image: "/images/gallery-smile-4.jpg",
    title: "Atención Integral",
    desc: "Odontología general con enfoque preventivo. Cuidamos toda tu salud bucal.",
    tag: "Preventiva",
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
            <GlassCard key={i} className="!p-0 overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Tag */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-dark">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-dark/60">{item.desc}</p>
                <a
                  href="https://www.instagram.com/drareynapimentel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-brand-500 text-sm font-medium hover:text-brand-600 transition-colors"
                >
                  Ver en Instagram
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
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
            Ver más en Instagram
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import { SwatchBook, Star } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

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

        {/* Gallery grid — usando imágenes del letrero como referencia visual */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Diseño de Sonrisa",
              icon: Star,
              color: "from-brand-400 to-brand-600",
            },
            {
              label: "Ortodoncia",
              icon: SwatchBook,
              color: "from-accent to-brand-400",
            },
            {
              label: "Rehabilitación",
              icon: Star,
              color: "from-brand-600 to-dark",
            },
            {
              label: "Atención Integral",
              icon: SwatchBook,
              color: "from-brand-300 to-brand-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-br ${item.color}`}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <item.icon className="w-8 h-8 mb-2 opacity-80" />
                <p className="text-sm font-semibold text-center">{item.label}</p>
              </div>
              <p className="absolute bottom-2 left-2 text-[10px] text-white/50">
                Ver en Instagram →
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/drareynapimentel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            Ver más resultados en @dra.reynapimentel →
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

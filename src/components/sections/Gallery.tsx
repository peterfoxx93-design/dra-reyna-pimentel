"use client";

import { ArrowUpRight, Instagram } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

const cases = [
  {
    image: "/images/gallery-smile-1.jpg",
    title: "Diseño de Sonrisa",
    desc: "Carillas, blanqueamiento y rehabilitación estética. Resultados naturales y radiantes que transforman tu sonrisa.",
    tag: "Estética Dental",
  },
  {
    image: "/images/gallery-smile-2.jpg",
    title: "Ortodoncia",
    desc: "Brackets tradicionales y estéticos. Corregimos la alineación dental para una sonrisa perfecta y saludable.",
    tag: "Alineación",
  },
  {
    image: "/images/gallery-smile-3.jpg",
    title: "Rehabilitación Estética",
    desc: "Coronas, puentes e implantes. Restauramos función y belleza con materiales de alta calidad.",
    tag: "Restauración",
  },
  {
    image: "/images/gallery-smile-4.jpg",
    title: "Atención Integral",
    desc: "Odontología general, preventiva y pediatrica. Te recibimos en un ambiente moderno y acogedor.",
    tag: "Nuestra Clínica",
  },
];

export default function Gallery() {
  return (
    <AnimatedSection className="py-20 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Sonrisas que hablan por sí solas
          </h2>
          <p className="text-dark/60">
            Cada paciente es único. Cada sonrisa, una historia de confianza y transformación.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cases.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-dark text-xs font-semibold rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-dark/60 mb-4">{item.desc}</p>
                <a
                  href="https://instagram.com/dra.reynapimentel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-500 text-sm font-semibold hover:text-brand-600 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Ver casos reales en Instagram
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com/dra.reynapimentel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Ver resultados en @dra.reynapimentel
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

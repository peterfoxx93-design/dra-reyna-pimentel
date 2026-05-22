"use client";

import { ArrowUpRight, Star } from "lucide-react";
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
              className="group rounded-2xl overflow-hidden bg-white border border-brand-100 shadow-card hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-dark shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href="https://www.instagram.com/drareynapimentel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-brand-500 text-sm font-medium hover:text-brand-600 transition-colors group/link"
                >
                  Ver casos reales en Instagram
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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

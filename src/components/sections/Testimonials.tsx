"use client";

import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const testimonials = [
  {
    name: "María G.",
    text: "Excelente atención. La Dra. Reyna es muy profesional y cálida. Me devolvió la confianza para sonreír. ¡100% recomendada!",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "Llevo años yendo a este centro. Tienen un equipo maravilloso, siempre atentos y con resultados increíbles. Nagua tiene la mejor odontóloga.",
    rating: 5,
  },
  {
    name: "Ana R.",
    text: "Mi hija tenía miedo al dentista, pero en la primera visita salió feliz. La odontopediatría aquí es espectacular. Muy agradecida.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-dark/60">
            La mejor publicidad es la que hacen quienes ya confiaron en nosotros.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-brand-100 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-brand-200 mb-3" />
              <p className="text-dark/70 text-sm leading-relaxed mb-4">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="font-semibold text-dark text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import { Award, GraduationCap, Heart, Building2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GlassCard from "@/components/shared/GlassCard";

const highlights = [
  {
    icon: Award,
    title: "Reconocimiento SNS",
    desc: "Mejor Odontóloga de la Zona Noreste — Premio Nacional de Odontología 2020",
  },
  {
    icon: GraduationCap,
    title: "Formación",
    desc: "Egresada de la Universidad Odontológica Dominicana. Residencia en Dentística.",
  },
  {
    icon: Heart,
    title: "Atención con Calidez",
    desc: "Misión: devolver sonrisas con confianza. Trato humano y personalizado.",
  },
  {
    icon: Building2,
    title: "Trayectoria",
    desc: "Sector público desde 2014 en Hospital de El Factor. Consultorio privado desde 2018.",
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Conoce a la doctora
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Dra. Reyna Pimentel Barrera
          </h2>
          <p className="text-dark/60">
            Más de una década dedicada a la salud bucal, combinando excelencia
            técnica con un trato cercano que hace la diferencia.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <GlassCard key={i} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-50 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-dark/60">{item.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Quote / Mission */}
        <div className="mt-16 bg-gradient-light rounded-3xl p-8 sm:p-12 text-center">
          <p className="text-lg sm:text-xl text-dark/70 italic max-w-3xl mx-auto">
            &quot;En el Centro Odontológico Dra. Reyna Pimentel cuidamos cada
            detalle de tu salud bucal para que puedas sonreír con confianza
            todos los días.&quot;
          </p>
          <p className="mt-4 font-semibold text-brand-500">— Dra. Reyna Pimentel</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

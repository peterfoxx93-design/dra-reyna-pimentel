"use client";

import {
  Smile,
  Brush,
  Syringe,
  Scissors,
  Baby,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GlassCard from "@/components/shared/GlassCard";

const services = [
  {
    icon: Smile,
    title: "Diseño de Sonrisa",
    desc: "Transformación estética completa. Carillas, blanqueamiento y rehabilitación para la sonrisa que siempre soñaste.",
  },
  {
    icon: Brush,
    title: "Ortodoncia",
    desc: "Alineación dental con brackets tradicionales o estéticos. Corregimos la posición de tus dientes.",
  },
  {
    icon: Syringe,
    title: "Endodoncia",
    desc: "Tratamiento de conducto. Salvamos tu diente eliminando la infección desde la raíz.",
  },
  {
    icon: Scissors,
    title: "Cirugía Maxilofacial",
    desc: "Extracciones complejas, cirugía oral y procedimientos quirúrgicos especializados.",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    desc: "Atención dental para los más pequeños. Creando experiencias positivas desde la infancia.",
  },
  {
    icon: Sparkles,
    title: "Rehabilitación Estética",
    desc: "Coronas, puentes, implantes y resinas. Restauramos función y belleza a tu sonrisa.",
  },
];

export default function Services() {
  return (
    <AnimatedSection
      id="services"
      className="py-20 bg-gradient-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Todo en odontología, un solo lugar
          </h2>
          <p className="text-dark/60">
            Desde atención preventiva hasta rehabilitación estética completa.
            Cada tratamiento diseñado para ti.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <GlassCard key={i}>
              <div className="w-12 h-12 mb-4 rounded-xl bg-brand-50 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-dark/60 leading-relaxed">
                {service.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

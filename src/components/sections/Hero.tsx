"use client";

import { Phone, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  const scrollToContacto = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contacto");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 rounded-full text-brand-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Reconocida por el SNS — Mejor Odontóloga Zona Noreste
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] mb-4">
              Expertos en
              <br />
              <span className="text-gradient">crear sonrisas</span>
            </h1>

            <p className="text-lg text-dark/60 max-w-lg mb-8">
              Centro Odontológico en Puerto Plata con más de 12 años de experiencia
              transformando sonrisas con calidez, profesionalismo y excelencia.
            </p>

            {/* Big Phone Number */}
            <a
              href="tel:+180****7033"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-brand rounded-2xl text-white mb-8 hover:scale-[1.02] transition-transform shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-xs text-white/70 uppercase tracking-wider">
                  Llama ahora
                </p>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                  (809) 584-7033
                </p>
              </div>
            </a>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                onClick={scrollToContacto}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all shadow-soft cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Agenda tu cita
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-500 text-brand-500 font-semibold rounded-full hover:bg-brand-50 transition-all"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Photo frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl group">
                <Image
                  src="/images/dra-reyna-hero.jpg"
                  alt="Dra. Reyna Pimentel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-brand-200/50 -z-10" />
              <div className="absolute -inset-8 rounded-full border border-brand-100/30 -z-20" />

              {/* Floating badge - experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-card px-4 py-3 border border-brand-100"
              >
                <p className="text-2xl font-bold text-brand-500">12+</p>
                <p className="text-xs text-dark/50">Años de experiencia</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

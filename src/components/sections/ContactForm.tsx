"use client";

import { useState } from "react";
import { Send, Phone, Instagram, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de envío para el demo
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <AnimatedSection id="contact" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info + CTAs rápidas */}
          <div className="lg:col-span-2">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
              ¿Listo para tu nueva sonrisa?
            </h2>
            <p className="text-dark/60 mb-8">
              Contáctanos hoy y da el primer paso. Te esperamos con los brazos
              abiertos en Nagua.
            </p>

            {/* Quick contact cards */}
            <div className="space-y-4">
              <a
                href="tel:+18095847033"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-100 shadow-card hover:border-brand-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-dark/40 uppercase">Llama ahora</p>
                  <p className="font-semibold text-dark text-lg">
                    (809) 584-7033
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/drareynapimentel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-100 shadow-card hover:border-brand-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-dark/40 uppercase">Síguenos</p>
                  <p className="font-semibold text-dark">@dra.reynapimentel</p>
                </div>
              </a>
            </div>

            {/* WhatsApp CTA grande */}
            <a
              href="https://wa.me/18095847033?text=Hola%20Dra.%20Reyna%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center px-6 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg text-lg"
            >
              📱 Escríbenos por WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 sm:p-12 border border-brand-100 shadow-card text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-dark/60 mb-6">
                  Gracias por contactarnos. Te llamaremos pronto para
                  confirmar tu cita.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      nombre: "",
                      telefono: "",
                      servicio: "",
                      mensaje: "",
                    });
                  }}
                  className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-full hover:bg-brand-600 transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-100 shadow-card"
              >
                <h3 className="text-xl font-bold text-dark mb-6">
                  Solicita tu cita
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="809-000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Servicio de interés
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Diseño de Sonrisa">Diseño de Sonrisa</option>
                    <option value="Ortodoncia">Ortodoncia</option>
                    <option value="Endodoncia">Endodoncia</option>
                    <option value="Cirugía Maxilofacial">Cirugía Maxilofacial</option>
                    <option value="Odontopediatría">Odontopediatría</option>
                    <option value="Rehabilitación">Rehabilitación</option>
                    <option value="Consulta General">Consulta General</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={3}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 disabled:opacity-60 transition-all shadow-soft"
                >
                  {loading ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar solicitud
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

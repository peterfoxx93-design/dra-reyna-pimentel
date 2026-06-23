"use client";

import { MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GlassCard from "@/components/shared/GlassCard";

export default function Location() {
  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-brand-100 shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.723097457563!2d-70.69933756600437!3d19.79049437286215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c5c5a5a5a5a5%3A0x0!2zMTnCsDQ3JzI1LjUiTiA3MMKwNDEnNTUuMiJX!5e0!3m2!1ses!2sdo!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Centro Odontológico Dra. Reyna Pimentel"
            />
          </div>

          {/* Info */}
          <div>
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
              Ubicación
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-6">
              Visítanos en Puerto Plata
            </h2>

            <div className="space-y-4">
              <GlassCard hover={false}>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Dirección</p>
                    <p className="text-sm text-dark/60">
                      Puerto Plata, Rep. Dom.
                      <br />
                      Provincia Puerto Plata
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover={false}>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brand-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Horarios</p>
                    <div className="text-sm text-dark/60 space-y-1 mt-1">
                      <p>Lun - Vie: 8:00 AM — 5:00 PM</p>
                      <p>Sábado: 8:00 AM — 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Puerto+Plata+Dominican+Republic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white font-semibold rounded-full hover:bg-brand-600 transition-all shadow-soft"
              >
                <MapPin className="w-5 h-5" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

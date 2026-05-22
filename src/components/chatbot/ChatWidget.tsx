"use client";

import { useState } from "react";
import { MessageCircle, X, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const quickReplies = [
  {
    label: "📅 Agendar cita",
    msg: "¡Hola Dra. Reyna! Quisiera agendar una cita. ¿Cuándo tienes disponibilidad?",
  },
  {
    label: "🦷 Diseño de Sonrisa",
    msg: "Hola, me interesa el Diseño de Sonrisa. ¿Podrían darme más información y precios?",
  },
  {
    label: "😬 Ortodoncia",
    msg: "Hola, quiero información sobre ortodoncia. ¿Trabajan con brackets estéticos?",
  },
  {
    label: "📍 Dirección",
    msg: "Hola, ¿podrían confirmarme la dirección exacta y horarios? Quiero visitarlos.",
  },
  {
    label: "💰 Presupuesto",
    msg: "Hola, quisiera saber si hacen presupuesto sin compromiso. Gracias.",
  },
  {
    label: "👶 Odontopediatría",
    msg: "Hola, mi hijo/a necesita revisión dental. ¿Atienden niños? ¿Cómo agendo una cita?",
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const openWhatsApp = (msg: string) => {
    const url = `https://wa.me/18095847033?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setShowChat(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Chat por WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-brand-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Dra. Reyna Pimentel</p>
                  <p className="text-xs text-white/70">Centro Odontológico</p>
                </div>
              </div>
              <p className="text-xs text-white/60 mt-2">
                Responde en minutos • Horario: Lun-Sáb
              </p>
            </div>

            {/* Body */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {!showChat ? (
                <>
                  {/* Welcome message */}
                  <div className="bg-brand-50 rounded-2xl rounded-tl-none p-4 mb-4">
                    <p className="text-sm text-dark/80">
                      ¡Hola! 👋 Soy el asistente virtual del Centro Odontológico
                      Dra. Reyna Pimentel. ¿En qué puedo ayudarte hoy?
                    </p>
                  </div>

                  {/* Big phone CTA */}
                  <a
                    href="tel:+18095847033"
                    className="flex items-center gap-3 p-3 mb-4 bg-gradient-to-r from-brand-50 to-brand-100 rounded-xl border border-brand-200 hover:bg-brand-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-dark/40">Llama directo</p>
                      <p className="font-semibold text-dark text-sm">
                        (809) 584-7033
                      </p>
                    </div>
                  </a>

                  <button
                    onClick={() => setShowChat(true)}
                    className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Iniciar chat por WhatsApp
                  </button>

                  <p className="text-center text-xs text-dark/40 mt-2">
                    Sin esperas, te atiende directo la doctora
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm text-dark/60 mb-3">
                    Elige tu opción para enviar un mensaje por WhatsApp:
                  </p>
                  <div className="space-y-2">
                    {quickReplies.map((qr, i) => (
                      <button
                        key={i}
                        onClick={() => openWhatsApp(qr.msg)}
                        className="w-full text-left p-3 rounded-xl border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all text-sm flex items-center justify-between group"
                      >
                        <span className="text-dark/80 group-hover:text-dark">
                          {qr.label}
                        </span>
                        <ChevronRight className="w-4 h-4 text-green-500 shrink-0" />
                      </button>
                    ))}
                  </div>

                  {/* Doctor info */}
                  <div className="mt-4 pt-3 border-t border-brand-100">
                    <p className="text-xs text-dark/40 text-center">
                      C/ Amalio Alonzo #24, Nagua | Lun-Sáb
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

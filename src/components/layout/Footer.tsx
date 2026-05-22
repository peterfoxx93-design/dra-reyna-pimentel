import { Phone, MapPin, Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-accent font-bold text-sm">
                RP
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Dra. Reyna Pimentel
                </p>
                <p className="text-[10px] text-accent/70 leading-tight">
                  Centro Odontológico
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              &quot;Expertos en crear sonrisas&quot; — Transformamos vidas a través de
              la salud bucal con calidez y excelencia profesional.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+18095847033"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                (809) 584-7033
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  C/ Amalio Alonzo #24
                  <br />
                  Nagua, Rep. Dom.
                </span>
              </div>
              <a
                href="https://www.instagram.com/drareynapimentel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4 text-accent shrink-0" />
                @dra.reynapimentel
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">
              Horarios
            </h3>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex justify-between">
                <span>Lun - Vie</span>
                <span>8:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sábado</span>
                <span>8:00 AM - 1:00 PM</span>
              </p>
              <p className="flex justify-between text-white/40">
                <span>Domingo</span>
                <span>Cerrado</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Centro Odontológico Dra. Reyna Pimentel. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-red-400" /> en Nagua
          </p>
        </div>
      </div>
    </footer>
  );
}

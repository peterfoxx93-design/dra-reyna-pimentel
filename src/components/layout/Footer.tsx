import { Phone, MapPin, Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo-clinica.png" alt="RP" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg leading-tight">Dra. Reyna Pimentel</p>
                <p className="text-sm text-white/60">Centro Odontológico</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              &quot;Expertos en crear sonrisas&quot; — Transformamos vidas a través de la salud
              bucal con calidez y excelencia profesional.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                (809) 584-7033
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400" />
                C/ Amalio Alonzo #24, Nagua, Rep. Dom.
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-brand-400" />
                @dra.reynapimentel
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Horarios
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex justify-between max-w-[200px]">
                <span>Lun - Vie</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sábado</span>
                <span>8:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Domingo</span>
                <span className="text-white/40">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Centro Odontológico Dra. Reyna Pimentel.
          Todos los derechos reservados. Hecho con <Heart className="inline w-3.5 h-3.5 text-red-400" /> en Nagua.
        </div>
      </div>
    </footer>
  );
}

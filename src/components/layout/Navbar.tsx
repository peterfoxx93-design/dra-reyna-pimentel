"use client";

import { useState } from "react";
import { Menu, X, Phone, Shield } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "La Doctora", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Resultados", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => scrollTo(e, "#hero")} className="flex items-center gap-2">
            <img src="/images/logo-clinica.png" alt="RP" className="w-9 h-9 rounded-full object-cover" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-dark leading-tight">
                Dra. Reyna Pimentel
              </p>
              <p className="text-[10px] text-brand-500 leading-tight">
                Centro Odontológico
              </p>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="px-3 py-2 text-sm text-dark/70 hover:text-brand-500 transition-colors rounded-lg hover:bg-brand-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://clinicadrareyna-crm-api.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm text-dark/40 hover:text-brand-500 transition-colors rounded-lg hover:bg-brand-50"
            >
              ⚙ Admin
            </a>
            <a
              href="tel:+180****7033"
              className="ml-2 flex items-center gap-2 px-4 py-2 bg-brand-500 text-white text-sm font-semibold rounded-full hover:bg-brand-600 transition-all shadow-soft"
            >
              <Phone className="w-4 h-4" />
              (809) 584-7033
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            {isOpen ? <X className="w-6 h-6 text-dark" /> : <Menu className="w-6 h-6 text-dark" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="block py-3 text-dark/70 hover:text-brand-500 border-b border-brand-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://clinicadrareyna-crm-api.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-dark/40 hover:text-brand-500 border-b border-brand-50"
          >
            ⚙ Administración
          </a>
          <a
            href="tel:+180****7033"
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-brand-500 text-white font-semibold rounded-xl"
          >
            <Phone className="w-4 h-4" />
            (809) 584-7033
          </a>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Phone, Instagram, CheckCircle, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const API_BASE = "https://clinicadrareyna-crm-api.onrender.com";

export default function ContactForm() {
  const [step, setStep] = useState(1); // 1=doctor, 2=service/date, 3=info, 4=success
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState<{id:number;name:string;duration_minutes:number}[]>([]);
  const [doctors, setDoctors] = useState<{id:number;name:string;specialty:string}[]>([]);
  const [slots, setSlots] = useState<string[]>([]);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    doctor_id: "",
    servicio: "",
    fecha: "",
    hora: "",
  });

  useEffect(() => {
    // Wake up Render
    fetch(`${API_BASE}/api/public/services`)
      .then(r => r.json())
      .then(d => setServices(d.services || []))
      .catch(() => {});
    fetch(`${API_BASE}/api/public/doctors`)
      .then(r => r.json())
      .then(d => setDoctors(d.doctors || []))
      .catch(() => {});

    // Auto-refresh doctors every 30s to keep Render warm while user fills form
    const interval = setInterval(() => {
      fetch(`${API_BASE}/api/public/doctors`).catch(() => {});
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Generate available time slots (9am - 5pm, 30min intervals)
  useEffect(() => {
    const times: string[] = [];
    for (let h = 8; h <= 16; h++) {
      for (let m of [0, 30]) {
        const hh = h.toString().padStart(2, "0");
        const mm = m.toString().padStart(2, "0");
        times.push(`${hh}:${mm}`);
      }
    }
    setSlots(times);
  }, []);

  // Get min date (today) and max date (+30 days)
  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "telefono") {
      // Auto-format: xxx-xxx-xxxx
      const digits = value.replace(/\D/g, "").slice(0, 10);
      let formatted = digits;
      if (digits.length > 3) formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
      if (digits.length > 6) formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      setForm({ ...form, telefono: formatted });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const canContinue = () => {
    if (step === 1) return form.doctor_id;
    if (step === 2) return form.servicio && form.fecha && form.hora;
    return form.nombre.trim() && form.telefono.trim();
  };

  const handleNext = () => {
    if (step === 1 && canContinue()) setStep(2);
    else if (step === 2 && canContinue()) setStep(3);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const selectedService = services.find(s => s.id === Number(form.servicio));
      const res = await fetch(`${API_BASE}/api/public/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nombre.trim(),
          phone: form.telefono.trim(),
          email: form.email.trim(),
          doctor_id: form.doctor_id ? Number(form.doctor_id) : null,
          service: selectedService?.name || "consulta",
          datetime: `${form.fecha}T${form.hora}:00`,
        }),
        signal: AbortSignal.timeout(45000), // 45s timeout for cold start
      });
      const data = await res.json();
      if (data.success) {
        setStep(4);
      } else {
        alert("Error: " + (data.error || "No se pudo agendar"));
      }
    } catch {
      alert("El servidor está despertando... espera unos segundos y vuelve a intentar.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(1);
    setForm({ nombre: "", telefono: "", email: "", servicio: "", fecha: "", hora: "", doctor_id: "" });
  };

  const formatDate = (d: string) => {
    if (!d) return "";
    return new Date(d + "T12:00:00").toLocaleDateString("es-DO", {
      weekday: "long", day: "numeric", month: "long",
    });
  };

  const fmtHora = (t: string) => {
    if (!t) return "";
    const [h, m] = t.split(":");
    const hour = parseInt(h);
    return `${hour > 12 ? hour - 12 : hour || 12}:${m} ${hour >= 12 ? "PM" : "AM"}`;
  };

  return (
    <AnimatedSection id="contacto">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Agenda tu cita
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
          Elige el servicio, fecha y hora que mejor te acomode. Te confirmaremos por teléfono.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-teal-50 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1">📍 Visítanos</h3>
              <p className="text-gray-600 text-sm">C/ Amalio Alonzo #24, Nagua</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1">🕐 Horarios</h3>
              <p className="text-gray-600 text-sm">Lun - Vie: 8:00 AM — 5:00 PM</p>
              <p className="text-gray-600 text-sm">Sáb: 8:00 AM — 1:00 PM</p>
            </div>
            <a
              href="tel:+180****7033"
              className="flex items-center gap-2 bg-white border border-teal-500 text-teal-700 font-semibold rounded-full px-4 py-2 text-sm hover:bg-teal-50 transition-all"
            >
              <Phone className="w-4 h-4" /> Llámanos: (809) 584-7033
            </a>
            <a
              href="https://wa.me/18095847033?text=Hola%2C%20quisiera%20agendar%20una%20cita"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-full px-4 py-2 text-sm hover:bg-green-600 transition-all"
            >
              💬 Escríbenos por WhatsApp
            </a>
          </div>

          {/* Right: Booking Form */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {step === 4 ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">✅ ¡Cita agendada!</h3>
                <p className="text-gray-600 mb-6">
                  {form.nombre}, te esperamos el <strong>{formatDate(form.fecha)}</strong> a las <strong>{fmtHora(form.hora)}</strong>.
                </p>
                <button onClick={reset} className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all">
                  Agendar otra cita
                </button>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div className="flex gap-2 mb-6">
                  <div className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-teal-500" : "bg-gray-200"}`} />
                  <div className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-teal-500" : "bg-gray-200"}`} />
                  <div className={`h-2 flex-1 rounded-full ${step >= 3 ? "bg-teal-500" : "bg-gray-200"}`} />
                </div>

                {step === 1 ? (
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold">1. Elige tu doctor</h3>
                    <p className="text-sm text-gray-500">Selecciona el doctor con quien deseas agendar tu cita.</p>

                    <div className="space-y-3">
                      {doctors.map(d => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => setForm({ ...form, doctor_id: String(d.id) })}
                          className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                            form.doctor_id === String(d.id)
                              ? "bg-teal-50 border-teal-500"
                              : "bg-white border-gray-200 hover:border-teal-300"
                          }`}
                        >
                          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg shrink-0">
                            {d.name.split(" ").map((w:string) => w[0]).join("").slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{d.name}</p>
                            <p className="text-sm text-gray-500">{d.specialty}</p>
                          </div>
                          {form.doctor_id === String(d.id) && (
                            <span className="ml-auto text-teal-600 text-xl">✓</span>
                          )}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={!canContinue()}
                      className="w-full py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continuar →
                    </button>
                  </div>
                ) : step === 2 ? (
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold">2. Elige servicio y horario</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Servicio *</label>
                      <select
                        name="servicio"
                        value={form.servicio}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
                      <input
                        type="date"
                        name="fecha"
                        value={form.fecha}
                        min={today}
                        max={maxDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none"
                      />
                    </div>

                    {form.fecha && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hora *</label>
                        <div className="grid grid-cols-4 gap-2">
                          {slots.map(t => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setForm({ ...form, hora: t })}
                              className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                                form.hora === t
                                  ? "bg-teal-500 text-white border-teal-500"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-teal-300"
                              }`}
                            >
                              {fmtHora(t)}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleNext}
                      disabled={!canContinue()}
                      className="w-full py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continuar →
                    </button>
                    <button
                      onClick={() => setStep(1)}
                      className="w-full text-sm text-gray-500 hover:text-gray-700 mt-1"
                    >
                      ← Cambiar doctor
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold">3. Tus datos</h3>

                    <div className="bg-teal-50 rounded-xl p-4 text-sm text-gray-700 space-y-1">
                      <p><strong>Doctor:</strong> {doctors.find(d => String(d.id) === form.doctor_id)?.name || '—'}</p>
                      <p><strong>Servicio:</strong> {services.find(s => s.id === Number(form.servicio))?.name}</p>
                      <p><strong>Fecha:</strong> {formatDate(form.fecha)}</p>
                      <p><strong>Hora:</strong> {fmtHora(form.hora)}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="809-555-0101"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="nombre@correo.com"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(2)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
                      >
                        ← Atrás
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={loading || !canContinue()}
                        className="flex-1 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all disabled:opacity-40"
                      >
                        {loading ? "⏳ Reservando..." : "✅ Confirmar reserva"}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

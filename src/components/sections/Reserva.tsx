"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ReservaForm } from "@/types";
import { staggerContainer, fadeUp, fadeIn, slideLeft, slideRight } from "@/components/animations/variants";

const colors = {
  cream: "#F5F0E8",
  sand: "#E8E0D0",
  sage: "#4A7C59",
  forest: "#2D5A27",
  coffee: "#8B6914",
  espresso: "#2C2416",
};

const HORAS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
];

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ color: colors.espresso }} className="font-body text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <span className="font-body text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}

export default function Reserva() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservaForm>();

  const inputClass = `w-full font-body text-sm px-4 py-3 rounded-xl border outline-none transition-all duration-200 focus:ring-2`;
  const inputStyle = {
    backgroundColor: colors.cream,
    borderColor: colors.sand,
    color: colors.espresso,
  };

  const onSubmit = async (data: ReservaForm) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="reserva"
      style={{ backgroundColor: colors.cream }}
      className="py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Columna izquierda — texto */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.span
                variants={fadeIn}
                style={{ color: colors.coffee }}
                className="inline-block font-body text-xs tracking-[0.3em] uppercase mb-4"
              >
                Reserva tu lugar
              </motion.span>
              <motion.h2
                variants={fadeUp}
                style={{ color: colors.espresso }}
                className="font-display text-4xl md:text-6xl leading-tight"
              >
                Te esperamos con el café listo
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp}
              style={{ color: "#2C241699" }}
              className="font-body text-base leading-relaxed"
            >
              Reserva tu mesa y asegura tu momento favorito del día. Te confirmaremos tu reserva por email en menos de 24 horas.
            </motion.p>

            {/* Info rápida */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-4">
              {[
                { icon: "📍", title: "Ubicación", desc: "Av. Providencia 1234, Providencia" },
                { icon: "📞", title: "Teléfono", desc: "+56 9 1234 5678" },
                { icon: "✉️", title: "Email", desc: "hola@mentaycafe.cl" },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="flex items-center gap-4">
                  <span
                    style={{ backgroundColor: `${colors.sage}15` }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p style={{ color: colors.espresso }} className="font-body text-sm font-medium">{item.title}</p>
                    <p style={{ color: "#2C241699" }} className="font-body text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna derecha — formulario */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            style={{ backgroundColor: "#fff", borderColor: colors.sand }}
            className="rounded-2xl border p-8 shadow-sm"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <span className="text-5xl">🌿</span>
                <h3 style={{ color: colors.sage }} className="font-display text-2xl">¡Reserva recibida!</h3>
                <p style={{ color: "#2C241699" }} className="font-body text-sm leading-relaxed max-w-xs">
                  Te confirmaremos por email en menos de 24 horas. ¡Nos vemos pronto!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{ color: colors.sage, borderColor: colors.sage }}
                  className="mt-4 font-body text-sm border rounded-full px-6 py-2 hover:opacity-70 transition-opacity"
                >
                  Hacer otra reserva
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <h3 style={{ color: colors.espresso }} className="font-display text-2xl mb-2">
                  Datos de reserva
                </h3>

                {/* Nombre */}
                <InputField label="Nombre completo" error={errors.nombre?.message}>
                  <input
                    {...register("nombre", { required: "El nombre es requerido" })}
                    placeholder="Tu nombre"
                    style={inputStyle}
                    className={`${inputClass} focus:ring-sage/30`}
                  />
                </InputField>

                {/* Email */}
                <InputField label="Email" error={errors.email?.message}>
                  <input
                    {...register("email", {
                      required: "El email es requerido",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido" },
                    })}
                    type="email"
                    placeholder="tu@email.com"
                    style={inputStyle}
                    className={`${inputClass} focus:ring-sage/30`}
                  />
                </InputField>

                {/* Teléfono */}
                <InputField label="Teléfono" error={errors.telefono?.message}>
                  <input
                    {...register("telefono", { required: "El teléfono es requerido" })}
                    placeholder="+56 9 1234 5678"
                    style={inputStyle}
                    className={`${inputClass} focus:ring-sage/30`}
                  />
                </InputField>

                {/* Fecha y hora */}
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Fecha" error={errors.fecha?.message}>
                    <input
                      {...register("fecha", { required: "La fecha es requerida" })}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      style={inputStyle}
                      className={`${inputClass} focus:ring-sage/30`}
                    />
                  </InputField>

                  <InputField label="Hora" error={errors.hora?.message}>
                    <select
                      {...register("hora", { required: "La hora es requerida" })}
                      style={inputStyle}
                      className={`${inputClass} focus:ring-sage/30`}
                    >
                      <option value="">Seleccionar</option>
                      {HORAS.map((h) => (
                        <option key={h} value={h}>{h} hrs</option>
                      ))}
                    </select>
                  </InputField>
                </div>

                {/* Personas */}
                <InputField label="Número de personas" error={errors.personas?.message}>
                  <select
                    {...register("personas", { required: "Selecciona el número de personas" })}
                    style={inputStyle}
                    className={`${inputClass} focus:ring-sage/30`}
                  >
                    <option value="">Seleccionar</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                    ))}
                  </select>
                </InputField>

                {/* Mensaje */}
                <InputField label="Mensaje o solicitud especial (opcional)">
                  <textarea
                    {...register("mensaje")}
                    rows={3}
                    placeholder="Alergias, celebraciones, preferencias..."
                    style={inputStyle}
                    className={`${inputClass} focus:ring-sage/30 resize-none`}
                  />
                </InputField>

                {status === "error" && (
                  <p className="font-body text-sm text-red-500 text-center">
                    Hubo un error al enviar. Por favor intenta de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ backgroundColor: colors.sage, color: colors.cream }}
                  className="w-full font-body font-medium py-4 rounded-xl text-base hover:opacity-90 transition-opacity duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? "Enviando..." : "Confirmar reserva"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
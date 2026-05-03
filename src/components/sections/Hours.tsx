"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { HORARIOS } from "@/lib/constants";
import { staggerContainer, fadeUp, fadeIn } from "@/components/animations/variants";

const colors = {
  cream: "#F5F0E8",
  sand: "#E8E0D0",
  sage: "#4A7C59",
  forest: "#2D5A27",
  coffee: "#8B6914",
  espresso: "#2C2416",
};

function useIsOpen() {
  return useMemo(() => {
    const now = new Date();
    const dayIndex = now.getDay(); // 0=domingo, 1=lunes...
    const reordered = [6, 0, 1, 2, 3, 4, 5]; // para que lunes sea índice 0
    const todaySchedule = HORARIOS[reordered[dayIndex]];

    if (todaySchedule.closed) return { isOpen: false, todaySchedule };

    const [openH, openM] = todaySchedule.open.split(":").map(Number);
    const [closeH, closeM] = todaySchedule.close.split(":").map(Number);

    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    return {
      isOpen: nowMinutes >= openMinutes && nowMinutes < closeMinutes,
      todaySchedule,
    };
  }, []);
}

export default function Hours() {
  const { isOpen, todaySchedule } = useIsOpen();

  return (
    <section
      id="horarios"
      style={{ backgroundColor: colors.sand }}
      className="py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Columna izquierda — texto + estado */}
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
                Cuándo visitarnos
              </motion.span>
              <motion.h2
                variants={fadeUp}
                style={{ color: colors.espresso }}
                className="font-display text-4xl md:text-6xl leading-tight"
              >
                Horarios de atención
              </motion.h2>
            </div>

            {/* Estado abierto/cerrado */}
            <motion.div
              variants={fadeUp}
              style={{ backgroundColor: colors.cream, borderColor: colors.sand }}
              className="rounded-2xl border p-6 flex items-center gap-5"
            >
              <div className="relative flex items-center justify-center w-12 h-12">
                <span
                  className="absolute inline-flex w-full h-full rounded-full opacity-40 animate-ping"
                  style={{ backgroundColor: isOpen ? colors.sage : "#DC2626" }}
                />
                <span
                  className="relative inline-flex w-4 h-4 rounded-full"
                  style={{ backgroundColor: isOpen ? colors.sage : "#DC2626" }}
                />
              </div>
              <div>
                <p style={{ color: colors.espresso }} className="font-display text-xl font-semibold">
                  {isOpen ? "Estamos abiertos" : "Estamos cerrados"}
                </p>
                <p style={{ color: "#2C241699" }} className="font-body text-sm mt-0.5">
                  {isOpen
                    ? `Cerramos hoy a las ${todaySchedule.close} hrs`
                    : `Abrimos ${todaySchedule.closed ? "mañana" : `hoy a las ${todaySchedule.open} hrs`}`}
                </p>
              </div>
            </motion.div>

            {/* Texto descriptivo */}
            <motion.p
              variants={fadeUp}
              style={{ color: "#2C241699" }}
              className="font-body text-base leading-relaxed"
            >
              Ven a desayunar, hacer una pausa con un buen café o compartir un almuerzo tranquilo. Te esperamos de lunes a domingo en Av. Providencia 1234, Santiago.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="#reserva"
              style={{ backgroundColor: colors.sage, color: colors.cream }}
              className="self-start inline-flex items-center gap-2 font-body font-medium px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity duration-300"
            >
              Reservar mesa →
            </motion.a>
          </motion.div>

          {/* Columna derecha — tabla de horarios */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            style={{ backgroundColor: colors.cream, borderColor: colors.sand }}
            className="rounded-2xl border overflow-hidden"
          >
            {HORARIOS.map((schedule, index) => {
              const isToday = new Date().getDay() === [1, 2, 3, 4, 5, 6, 0][index];
              return (
                <motion.div
                  key={schedule.day}
                  variants={fadeUp}
                  style={{
                    backgroundColor: isToday ? `${colors.sage}15` : "transparent",
                    borderBottom: index < HORARIOS.length - 1 ? `1px solid ${colors.sand}` : "none",
                  }}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span
                        style={{ backgroundColor: colors.sage }}
                        className="w-1.5 h-1.5 rounded-full"
                      />
                    )}
                    <span
                      style={{
                        color: isToday ? colors.sage : colors.espresso,
                        fontWeight: isToday ? 600 : 400,
                      }}
                      className="font-body text-sm"
                    >
                      {schedule.day}
                      {isToday && (
                        <span style={{ color: colors.sage }} className="ml-2 text-xs">
                          — Hoy
                        </span>
                      )}
                    </span>
                  </div>

                  {schedule.closed ? (
                    <span style={{ color: "#DC262699" }} className="font-body text-sm">
                      Cerrado
                    </span>
                  ) : (
                    <span
                      style={{ color: isToday ? colors.sage : "#2C241699" }}
                      className="font-body text-sm font-medium"
                    >
                      {schedule.open} – {schedule.close}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
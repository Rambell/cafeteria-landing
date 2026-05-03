"use client";

import { motion } from "framer-motion";
import { LOCAL_INFO } from "@/lib/constants";
import { staggerContainer, fadeUp, fadeIn, slideLeft, slideRight } from "@/components/animations/variants";

const colors = {
  cream: "#F5F0E8",
  sand: "#E8E0D0",
  sage: "#4A7C59",
  forest: "#2D5A27",
  coffee: "#8B6914",
  espresso: "#2C2416",
};

export default function Map() {
  return (
    <section
      id="ubicacion"
      style={{ backgroundColor: colors.sand }}
      className="py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mb-16"
        >
          <motion.span
            variants={fadeIn}
            style={{ color: colors.coffee }}
            className="inline-block font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Dónde encontrarnos
          </motion.span>
          <motion.h2
            variants={fadeUp}
            style={{ color: colors.espresso }}
            className="font-display text-4xl md:text-6xl leading-tight"
          >
            Ven a visitarnos
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Mapa */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="rounded-2xl overflow-hidden"
            style={{ minHeight: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9185!2d-70.6093!3d-33.4311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59e06c95dbd%3A0x785867c2cc41f701!2sAv.%20Providencia%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Menta & Café"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            style={{ backgroundColor: colors.cream, borderColor: colors.sand }}
            className="rounded-2xl border p-8 flex flex-col gap-8 justify-between"
          >
            <div className="flex flex-col gap-6">
              <h3 style={{ color: colors.espresso }} className="font-display text-2xl">
                {LOCAL_INFO.nombre}
              </h3>

              {[
                {
                  icon: "📍",
                  label: "Dirección",
                  value: LOCAL_INFO.direccion,
                  href: LOCAL_INFO.maps_url,
                },
                {
                  icon: "📞",
                  label: "Teléfono",
                  value: LOCAL_INFO.telefono,
                  href: `tel:${LOCAL_INFO.telefono.replace(/\s/g, "")}`,
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: LOCAL_INFO.email,
                  href: `mailto:${LOCAL_INFO.email}`,
                },
                {
                  icon: "📸",
                  label: "Instagram",
                  value: LOCAL_INFO.instagram,
                  href: `https://instagram.com/${LOCAL_INFO.instagram.replace("@", "")}`,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span
                    style={{ backgroundColor: `${colors.sage}15` }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 mt-0.5"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p style={{ color: "#2C241699" }} className="font-body text-xs tracking-wide uppercase mb-1">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ color: colors.espresso }}
                      className="font-body text-sm font-medium hover:opacity-70 transition-opacity"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA maps */}
            <a
              href={LOCAL_INFO.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: colors.sage, color: colors.sage }}
              className="w-full text-center font-body font-medium py-3.5 rounded-xl border text-sm hover:opacity-70 transition-opacity"
            >
              Abrir en Google Maps →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
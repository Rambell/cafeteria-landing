"use client";

import { motion } from "framer-motion";
import { LOCAL_INFO, HORARIOS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const colors = {
  cream: "#F5F0E8",
  sand: "#E8E0D0",
  sage: "#4A7C59",
  forest: "#2D5A27",
  coffee: "#8B6914",
  espresso: "#2C2416",
};

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Horarios", href: "#horarios" },
  { label: "Reservar", href: "#reserva" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: colors.espresso }} className="pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Grid principal */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16"
          style={{ borderBottom: `1px solid #ffffff15` }}
        >

          {/* Columna 1 — Logo y descripción */}
          <motion.div variants={fadeUp} className="lg:col-span-1 flex flex-col gap-4">
            <a href="#" className="font-display text-2xl font-bold text-cream">
              Menta <span style={{ color: colors.sage }}>&</span> Café
            </a>
            <p style={{ color: "#ffffff80" }} className="font-body text-sm leading-relaxed">
              Brunch y café de especialidad en el corazón de Providencia. Un lugar para descansar, conectar y disfrutar.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: "📸", label: "Instagram", href: `https://instagram.com/${LOCAL_INFO.instagram.replace("@", "")}` },
                { icon: "🗺️", label: "Maps", href: LOCAL_INFO.maps_url },
                { icon: "✉️", label: "Email", href: `mailto:${LOCAL_INFO.email}` },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ backgroundColor: "#ffffff15" }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm hover:opacity-70 transition-opacity"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2 — Links */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h4 style={{ color: colors.cream }} className="font-body text-sm font-semibold tracking-widest uppercase">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ color: "#ffffff80" }}
                    className="font-body text-sm hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3 — Horarios rápidos */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h4 style={{ color: colors.cream }} className="font-body text-sm font-semibold tracking-widest uppercase">
              Horarios
            </h4>
            <ul className="flex flex-col gap-2">
              {HORARIOS.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span style={{ color: "#ffffff60" }} className="font-body text-xs">{h.day}</span>
                  <span style={{ color: "#ffffff99" }} className="font-body text-xs font-medium">
                    {h.closed ? "Cerrado" : `${h.open}–${h.close}`}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4 — Contacto + CTA */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h4 style={{ color: colors.cream }} className="font-body text-sm font-semibold tracking-widest uppercase">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={LOCAL_INFO.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff80" }}
                className="font-body text-sm hover:opacity-70 transition-opacity leading-relaxed"
              >
                {LOCAL_INFO.direccion}
              </a>
              <a
                href={`tel:${LOCAL_INFO.telefono.replace(/\s/g, "")}`}
                style={{ color: "#ffffff80" }}
                className="font-body text-sm hover:opacity-70 transition-opacity"
              >
                {LOCAL_INFO.telefono}
              </a>
              <a
                href={`mailto:${LOCAL_INFO.email}`}
                style={{ color: "#ffffff80" }}
                className="font-body text-sm hover:opacity-70 transition-opacity"
              >
                {LOCAL_INFO.email}
              </a>
            </div>

            <a
              href="#reserva"
              style={{ backgroundColor: colors.sage, color: colors.cream }}
              className="mt-2 text-center font-body text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Reservar mesa
            </a>
          </motion.div>

        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ color: "#ffffff40" }} className="font-body text-xs">
            © {currentYear} Menta & Café. Todos los derechos reservados.
          </p>
          <p style={{ color: "#ffffff30" }} className="font-body text-xs">
            Diseñado y desarrollado con ☕ y{" "}
            <span style={{ color: colors.sage }}>Next.js</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
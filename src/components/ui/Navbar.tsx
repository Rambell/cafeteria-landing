"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOCAL_INFO } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#reserva" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#"
            style={{ color: scrolled ? "#2C2416" : "#F5F0E8" }}
            className="font-display text-2xl font-bold tracking-tight transition-colors duration-500"
          >
            Menta <span style={{ color: "#4A7C59" }}>&</span> Café
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ color: scrolled ? "#2C2416B3" : "#F5F0E8CC" }}
                  className="font-body text-sm transition-colors duration-500 tracking-wide hover:opacity-100"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4A7C59")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = scrolled ? "#2C2416B3" : "#F5F0E8CC")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href="#reserva"
            style={{
              backgroundColor: scrolled ? "#4A7C59" : "transparent",
              color: "#F5F0E8",
              borderColor: "#F5F0E8",
            }}
            className="hidden md:inline-flex items-center gap-2 text-sm font-body font-medium px-5 py-2.5 rounded-full border transition-all duration-500 hover:opacity-80"
          >
            Reservar mesa
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Abrir menú"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              style={{ backgroundColor: scrolled ? "#2C2416" : "#F5F0E8" }}
              className="block w-6 h-0.5 origin-center transition-colors duration-500"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ backgroundColor: scrolled ? "#2C2416" : "#F5F0E8" }}
              className="block w-6 h-0.5 transition-colors duration-500"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              style={{ backgroundColor: scrolled ? "#2C2416" : "#F5F0E8" }}
              className="block w-6 h-0.5 origin-center transition-colors duration-500"
            />
          </button>
        </div>
      </motion.nav>

      {/* Menú mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: "#F5F0E8" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{ color: "#2C2416" }}
                className="font-display text-3xl transition-colors hover:text-sage"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#reserva"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07 + 0.1 }}
              style={{ backgroundColor: "#4A7C59", color: "#F5F0E8" }}
              className="mt-4 font-body font-medium px-8 py-3 rounded-full text-lg hover:opacity-90 transition-opacity"
            >
              Reservar mesa
            </motion.a>
            <p className="absolute bottom-8 text-sm font-body" style={{ color: "#2C241640" }}>
              {LOCAL_INFO.instagram}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
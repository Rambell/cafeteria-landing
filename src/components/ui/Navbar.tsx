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
            className="font-display text-2xl font-bold text-espresso tracking-tight"
          >
            Menta <span className="text-sage">&</span> Café
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-espresso/70 hover:text-sage transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href="#reserva"
            className="hidden md:inline-flex items-center gap-2 bg-sage text-cream text-sm font-body font-medium px-5 py-2.5 rounded-full hover:bg-forest transition-colors duration-300"
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
              className="block w-6 h-0.5 bg-espresso origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-espresso"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-espresso origin-center transition-all"
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
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="font-display text-3xl text-espresso hover:text-sage transition-colors"
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
              className="mt-4 bg-sage text-cream font-body font-medium px-8 py-3 rounded-full text-lg hover:bg-forest transition-colors"
            >
              Reservar mesa
            </motion.a>
            <p className="absolute bottom-8 text-espresso/40 text-sm font-body">
              {LOCAL_INFO.instagram}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
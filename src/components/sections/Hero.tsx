"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { staggerContainer, fadeUp, fadeIn } from "@/components/animations/variants";

gsap.registerPlugin(ScrollTrigger);

const TITLE_LINE_1 = "El brunch que";
const TITLE_LINE_2 = "mereces cada día";

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 40, rotateX: -90 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.5,
                delay: i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax en el fondo
  useEffect(() => {
    if (!bgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay cálido */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/70" />

      {/* Contenido */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Tag */}
        <motion.span
          variants={fadeIn}
          className="inline-block font-body text-sm text-cream/80 tracking-[0.25em] uppercase mb-6 border border-cream/30 px-4 py-1.5 rounded-full"
        >
          Providencia, Santiago
        </motion.span>

        {/* Título */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <SplitText text={TITLE_LINE_1} />
          </motion.div>
          <br />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <SplitText
              text={TITLE_LINE_2}
              className="text-sand"
            />
          </motion.div>
        </h1>

        {/* Descripción */}
        <motion.p
          variants={fadeUp}
          className="font-body text-lg md:text-xl text-cream/75 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Ingredientes frescos, café de especialidad y un ambiente donde el tiempo se detiene.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reserva"
            className="bg-sage text-cream font-body font-medium px-8 py-4 rounded-full text-base hover:bg-forest transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Reservar mesa
          </a>
          <a
            href="#menu"
            className="border border-cream/50 text-cream font-body font-medium px-8 py-4 rounded-full text-base hover:bg-cream/10 transition-all duration-300"
          >
            Ver menú
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-cream/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-cream/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
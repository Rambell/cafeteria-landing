"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/constants";
import { fadeUp, fadeIn, slideLeft, staggerContainer } from "@/components/animations/variants";

gsap.registerPlugin(ScrollTrigger);

const colors = {
  cream: "#F5F0E8",
  sand: "#E8E0D0",
  sage: "#4A7C59",
  forest: "#2D5A27",
  coffee: "#8B6914",
  espresso: "#2C2416",
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
        }
      );
    });
    return () => ctx.revert();
  }, [inView, value]);

  return (
    <span style={{ color: colors.sage }} className="font-display text-5xl md:text-6xl font-bold">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="nosotros"
      style={{ backgroundColor: colors.cream }}
      className="py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mb-20"
        >
          <motion.span
            variants={fadeIn}
            style={{ color: colors.sage }}
            className="inline-block font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Nuestra historia
          </motion.span>
          <motion.h2
            variants={fadeUp}
            style={{ color: colors.espresso }}
            className="font-display text-4xl md:text-6xl max-w-xl leading-tight"
          >
            Un rincón hecho con amor
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="relative"
          >
            <div style={{ borderColor: colors.sand }} className="absolute -top-4 -left-4 w-full h-full border-2 rounded-2xl" />
            <div style={{ backgroundColor: colors.sand }} className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img src="/images/about.jpg" alt="Interior de Menta & Café" className="w-full h-full object-cover" />
              <div style={{ backgroundColor: "#F5F0E8F0" }} className="absolute bottom-6 right-6 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                <p style={{ color: colors.sage }} className="font-display text-3xl font-bold">5+</p>
                <p style={{ color: "#2C241699" }} className="font-body text-xs mt-1">Años sirviendo</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#4A7C591A" }} className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeUp} style={{ color: "#2C2416CC" }} className="font-body text-lg leading-relaxed">
              Menta & Café nació de una idea simple: crear un espacio donde cada visita se sienta como volver a casa. Desde 2019 hemos cultivado una comunidad de personas que valoran los momentos tranquilos, el café bien hecho y los ingredientes de verdad.
            </motion.p>
            <motion.p variants={fadeUp} style={{ color: "#2C241699" }} className="font-body text-base leading-relaxed">
              Trabajamos con productores locales de la Región Metropolitana y la Quinta Región para traerte lo mejor de cada temporada. Nuestro café viene de granos de especialidad tostados artesanalmente en Santiago.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-4">
              {[
                { icon: "🌿", label: "Ingredientes de temporada y origen local" },
                { icon: "☕", label: "Café de especialidad, tostado en Santiago" },
                { icon: "🤝", label: "Productores locales con trato justo" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span style={{ color: "#2C2416B3" }} className="font-body text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.a variants={fadeUp} href="#menu" style={{ color: colors.sage }} className="self-start mt-4 inline-flex items-center gap-2 font-body text-sm font-medium group">
              Ver nuestro menú
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
          style={{ borderTop: `1px solid ${colors.sand}` }}
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-center text-center gap-2">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p style={{ color: "#2C241680" }} className="font-body text-sm tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
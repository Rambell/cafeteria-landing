"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, scaleIn } from "@/components/animations/variants";

const colors = {
  cream: "#F5F0E8",
  sand: "#E8E0D0",
  sage: "#4A7C59",
  forest: "#2D5A27",
  coffee: "#8B6914",
  espresso: "#2C2416",
};

const FILTERS = [
  { key: "todos", label: "Todos" },
  { key: "platos", label: "Platos" },
  { key: "ambiente", label: "Ambiente" },
  { key: "barista", label: "Barista" },
];

const IMAGES = [
  { id: "g1", src: "/images/tostadas.jpg",  alt: "Tostadas de palta con huevo pochado", category: "platos",   span: "row-span-2" },
  { id: "g2", src: "/images/ambiente1.jpg", alt: "Interior cálido de Menta & Café",      category: "ambiente", span: "" },
  { id: "g3", src: "/images/flatwhite.jpg", alt: "Flat white con latte art",              category: "barista",  span: "" },
  { id: "g4", src: "/images/bowl.jpg",      alt: "Bowl de açaí con granola",              category: "platos",   span: "" },
  { id: "g5", src: "/images/ambiente2.jpg", alt: "Mesa junto a la ventana",               category: "ambiente", span: "row-span-2" },
  { id: "g6", src: "/images/barista.jpg",   alt: "Barista preparando espresso",           category: "barista",  span: "" },
];

function GalleryCard({ image }: { image: typeof IMAGES[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
      style={{ backgroundColor: colors.sand, minHeight: "220px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
      />

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-end p-5"
            style={{ background: `linear-gradient(to top, ${colors.espresso}CC 0%, transparent 60%)` }}
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="font-body text-sm text-white leading-snug"
            >
              {image.alt}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? IMAGES
    : IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section
      id="galeria"
      style={{ backgroundColor: colors.cream }}
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
            variants={fadeUp}
            style={{ color: colors.coffee }}
            className="inline-block font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Momentos
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.h2
              variants={fadeUp}
              style={{ color: colors.espresso }}
              className="font-display text-4xl md:text-6xl leading-tight"
            >
              Nuestra galería
            </motion.h2>

            {/* Filtros */}
            <motion.div variants={fadeUp} className="flex gap-2 flex-wrap">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    style={{
                      backgroundColor: isActive ? colors.espresso : "transparent",
                      color: isActive ? colors.cream : colors.espresso,
                      borderColor: isActive ? colors.espresso : colors.sand,
                    }}
                    className="px-5 py-2 rounded-full border font-body text-sm transition-all duration-300"
                  >
                    {f.label}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Grid masonry */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]"
          >
            {filtered.map((image) => (
              <GalleryCard key={image.id} image={image} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Nota fotos */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ color: "#2C241650" }}
          className="font-body text-xs text-center mt-8 tracking-wide"
        >
          Síguenos en Instagram {" "}
          <a
            href="https://instagram.com/mentaycafe"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.sage }}
            className="hover:underline"
          >
            @mentaycafe
          </a>
          {" "} para más momentos
        </motion.p>

      </div>
    </section>
  );
}
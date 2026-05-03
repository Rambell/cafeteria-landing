"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS } from "@/lib/constants";
import { MenuItem } from "@/types";
import { staggerContainer, fadeUp, scaleIn } from "@/components/animations/variants";

const colors = {
  cream: "#F5F0E8",
  sand: "#E8E0D0",
  sage: "#4A7C59",
  forest: "#2D5A27",
  coffee: "#8B6914",
  espresso: "#2C2416",
};

const TABS = [
  { key: "desayuno", label: "Desayuno", emoji: "🍳" },
  { key: "almuerzo", label: "Almuerzo", emoji: "🥗" },
  { key: "cafe", label: "Café", emoji: "☕" },
  { key: "postres", label: "Postres", emoji: "🍰" },
];

const TAG_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  popular: { bg: "#8B691420", color: colors.coffee, label: "Popular" },
  nuevo:   { bg: "#4A7C5920", color: colors.sage,   label: "Nuevo"   },
  vegano:  { bg: "#2D5A2720", color: colors.forest, label: "Vegano"  },
};

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ backgroundColor: "#fff", borderColor: colors.sand }}
      className="relative rounded-2xl border p-6 flex flex-col gap-3 cursor-default shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Tag */}
      {item.tag && (
        <span
          style={{ backgroundColor: TAG_STYLES[item.tag].bg, color: TAG_STYLES[item.tag].color }}
          className="absolute top-4 right-4 text-xs font-body font-medium px-3 py-1 rounded-full"
        >
          {TAG_STYLES[item.tag].label}
        </span>
      )}

      <div className="flex flex-col gap-1">
        <h3 style={{ color: colors.espresso }} className="font-display text-lg font-semibold pr-16 leading-tight">
          {item.name}
        </h3>
        <p style={{ color: "#2C241699" }} className="font-body text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-auto pt-3" style={{ borderTop: `1px solid ${colors.sand}` }}>
        <span style={{ color: colors.sage }} className="font-display text-xl font-bold">
          ${item.price.toLocaleString("es-CL")}
        </span>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuItem["category"]>("desayuno");

  const filtered = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section
      id="menu"
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
            variants={fadeUp}
            style={{ color: colors.coffee }}
            className="inline-block font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Lo que ofrecemos
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={fadeUp}
              style={{ color: colors.espresso }}
              className="font-display text-4xl md:text-6xl leading-tight"
            >
              Nuestra carta
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{ color: "#2C241699" }}
              className="font-body text-base max-w-xs leading-relaxed"
            >
              Todo preparado al momento con ingredientes frescos de temporada.
            </motion.p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as MenuItem["category"])}
                style={{
                  backgroundColor: isActive ? colors.sage : colors.cream,
                  color: isActive ? colors.cream : colors.espresso,
                  borderColor: isActive ? colors.sage : colors.sand,
                }}
                className="relative flex items-center gap-2 px-6 py-3 rounded-full border font-body text-sm font-medium whitespace-nowrap transition-all duration-300 hover:border-sage"
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: colors.sage }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#reserva"
            style={{ backgroundColor: colors.sage, color: colors.cream }}
            className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity duration-300"
          >
            Reservar una mesa
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
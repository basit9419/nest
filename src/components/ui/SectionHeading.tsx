"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      className={`mb-12 sm:mb-14 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <span
        className={`text-xs font-bold uppercase tracking-widest mb-3 block ${
          light ? "text-brand-accent" : "text-brand-text"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-brand-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            light ? "text-white/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`w-14 h-1 rounded-full mt-4 bg-brand-accent ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}

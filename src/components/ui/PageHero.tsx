"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative text-white py-16 sm:py-24 overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 bg-brand-accent/20" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{title}</h1>
          <p className="text-white/80 mt-4 text-base sm:text-lg font-light max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs font-semibold uppercase tracking-wider text-brand-accent">
            <Link href="/" className="hover:text-white transition-colors text-white/70">
              Home
            </Link>
            <ChevronRight size={12} className="text-white/50" />
            <span className="text-white">{breadcrumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

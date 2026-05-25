"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

function ExperienceIcon() {
  return (
    <svg
      viewBox="0 0 64 72"
      className="w-12 h-14 sm:w-14 sm:h-16 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 8 L32 2 L52 8 L52 28 C52 42 42 52 32 58 C22 52 12 42 12 28 Z"
        stroke="#7ecec4"
        strokeWidth="2.5"
        fill="#e6f7f5"
      />
      <path
        d="M22 30 L29 37 L44 22"
        stroke="#119c8d"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 4 L32 8 L40 4"
        stroke="#7ecec4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="6" r="2" fill="#7ecec4" />
      <circle cx="32" cy="4" r="2.5" fill="#119c8d" />
      <circle cx="38" cy="6" r="2" fill="#7ecec4" />
      <path
        d="M26 58 L32 68 L38 58"
        stroke="#7ecec4"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

interface ExperienceBadgeProps {
  years?: number;
  className?: string;
}

export default function ExperienceBadge({ years = 17, className = "" }: ExperienceBadgeProps) {
  return (
    <motion.div
      className={`absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 z-20 ${className}`}
      initial={{ opacity: 0, scale: 0.85, x: 24 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl sm:rounded-3xl pl-3 pr-5 sm:pl-4 sm:pr-7 py-3 sm:py-4 shadow-[0_12px_40px_rgba(23,43,84,0.12)] border border-slate-100/80"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <ExperienceIcon />
        </motion.div>

        <div className="text-left min-w-[100px]">
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-primary leading-none tracking-tight">
            <AnimatedCounter target={years} suffix="+" duration={2000} />
          </p>
          <p className="text-xs sm:text-sm font-medium text-brand-primary/90 mt-1 leading-tight">
            Years of Experience
          </p>
        </div>
      </motion.div>

      {/* Subtle pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-brand-accent/30 pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
        aria-hidden
      />
    </motion.div>
  );
}

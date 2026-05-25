"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export interface Testimonial {
  text: string;
  author: string;
  tag: string;
}

interface TestimonialsCarouselProps {
  items: Testimonial[];
  autoPlayMs?: number;
}

function getTripleIndices(active: number, length: number): [number, number, number] {
  const prev = (active - 1 + length) % length;
  const next = (active + 1) % length;
  return [prev, active, next];
}

function TestimonialCard({
  item,
  isCenter,
}: {
  item: Testimonial;
  isCenter: boolean;
}) {
  return (
    <div
      className={`relative bg-brand-mint rounded-2xl border text-center h-full ${
        isCenter
          ? "p-8 sm:p-10 border-brand-accent/30 shadow-xl shadow-brand-accent/10"
          : "p-5 sm:p-6 border-brand-accent/15 shadow-md"
      }`}
    >
      <Quote
        className="text-brand-accent/20 absolute top-4 left-4"
        size={isCenter ? 48 : 28}
      />
      <div className="flex justify-center gap-1 mb-3 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={isCenter ? 18 : 13}
            className="text-brand-gold fill-brand-gold"
          />
        ))}
      </div>
      <p
        className={`text-slate-700 italic leading-relaxed mb-4 relative z-10 ${
          isCenter ? "text-sm sm:text-base" : "text-xs line-clamp-4"
        }`}
      >
        &ldquo;{item.text}&rdquo;
      </p>
      <h4 className={`font-bold text-brand-primary relative z-10 ${isCenter ? "text-base" : "text-sm"}`}>
        {item.author}
      </h4>
      <span
        className={`font-semibold text-brand-text uppercase tracking-wider block mt-1 relative z-10 ${
          isCenter ? "text-xs" : "text-[10px]"
        }`}
      >
        {item.tag}
      </span>
    </div>
  );
}

const slotMotion = {
  left: { width: "28%", scale: 0.86, opacity: 0.5, y: 12, zIndex: 1 },
  center: { width: "44%", scale: 1, opacity: 1, y: 0, zIndex: 10 },
  right: { width: "28%", scale: 0.86, opacity: 0.5, y: 12, zIndex: 1 },
} as const;

export default function TestimonialsCarousel({
  items,
  autoPlayMs = 5500,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + items.length) % items.length);
    },
    [items.length]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
  const prev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(next, autoPlayMs);
    return () => clearInterval(timer);
  }, [next, autoPlayMs, items.length]);

  if (items.length === 0) return null;

  const [leftIdx, centerIdx, rightIdx] = getTripleIndices(activeIndex, items.length);
  const slots: { index: number; position: keyof typeof slotMotion }[] = [
    { index: leftIdx, position: "left" },
    { index: centerIdx, position: "center" },
    { index: rightIdx, position: "right" },
  ];

  return (
    <div className="relative w-full">
      {/* Desktop — 3 visible, center card enlarged */}
      <div className="hidden md:flex items-center justify-center gap-2 lg:gap-3 max-w-6xl mx-auto px-14 min-h-[400px] relative">
        {slots.map(({ index, position }) => (
          <motion.div
            key={position}
            className="shrink-0 cursor-pointer"
            animate={slotMotion[position]}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={() => {
              if (position === "left") prev();
              if (position === "right") next();
            }}
            style={{ zIndex: slotMotion[position].zIndex }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${position}-${index}-${activeIndex}`}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.35 }}
              >
                <TestimonialCard
                  item={items[index]}
                  isCenter={position === "center"}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}

        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white text-brand-accent shadow-lg border border-brand-accent/20 hover:bg-brand-mint transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white text-brand-accent shadow-lg border border-brand-accent/20 hover:bg-brand-mint transition-colors"
          aria-label="Next review"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Mobile — single card */}
      <div className="md:hidden relative px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 36, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -36, scale: 0.96 }}
            transition={{ duration: 0.4 }}
          >
            <TestimonialCard item={items[activeIndex]} isCenter />
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            type="button"
            onClick={prev}
            className="p-2 rounded-full bg-brand-mint text-brand-accent border border-brand-accent/20"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-7 bg-brand-accent" : "w-2 bg-slate-300"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={next}
            className="p-2 rounded-full bg-brand-mint text-brand-accent border border-brand-accent/20"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-8 bg-brand-accent" : "w-2 bg-slate-300 hover:bg-brand-accent/50"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

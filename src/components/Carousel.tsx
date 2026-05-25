"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  autoPlayMs?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showProgress?: boolean;
  className?: string;
  itemClassName?: string;
  animation?: "fade" | "slide";
}

export default function Carousel<T>({
  items,
  renderItem,
  autoPlayMs = 0,
  showArrows = true,
  showDots = true,
  showProgress = false,
  className = "",
  itemClassName = "",
  animation = "fade",
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + items.length) % items.length);
      setProgressKey((k) => k + 1);
    },
    [items.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!autoPlayMs || items.length <= 1) return;
    const timer = setInterval(next, autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, next, items.length]);

  if (items.length === 0) return null;

  const slideVariants = {
    enter: { opacity: 0, x: animation === "slide" ? 40 : 0 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: animation === "slide" ? -40 : 0 },
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`relative overflow-hidden ${itemClassName}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {renderItem(items[index], index)}
          </motion.div>
        </AnimatePresence>
      </div>

      {showProgress && autoPlayMs > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <div
            key={progressKey}
            className="h-full bg-brand-accent hero-progress"
            style={{ animationDuration: `${autoPlayMs}ms` }}
          />
        </div>
      )}

      {showArrows && items.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-colors z-10 border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-colors z-10 border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-6 z-10">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "w-8 bg-brand-accent"
                  : "w-2.5 bg-slate-300 hover:bg-brand-accent/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

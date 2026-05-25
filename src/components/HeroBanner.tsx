"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypewriterText from "@/components/TypewriterText";

const SLIDE_DURATION_MS = 9000;

const heroSlides = [
  {
    src: "/images/healing-hands-1.jpg",
    alt: "Therapy session at Healing Hands clinic",
    badge: "Pediatric & Neuro Rehabilitation",
    title: "Treating The Root Cause,",
    titleHighlight: "Not Just The Symptoms",
    description:
      "Experience effective pediatric neuro physiotherapy tailored for real progress—helping your child recover faster and stronger.",
  },
  {
    src: "/images/healing-hands-2.jpg",
    alt: "Pediatric physiotherapy care",
    badge: "Lajpat Nagar, New Delhi",
    title: "Advanced Neuro Physiotherapy",
    titleHighlight: "For Every Child",
    description:
      "Personalized treatment plans, cutting-edge techniques, and compassionate care so every child reaches their fullest potential.",
  },
  {
    src: "/images/healing-hands-delhi-5.jpg",
    alt: "Healing Hands facility Delhi",
    badge: "17+ Years of Experience",
    title: "Evidence-Based Care",
    titleHighlight: "That Moves Lives Forward",
    description:
      "From DMI and NDT to speech therapy and sensory integration—we deliver specialist rehab you can trust.",
  },
  {
    src: "/images/photo.jpg",
    alt: "Children's rehabilitation centre",
    badge: "Healing Hands Clinic",
    title: "A Warm Space Built For",
    titleHighlight: "Play And Progress",
    description:
      "Our clinic blends clinical rigor with interactive play—unlocking mobility, confidence, and joy for children and families.",
  },
  {
    src: "/images/gallery/healing-hands-3.jpg",
    alt: "Clinic therapy session",
    badge: "Parent-Trusted Care",
    title: "Led By Dr. Mudasir Amin",
    titleHighlight: "Pediatric Specialist",
    description:
      "Cerebral palsy, autism, developmental delay, and motor disorders—expert hands-on therapy with heart and dedication.",
  },
];

const bannerStats = [
  { value: 5, suffix: "+", label: "Expert Therapists" },
  { value: 17, suffix: "+", label: "Years Of Experience" },
  { value: 800, suffix: "+", label: "Happy Patients" },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [showHighlight, setShowHighlight] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const slide = heroSlides[index];

  const goTo = useCallback((nextIndex: number) => {
    setShowHighlight(false);
    setShowDescription(false);
    setIndex((nextIndex + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => next(), SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [next]);

  // Reset typing sequence when slide changes
  useEffect(() => {
    setShowHighlight(false);
    setShowDescription(false);
  }, [index]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e6efed] via-white to-[#e6efed]/60 border-b border-brand-accent/15">
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — synced typing copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 min-h-[280px] sm:min-h-[300px] flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`badge-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="inline-block w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 border border-brand-accent/20 mb-4"
              >
                <TypewriterText
                  animationKey={`badge-${index}`}
                  text={slide.badge}
                  speed={28}
                  showCursor={false}
                />
              </motion.span>
            </AnimatePresence>

            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-brand-primary leading-[1.15] mb-4 min-h-[2.6em] sm:min-h-[2.4em]">
              <TypewriterText
                animationKey={`title-${index}`}
                text={slide.title}
                speed={38}
                onComplete={() => setShowHighlight(true)}
                className="text-brand-primary"
              />
              {showHighlight && (
                <>
                  {" "}
                  <span className="text-brand-accent">
                    <TypewriterText
                      animationKey={`highlight-${index}`}
                      text={slide.titleHighlight}
                      speed={38}
                      onComplete={() => setShowDescription(true)}
                    />
                  </span>
                </>
              )}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-lg min-h-[4.5rem] sm:min-h-[3.5rem]">
              {showDescription ? (
                <TypewriterText
                  animationKey={`desc-${index}`}
                  text={slide.description}
                  speed={22}
                />
              ) : (
                <span className="invisible" aria-hidden>
                  {slide.description}
                </span>
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="btn-shimmer btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold shadow-md shadow-brand-accent/25 hover:-translate-y-0.5 transition-all"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/treatment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-brand-primary border-2 border-brand-accent hover:bg-brand-accent/5 transition-all"
              >
                Our Treatments
              </Link>
            </div>

            {/* Stats — left column, below CTAs */}
            <motion.div
              className="mt-6 pt-5 border-t border-brand-accent/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
                {bannerStats.map(({ value, suffix, label }, i) => (
                  <motion.div
                    key={label}
                    className="text-center sm:text-left"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.12, duration: 0.45, ease: "easeOut" }}
                  >
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-accent leading-none">
                      <AnimatedCounter
                        target={value}
                        suffix={suffix}
                        duration={2200}
                      />
                    </p>
                    <p className="mt-1 text-[10px] sm:text-xs font-semibold text-brand-primary leading-snug">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — image carousel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-3 bg-brand-accent/15 rounded-3xl rotate-2 hidden sm:block" />
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[5/4] max-h-[320px] sm:max-h-[380px] lg:max-h-[420px] mx-auto w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 text-brand-accent shadow-md hover:bg-white z-10 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 text-brand-accent shadow-md hover:bg-white z-10 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === i ? "w-7 bg-brand-accent" : "w-2 bg-white/80 hover:bg-white"
                    }`}
                    aria-label={`Show slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 z-10">
                <motion.div
                  key={index}
                  className="h-full bg-brand-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION_MS / 1000, ease: "linear" }}
                />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Brain,
  Heart,
  Stethoscope,
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Zap,
  Building2,
} from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import ExperienceBadge from "@/components/ExperienceBadge";

const rapidCareFeatures = [
  {
    icon: UserCheck,
    title: "Expert Therapists",
    description: "Led by Dr. Mudasir Amin and a dedicated team of licensed pediatric specialists.",
  },
  {
    icon: Zap,
    title: "Advanced Techniques",
    description: "DMI, NDT, Brain Gym, and sensory integration for faster recovery and lasting results.",
  },
  {
    icon: Building2,
    title: "Modern Facility",
    description: "A warm, stimulating clinic environment built for play, progress, and parent peace of mind.",
  },
];

const highlights = [
  {
    icon: Activity,
    title: "Physiotherapy",
    description:
      "Bone, joint, and muscle care including arthritis, back pain, neck pain, and sports injuries.",
  },
  {
    icon: Brain,
    title: "Brain Gym",
    description:
      "Movement-based exercises to enhance brain function, coordination, and learning.",
  },
  {
    icon: Heart,
    title: "Sensory Integration",
    description:
      "Helping children process sensory input for calmer, more confident daily function.",
  },
  {
    icon: Stethoscope,
    title: "NDT & DMI Therapy",
    description:
      "Neurodevelopmental approaches for cerebral palsy, developmental delay, and motor disorders.",
  },
];

const treatmentPreview = [
  { title: "DMI Therapy", image: "/images/healing-hands-delhi-15.jpg", href: "/treatment" },
  { title: "Neurodevelopmental Therapy", image: "/images/healing-hands-delhi-14.jpg", href: "/treatment" },
  { title: "Speech & Language Therapy", image: "/images/healing-hands-delhi-8.jpg", href: "/treatment" },
  { title: "Orthopedic Physiotherapy", image: "/images/healing-hands-delhi-1.jpg", href: "/treatment" },
  { title: "Sensory Integration", image: "/images/healing-hands-delhi-10.jpg", href: "/treatment" },
];

const conditionsPreview = [
  { title: "Cerebral Palsy", image: "/images/healing-hands-delhi-7.jpg", href: "/conditions" },
  { title: "Autism & ADHD", image: "/images/healing-hands-delhi-12.jpg", href: "/conditions" },
  { title: "Developmental Delay", image: "/images/healing-hands-delhi-11.jpg", href: "/conditions" },
  { title: "Toe Walking", image: "/images/healing-hands-delhi-9.jpg", href: "/conditions" },
];

const testimonials = [
  {
    text: "After coming here, drastic changes happened with Dr. Mudasir Amin. Now my son has achieved independent standing, walking, and proper hand function within only 6 months of therapies.",
    author: "Parent of 5-year-old child",
    tag: "Global Developmental Delay Recovery",
  },
  {
    text: "Dr. Amin is very kind, helpful, and extremely patient. In a short span, I noticed positive responses. Shaina on her staff puts her heart to work with children.",
    author: "Parent of Motor Delay Patient",
    tag: "Motor Development Success",
  },
  {
    text: "We did intensive therapy 6 days a week, and in 2 months my child has made very good progress. Dr. Mudasir really takes parent concerns into account.",
    author: "NRI Parent (Canada)",
    tag: "ADHD & Speech Therapy Progress",
  },
];

const galleryImages = [
  "/images/gallery/healing-hands-1.jpg",
  "/images/gallery/healing-hands-2.jpg",
  "/images/gallery/healing-hands-3.jpg",
  "/images/gallery/healing-hands-4.jpg",
  "/images/gallery/healing-hands-5.jpg",
  "/images/gallery/healing-hands-6.jpg",
  "/images/gallery/healing-hands-7.jpg",
];

export default function HomePage() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const servicesScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = servicesScrollRef.current;
    if (!el) return;
    let frame: number;
    let pos = 0;
    const step = () => {
      pos += 0.35;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIndex((i) => (i + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <HeroBanner />

      {/* 3 feature cards — Rapid Care */}
      <section className="py-14 bg-brand-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {rapidCareFeatures.map((item, idx) => (
              <motion.div
                key={item.title}
                className="feature-card rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About clinic — Rapid Care about block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/photo.jpg"
                  alt="Healing Hands Clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
              </div>
              <ExperienceBadge years={17} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-text font-bold text-sm uppercase tracking-widest">
                Healing Hands
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mt-2 mb-5 leading-tight">
                Leading Pediatric Neuro Physiotherapy Centre in New Delhi
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Welcome to Healing Hands Neuro Physiotherapy Centre, where we offer advanced
                pediatric rehabilitation services. Whether your child is recovering from a
                neurological condition or managing developmental delays, our expert team supports
                their journey to wellness.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Our mission is to provide exceptional physiotherapy care that improves quality of
                life. We value integrity, compassion, and excellence—with personalized treatment
                plans and evidence-based techniques.
              </p>
              <Link
                href="/about"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold"
              >
                Know More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions — Rapid Care conditions grid */}
      <section className="py-20 bg-brand-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Conditions"
            title="We Provide Care For These Conditions"
            description="Specialized pediatric and neuro rehabilitation for a wide range of developmental and neurological conditions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {conditionsPreview.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-white hover:border-brand-accent/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-accent/30 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold text-brand-text mt-2 inline-flex items-center gap-1">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/conditions"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-3 rounded-md text-sm font-bold"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* Quality treatment stats — Rapid Care */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Quality Treatment"
                title="We Proudly Give Quality Treatment"
                description="We understand that developmental challenges can happen unexpectedly. Our pediatric physiotherapy services are designed to provide prompt, effective, and compassionate care."
                align="left"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: 17, suffix: "+", label: "Skilled Years" },
                { value: 100, suffix: "%", label: "Success Rate" },
                { value: 5, suffix: "★", label: "Rated Clinic" },
              ].map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="text-center p-6 rounded-xl bg-brand-mint border border-brand-accent/20"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-brand-accent">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="text-xs font-semibold text-brand-primary mt-2 uppercase tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services carousel */}
      <section className="py-20 bg-brand-mint overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeading
            eyebrow="Services"
            title="Our Specialized Treatment Options"
            description="Evidence-based therapies tailored to your child's unique developmental needs."
          />
          <Link
            href="/treatment"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-primary transition-colors"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
        <div ref={servicesScrollRef} className="flex gap-6 overflow-x-hidden px-4 pb-4">
          {[...treatmentPreview, ...treatmentPreview].map((item, idx) => (
            <Link
              key={`${item.title}-${idx}`}
              href={item.href}
              className="relative shrink-0 w-[280px] rounded-xl overflow-hidden group bg-white shadow-md border border-white"
            >
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="280px" />
              </div>
              <div className="p-5 border-t-4 border-brand-accent">
                <h3 className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-brand-text mt-2 inline-block">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Therapeutic highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Therapeutic Core" title="Empowering Development Through Specialized Care" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                className="feature-card rounded-xl p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <item.icon className="w-8 h-8 text-brand-accent mb-4" />
                <h3 className="font-bold text-brand-primary mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor — team section */}
      <section className="py-20 bg-brand-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Backbone" title="Dedicated & Experienced Therapist" />
          <div className="grid lg:grid-cols-12 gap-10 items-center max-w-4xl mx-auto">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image src="/images/dr.mudasir-amin.jpg" alt="Dr. Mudasir Amin" fill className="object-cover" sizes="400px" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary">
                <span className="text-brand-accent">Dr. Mudasir Amin</span>
              </h3>
              <p className="text-sm font-semibold text-brand-text">Senior Physiotherapist · Clinic Director</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Specialist in Cerebral Palsy, Autism, Hydrocephalus, and Facial Palsy with 17+ years of
                pediatric neuro rehabilitation experience across early intervention and home-based care.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold">
                Consult Dr. Amin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Review" title="What Our Clients Say About Us" />
          <TestimonialsCarousel items={testimonials} autoPlayMs={5500} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-brand-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Facility" title="Clinic Gallery & Therapy Sessions" />
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] border-4 border-white">
            <AnimatePresence mode="wait">
              <motion.div key={galleryIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                <Image src={galleryImages[galleryIndex]} alt="" fill className="object-cover" sizes="100vw" />
              </motion.div>
            </AnimatePresence>
            <button type="button" onClick={() => setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-brand-accent shadow-lg z-10" aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <button type="button" onClick={() => setGalleryIndex((i) => (i + 1) % galleryImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-brand-accent shadow-lg z-10" aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* Emergency marquee — Rapid Care bottom ticker */}
      <section className="py-3 bg-brand-accent text-white overflow-hidden">
        <InfiniteMarquee speed="normal">
          {[
            "Call: +91-9810416861",
            "Book Appointment via WhatsApp",
            "Mon–Sat: 9 AM – 7 PM",
            "199, Lajpat Nagar-1, New Delhi",
          ].map((t) => (
            <span key={t} className="mx-10 text-sm font-semibold whitespace-nowrap">
              {t}
            </span>
          ))}
        </InfiniteMarquee>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-white/80 mb-8 text-sm">Our team is here to help your child reach their fullest potential.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:9810416861" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-bold">
              <Phone size={18} /> +91-9810416861
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-bold bg-white text-brand-primary hover:bg-brand-light transition-colors">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

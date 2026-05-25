"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, Filter } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

interface TreatmentItem {
  id: string;
  title: string;
  image: string;
  category: "pediatric" | "adult" | "specialized";
  categoryLabel: string;
  description: string;
}

const treatments: TreatmentItem[] = [
  {
    id: "dmi",
    title: "Dynamic Movement Intervention (DMI) Therapy",
    image: "/images/healing-hands-delhi-15.jpg",
    category: "pediatric",
    categoryLabel: "Pediatric Rehab",
    description: "At our pediatric rehab center in Lajpat Nagar, we offer Dynamic Movement Intervention (DMI) - a cutting-edge therapy for children with motor and developmental delays. DMI is a hands-on, evidence-informed approach that uses specific exercises to stimulate the child's nervous system and promote the development of postural control and balance. Led by Dr. Mudasir Amin with a play-based, child-friendly approach in a safe, motivating environment.",
  },
  {
    id: "mtf",
    title: "Muscle Tone, Segmental Control, and Alignment (MTF)",
    image: "/images/healing-hands-delhi-13.jpg",
    category: "pediatric",
    categoryLabel: "Pediatric Rehab",
    description: "Focusing on optimizing Muscle Tone and Function (MTF) to enhance segmental control and achieve proper postural alignment in children with neuromotor challenges. We carefully assess muscle tone (hypotonia, hypertonia, spasticity), segmental control (stabilizing the head, trunk, and pelvis independently), and neutral body alignments to support milestones like crawling and walking.",
  },
  {
    id: "ndt",
    title: "Neurodevelopmental Therapy (NDT)",
    image: "/images/healing-hands-delhi-14.jpg",
    category: "pediatric",
    categoryLabel: "Pediatric Rehab",
    description: "A hands-on, evidence-based approach designed to help children with neurological and developmental conditions such as Cerebral Palsy, Developmental Delays, Down Syndrome, and other motor disorders. NDT focuses on improving posture, movement, and functional abilities by addressing abnormal muscle tone, movement patterns, and coordination.",
  },
  {
    id: "brain-gym",
    title: "Brain Gym exercises",
    image: "/images/healing-hands-delhi-16.jpg",
    category: "pediatric",
    categoryLabel: "Pediatric Rehab",
    description: "A series of simple, movement-based exercises designed to enhance brain function, coordination, and learning. Originally developed as an innovative, child-friendly treatment by Dr. Mudasir Amin, it is frequently integrated with clinical physiotherapy to support children's focus, memory, balance, and overall cognitive development.",
  },
  {
    id: "orthopedic",
    title: "Orthopedic Physiotherapy",
    image: "/images/healing-hands-delhi-1.jpg",
    category: "adult",
    categoryLabel: "Adult & Neuro",
    description: "Our orthopedic physiotherapy focuses on treating musculoskeletal injuries and conditions. We address fractures, sprains, joint replacements, and chronic pain with personalized exercises, manual therapy, and advanced modalities to enhance recovery, restore range of motion, and improve overall mobility and quality of life.",
  },
  {
    id: "neurological",
    title: "Neurological Physiotherapy",
    image: "/images/healing-hands-delhi-2.jpg",
    category: "adult",
    categoryLabel: "Adult & Neuro",
    description: "Specializing in neurological conditions, our therapy supports recovery from strokes, Parkinson's disease, and multiple sclerosis. We use targeted exercises, functional training, and neuroplasticity techniques to improve motor skills, coordination, and independence, helping patients regain optimal function and manage neurological challenges.",
  },
  {
    id: "sports",
    title: "Sports Physiotherapy",
    image: "/images/healing-hands-delhi-3.jpg",
    category: "adult",
    categoryLabel: "Adult & Neuro",
    description: "Our sports physiotherapy services are designed for athletes and active individuals of all levels. We offer injury prevention, targeted rehabilitation, and athletic performance enhancement through specialized techniques, including sports-specific exercises, manual therapy, and post-injury assessment, ensuring a swift, safe recovery.",
  },
  {
    id: "speech",
    title: "Speech & Language Therapy",
    image: "/images/healing-hands-delhi-8.jpg",
    category: "specialized",
    categoryLabel: "Specialized Therapy",
    description: "Speech therapy helps children and adults improve communication and language skills. No matter what is affecting your ability to speak or communicate effectively, speech therapy can significantly improve your quality of life. Highly recommended if you or your child has trouble talking, hearing, or using language correctly.",
  },
  {
    id: "sensory",
    title: "Sensory Integration Therapy",
    image: "/images/healing-hands-delhi-4.jpg",
    category: "specialized",
    categoryLabel: "Specialized Therapy",
    description: "Sensory integration, or sensory processing, refers to the processing, integration, and organization of sensory information from the body and the environment. Simply put, this therapeutic practice helps children experience, interpret, and react appropriately to information coming through their visual, auditory, and motor senses.",
  },
];

type CategoryFilter = "all" | "pediatric" | "adult" | "specialized";

export default function TreatmentPage() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredTreatments = treatments.filter((t) => {
    if (filter === "all") return true;
    return t.category === filter;
  });

  return (
    <div className="relative">
      <PageHero
        title="Our Treatments"
        subtitle="Explore our range of pediatric rehab protocols and advanced physiotherapy programs."
        breadcrumb="Treatment"
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialized Care"
            title="Evidence-Based Treatment Programs"
            description="Filter by category to find the right therapy for your needs."
          />

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-2">
              <Filter size={14} /> Filter:
            </span>
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                filter === "all"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-brand-light hover:border-brand-accent/30"
              }`}
            >
              Show All
            </button>
            <button
              onClick={() => setFilter("pediatric")}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                filter === "pediatric"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-brand-light hover:border-brand-accent/30"
              }`}
            >
              Pediatric Rehab
            </button>
            <button
              onClick={() => setFilter("adult")}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                filter === "adult"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-brand-light hover:border-brand-accent/30"
              }`}
            >
              Adult & Neuro
            </button>
            <button
              onClick={() => setFilter("specialized")}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                filter === "specialized"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-brand-light hover:border-brand-accent/30"
              }`}
            >
              Specialized Therapy
            </button>
          </div>

          {/* Grid Container */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTreatments.map((t) => (
                <motion.div
                  layout
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-accent text-white shadow-sm z-10">
                      {t.categoryLabel}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-accent transition-colors mb-4 line-clamp-2">
                      {t.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow text-justify line-clamp-6">
                      {t.description}
                    </p>
                    
                    <div className="flex gap-3 pt-2">
                      <a
                        href={`https://wa.me/919810416861?text=Hi, I am interested in ${encodeURIComponent(t.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-brand-accent-hover bg-brand-light hover:bg-brand-light transition-colors"
                      >
                        <MessageCircle size={14} />
                        WhatsApp Inquiry
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover transition-colors"
                      >
                        <Calendar size={14} className="mr-1.5" />
                        Book
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

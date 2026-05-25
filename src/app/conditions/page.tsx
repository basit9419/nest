"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Search, HelpCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

interface ConditionItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

const conditions: ConditionItem[] = [
  {
    id: "cerebral-palsy",
    title: "Cerebral Palsy",
    image: "/images/healing-hands-delhi-7.jpg",
    description:
      "Cerebral palsy is usually caused by problems affecting brain development during fetal growth or birth. Our therapies target muscular alignment and progressive motor neural feedback.",
  },
  {
    id: "autism-adhd",
    title: "Autism & ADHD",
    image: "/images/healing-hands-delhi-12.jpg",
    description:
      "ASD and ADHD are neurodevelopmental conditions that frequently co-occur. Targeted physical and sensory training assists in hyperactivity reduction and functional gains.",
  },
  {
    id: "hydrocephalus",
    title: "Hydrocephalus",
    image: "/images/healing-hands-delhi-11.jpg",
    description:
      "Excessive CSF pressure can interfere with motor pathways. Therapy helps children build balance, compensatory motor skills, and head control.",
  },
  {
    id: "brachial-plexus",
    title: "Brachial Plexus Injury",
    image: "/images/healing-hands-delhi-6.jpg",
    description:
      "Our physiotherapy focuses on muscle activation, sensory re-education, and preventing contractures after brachial plexus injuries.",
  },
  {
    id: "hemiplegia",
    title: "Hemiplegia",
    image: "/images/healing-hands-delhi-10.jpg",
    description:
      "Physiotherapy plays a critical role in unlocking neuroplasticity, building bilateral motor skills, and maximizing functional independence.",
  },
  {
    id: "deformity",
    title: "Musculoskeletal Deformity",
    image: "/images/healing-hands-delhi-5.jpg",
    description:
      "Treatment leverages soft tissue mobilization, manual therapy, and corrective exercises to align joints and restore strength.",
  },
  {
    id: "toe-walking",
    title: "Toe Walking",
    image: "/images/healing-hands-delhi-9.jpg",
    description:
      "Persistent toe walking may indicate muscle tightness, sensory processing disorders, cerebral palsy, or autism. Therapy corrects gait habits.",
  },
  {
    id: "down-syndrome",
    title: "Down Syndrome",
    image: "/images/down.jpg",
    description:
      "Physiotherapy focuses on strengthening core stability, enhancing balance, and accelerating motor milestones for children with Down syndrome.",
  },
];

export default function ConditionsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConditions = conditions.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <PageHero
        title="Conditions We Treat"
        subtitle="Understand the clinical, neurological, and physical conditions managed by our medical team."
        breadcrumb="Conditions"
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clinical Focus"
            title="Conditions We Provide Care For"
            description="Search or browse our specialized pediatric and neuro rehabilitation programs."
          />

          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search conditions (e.g. Autism, CP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light0/30 focus:border-brand-light0 shadow-sm transition-all text-sm"
              />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredConditions.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-accent transition-colors mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-5">
                      {item.description}
                    </p>

                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover transition-colors"
                    >
                      <Calendar size={14} />
                      Schedule Assessment
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredConditions.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-3xl border border-slate-100 p-8">
                <HelpCircle size={48} className="text-slate-300 mx-auto mb-4" />
                <p className="text-base font-semibold text-slate-700">
                  No matching conditions found
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Try searching for other terms or contact our clinic for clarification.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Target, Compass, Award, Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceBadge from "@/components/ExperienceBadge";

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading provider of innovative physiotherapy solutions that enhance overall well-being and help children reach their full potential.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Deliver personalized, high-quality physiotherapy care through advanced clinical techniques and a patient-centric, compassionate treatment approach.",
  },
  {
    icon: Compass,
    title: "Core Values",
    description:
      "Commitment to excellence, active empathy, scientific integrity, transparency, and continuous improvement in every aspect of our clinical practice.",
  },
  {
    icon: Award,
    title: "Expert Care",
    description:
      "Led by Dr. Mudasir Amin, our clinic focuses on highly personalized, play-based rehabilitation plans to trigger neurologically progressive motor developments.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <PageHero
        title="About Us"
        subtitle="Learn about our clinical philosophy, mission, and the specialized team behind the clinic."
        breadcrumb="About Us"
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Empowering Kids With{" "}
                <span className="text-gradient">Care, Hope & Dedication</span>
              </h2>
              <div
                className="w-12 h-1 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #119c8d, #129e8d)",
                }}
              />
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Dr. Mudasir Amin founded Healing Hands Physiotherapy and Disability
                  Rehabilitation Centre with a simple, transformative vision: to help every
                  child achieve their highest potential regardless of their clinical constraints.
                </p>
                <p>
                  Our clinic stands out as a premier destination in Lajpat Nagar-1, New Delhi.
                  We offer advanced physio-care, neuro-developmental therapy, sensory integration,
                  and occupational training using evidence-based medical parameters.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/images/photo.jpg"
                  alt="Therapy session at Healing Hands Clinic Delhi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
              </div>
              <ExperienceBadge years={17} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Foundation"
            title="Core Pillars of Our Service"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-brand-accent/30 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-brand-light text-brand-accent rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 border border-brand-accent/20 shadow-lg relative overflow-hidden bg-brand-mint">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Need Professional Guidance?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Consult with Dr. Mudasir Amin to explore clinical therapy paths tailored to your
              child&apos;s physical progress.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary px-6 py-3 rounded-md text-sm font-semibold shadow-md transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                Book Appointment
              </Link>
              <a
                href="tel:9810416861"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-white hover:bg-slate-50 text-brand-accent-hover border border-brand-accent/30 shadow-sm transition-all"
              >
                Call Clinic Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

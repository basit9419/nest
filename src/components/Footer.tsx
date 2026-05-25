"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="text-slate-300 bg-brand-primary border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col space-y-6 lg:col-span-1">
            <div className="relative h-14 w-52 bg-white p-2 rounded-lg shadow-md">
              <Image
                src="/images/logo-1.jpg"
                alt="Healing Hands Footer Logo"
                fill
                style={{ objectFit: "contain", padding: "4px" }}
                sizes="208px"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Healing Hands Physiotherapy and Disability Rehabilitation Centre—specializing in
              neuro physiotherapy, pediatric therapies, and motor delay interventions.
            </p>
            <div className="flex space-x-3">
              {[
                { href: "https://www.facebook.com/mudasir.amin.311", Icon: FacebookIcon, label: "Facebook" },
                { href: "https://www.instagram.com/healing_hands_mudasir.amin.311/", Icon: InstagramIcon, label: "Instagram" },
                { href: "https://www.youtube.com/@DrMudasirAmin786/videos", Icon: YoutubeIcon, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white transition-all border border-white/10"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/treatment", label: "Treatment" },
                { href: "/conditions", label: "Conditions" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-brand-accent text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                "DMI Therapy",
                "Neurodevelopmental Therapy",
                "Brain Gym",
                "Speech Therapy",
                "Sensory Integration",
                "Orthopedic Physiotherapy",
              ].map((s) => (
                <li key={s}>
                  <Link href="/treatment" className="hover:text-brand-accent transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-1">
                Quick Inquiry
              </h3>
              <div className="w-10 h-0.5 rounded-full bg-brand-accent mb-4" />
            </div>
            <ContactForm isCompact />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="text-brand-accent shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-400">
              199, Lajpat Nagar-1, New Delhi – 110024, India
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-brand-accent shrink-0" size={18} />
            <a href="tel:9810416861" className="text-sm font-semibold text-white hover:text-brand-accent">
              +91-9810416861
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-brand-accent shrink-0" size={18} />
            <a
              href="mailto:mudasiraminbhat786@gmail.com"
              className="text-sm text-slate-400 hover:text-brand-accent break-all"
            >
              mudasiraminbhat786@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 bg-brand-primary/80">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Healing Hands Neuro Physiotherapy Centre. All Rights Reserved.</p>
          <p>Lajpat Nagar-1, New Delhi</p>
        </div>
      </div>
    </footer>
  );
}

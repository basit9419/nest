"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Treatment", path: "/treatment" },
  { name: "Conditions", path: "/conditions" },
  { name: "Contact Us", path: "/contact" },
];

const bannerItems = [
  "Book Appointment: +91-9810416861",
  "Healing Hands Neuro Physiotherapy Centre, Lajpat Nagar, New Delhi",
  "17+ Years of Specialist Pediatric Neuro Rehab Experience",
  "mudasiraminbhat786@gmail.com",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top contact bar — Rapid Care style */}
      <div className="hidden lg:block bg-brand-accent text-white text-xs py-2.5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:9810416861" className="flex items-center gap-2 hover:text-white/90 transition-colors font-medium">
              <Phone size={14} />
              +91-9810416861
            </a>
            <a
              href="mailto:mudasiraminbhat786@gmail.com"
              className="flex items-center gap-2 hover:text-white/90 transition-colors"
            >
              <Mail size={14} />
              mudasiraminbhat786@gmail.com
            </a>
            <span className="flex items-center gap-2 text-white/90">
              <MapPin size={14} />
              199, Lajpat Nagar-1, New Delhi – 110024
            </span>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.instagram.com/healing_hands_mudasir.amin.311/", Icon: InstagramIcon, label: "Instagram" },
              { href: "https://www.facebook.com/mudasir.amin.311", Icon: FacebookIcon, label: "Facebook" },
              { href: "https://www.youtube.com/@DrMudasirAmin786/videos", Icon: YoutubeIcon, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-1.5 text-white/80 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee strip on mobile / secondary */}
      <div className="gradient-banner text-white text-xs py-2 overflow-hidden lg:hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...bannerItems, ...bannerItems].map((item, i) => (
            <span key={i} className="inline-block mx-8 font-medium opacity-95">
              {item}
            </span>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2.5"
            : "bg-white py-3"
        }`}
        style={{ borderBottom: "1px solid #e6efed" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative flex items-center">
              <div className="relative h-12 w-48 sm:h-14 sm:w-56">
                <Image
                  src="/images/logo-1.png"
                  alt="Healing Hands Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-brand-accent"
                        : "text-brand-primary hover:text-brand-accent"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:9810416861"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
              >
                <Phone size={16} className="text-brand-accent" />
                Call Now
              </a>
              <a
                href="https://wa.me/919810416861?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <Calendar size={15} />
                Book Appointment
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden rounded-lg hover:bg-brand-light transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-brand-primary" />
              ) : (
                <Menu size={24} className="text-brand-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 pt-[72px] md:hidden bg-brand-primary/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              className="bg-white px-4 py-6 shadow-xl border-t-4 border-brand-accent flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-4 py-3 rounded-lg text-base font-semibold ${
                      isActive
                        ? "bg-brand-light text-brand-accent"
                        : "text-brand-primary hover:bg-brand-light"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <hr className="border-brand-light" />
              <a
                href="https://wa.me/919810416861?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold"
              >
                <Calendar size={18} />
                Book Appointment
              </a>
              <a
                href="tel:9810416861"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-brand-primary border-2 border-brand-accent"
              >
                <Phone size={18} />
                +91-9810416861
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

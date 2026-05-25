"use client";

import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <div className="relative">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch to book a session, visit our clinic, or ask questions."
        breadcrumb="Contact Us"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-100 mb-16 relative aspect-[21/9] min-h-[300px] sm:min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.711205025518!2d77.24311519999999!3d28.578433599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31aed4d31a3%3A0x7af85fad807ee4b!2sHealing%20Hands%20Physiotherapy%20and%20Disability%20Rehabilitation%20Centre%20By%20Dr%20Mudasir!5e0!3m2!1sen!2sin!4v1749490007181!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Healing Hands Clinic Google Map"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Clinic",
                desc: "Speak to us directly",
                content: (
                  <a
                    href="tel:9810416861"
                    className="text-base font-bold text-brand-accent-hover hover:text-brand-accent transition-colors"
                  >
                    +91-9810416861
                  </a>
                ),
                delay: 0.1,
              },
              {
                icon: MapPin,
                title: "Visit Clinic",
                desc: "Stop by our rehabilitation facility",
                content: (
                  <span className="text-slate-800 text-sm font-semibold max-w-xs">
                    199, Lajpat Nagar-1, New Delhi – 110024, India
                  </span>
                ),
                delay: 0.2,
              },
              {
                icon: Mail,
                title: "Email Us",
                desc: "Send detailed medical inquiries",
                content: (
                  <a
                    href="mailto:mudasiraminbhat786@gmail.com"
                    className="text-slate-700 hover:text-brand-accent-hover text-sm font-bold transition-colors break-all"
                  >
                    mudasiraminbhat786@gmail.com
                  </a>
                ),
                delay: 0.3,
              },
            ].map(({ icon: Icon, title, desc, content, delay }) => (
              <motion.div
                key={title}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg hover:border-brand-light transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay }}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-accent flex items-center justify-center mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-4">{desc}</p>
                {content}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-100">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">
                Connect With Us
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                Get In Touch Today
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Have questions about pediatric procedures, NDT, or appointment availability? Message
                us on WhatsApp for rapid responses.
              </p>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                <h3 className="text-slate-900 font-bold text-base flex items-center gap-2">
                  <Clock size={18} className="text-brand-accent" />
                  Clinic Timings
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold text-slate-800">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Sunday</span>
                    <span className="font-semibold text-red-500 uppercase tracking-wider text-xs bg-red-50 px-2.5 py-0.5 rounded-full">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919810416861?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-colors shadow-md hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100">
              <h3 className="text-slate-900 font-bold text-lg mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  isCompact?: boolean;
}

export default function ContactForm({ isCompact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputClass = isCompact
    ? "bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:ring-brand-accent/50 focus:border-brand-accent"
    : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-brand-accent/30 focus:border-brand-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 p-3 rounded-lg bg-brand-accent/20 border border-brand-accent text-brand-accent text-sm"
          >
            <CheckCircle2 size={16} className="shrink-0" />
            <span>Thank you! Your message was sent successfully.</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 p-3 rounded-lg bg-red-950/50 border border-red-500 text-red-200 text-sm"
          >
            <AlertCircle size={16} className="text-red-400 shrink-0" />
            <span>Please fill out all fields before submitting.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-3">
        {(["name", "email"] as const).map((field) => (
          <input
            key={field}
            id={`form-${field}`}
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field === "name" ? "Full Name" : "Email Address"}
            className={`w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 ${inputClass}`}
            required
            disabled={status === "submitting"}
          />
        ))}
        <textarea
          id="form-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          rows={isCompact ? 3 : 5}
          className={`w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 resize-none ${inputClass}`}
          required
          disabled={status === "submitting"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-50"
      >
        {status === "submitting" ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/919810416861?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-button relative w-14 h-14 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer bg-[#25d366] hover:bg-[#20bd5a]"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        title="Chat on WhatsApp"
        aria-label="WhatsApp Chat"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.002-2.63-1.023-5.101-2.887-6.968C16.581 1.968 14.1 1.94 12.003 1.94c-5.44 0-9.866 4.414-9.87 9.848-.001 1.702.454 3.361 1.317 4.815L2.392 20.2l3.856-1.012c1.077.587 2.164.887 3.4.888z" />
          <path d="M17.472 14.382c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.178-.175.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.487-1.777-1.663-2.078-.176-.3-.019-.462.13-.61.137-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.564-.009-.196 0-.514.074-.783.37-.27.295-1.03 1.007-1.03 2.512s1.75 4.73 1.995 5.063c.245.334 3.441 5.257 8.337 7.373 1.164.503 2.074.804 2.784 1.03 1.17.372 2.236.32 3.08.194.942-.14 2.056-.84 2.348-1.658.291-.818.291-1.52.204-1.658-.087-.14-.321-.22-.622-.37z" />
        </svg>
      </motion.a>

      <motion.a
        href="tel:9810416861"
        className="w-14 h-14 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer bg-brand-accent hover:bg-brand-accent-hover"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        title="Call the Clinic"
        aria-label="Call Clinic Phone"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}

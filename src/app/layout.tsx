import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Healing Hands Neuro Physiotherapy Centre Lajpat Nagar-1, New Delhi",
  description: "Specialized pediatric rehab clinic in Lajpat Nagar Delhi. Offering Dynamic Movement Intervention (DMI) Therapy, Muscle Tone & Postural Alignment, Neurodevelopmental Therapy (NDT), Brain Gym, Speech Therapy, and Sensory Integration.",
  keywords: [
    "Healing Hands Neuro Physiotherapy Centre",
    "Physiotherapy Centre Lajpat Nagar",
    "Dynamic Movement Intervention",
    "DMI Therapy Delhi",
    "Neurodevelopmental Therapy",
    "NDT Delhi",
    "Pediatric Physiotherapist Delhi",
    "Dr Mudasir Amin",
    "Autism Therapy Delhi",
    "Cerebral Palsy Therapy Delhi",
    "Speech Therapy Lajpat Nagar",
    "Toe Walking treatment Delhi"
  ],
  authors: [{ name: "Dr. Mudasir Amin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-primary">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

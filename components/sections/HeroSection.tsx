"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden bg-linear-to-b from-sky-50 to-white">
      
      {/* Decorative blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-sky-700 mb-6"
      >
        Building Tomorrow, Today.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg text-gray-600 mb-10"
      >
        Archbicon delivers innovative architecture and construction solutions —
        where design meets precision and creativity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35 }}
        className="flex justify-center gap-4"
      >
        <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full">
          View Projects
        </Button>

        <Button variant="outline" className="rounded-full px-8 py-3">
          Contact Us
        </Button>
      </motion.div>
    </section>
  );
}

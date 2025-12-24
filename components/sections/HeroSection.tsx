"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-building.webp"
          alt="Modern high-rise building under construction"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Shaping Skylines <br className="hidden md:block" />
            <span className="text-sky-400">Building the Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-lg text-gray-200 mb-10"
          >
            Archbicon is an architectural and construction firm delivering
            modern, functional, and enduring spaces with precision and vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-full text-base"
            >
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white text-sky-700 hover:bg-white hover:text-black px-8 py-6 rounded-full text-base"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Side Accent (kept empty for clean layout) */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}

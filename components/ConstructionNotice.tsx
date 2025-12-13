"use client";

import { motion } from "framer-motion";
import { HardHat, Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  message?: string;
};

export default function ConstructionNotice({
  title = "Page Under Construction",
  message = "We’re currently building something great here. Please check back soon.",
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-sky-50 to-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl text-center bg-white rounded-3xl shadow-lg p-10 border border-sky-100"
      >
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <Construction className="w-16 h-16 text-sky-600" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h1>

        <p className="text-gray-600 mb-8">
          {message}
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild className="rounded-full">
            <Link href="/">Go Home</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-sky-200"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-20"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

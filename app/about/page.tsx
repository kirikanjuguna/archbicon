"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Lightbulb, Ruler } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="pt-36 pb-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-6">
            About Archbicon
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A forward-thinking architectural and construction firm committed to
            shaping modern spaces with precision, innovation, and integrity.
          </p>
        </motion.div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Archbicon is an architectural design and construction company
              dedicated to delivering functional, sustainable, and visually
              compelling spaces. We bridge the gap between design and execution,
              ensuring every project is handled with clarity and precision.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From residential developments to commercial and urban projects,
              our approach is rooted in thoughtful planning, technical expertise,
              and a deep understanding of modern construction standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-2xl border border-sky-100">
              <Building2 className="w-8 h-8 text-sky-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">
                Architectural Design
              </h3>
              <p className="text-sm text-gray-600">
                Contemporary and functional design solutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-sky-100">
              <HardHat className="w-8 h-8 text-sky-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">
                Construction
              </h3>
              <p className="text-sm text-gray-600">
                Reliable execution from ground to completion.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-sky-100">
              <Lightbulb className="w-8 h-8 text-sky-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">
                Consultancy
              </h3>
              <p className="text-sm text-gray-600">
                Strategic guidance at every project stage.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-sky-100">
              <Ruler className="w-8 h-8 text-sky-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">
                Engineering
              </h3>
              <p className="text-sm text-gray-600">
                Structurally sound and efficient solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-sky-50 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-sky-700 mb-4">
            Our Approach
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            At Archbicon, we believe successful projects are built on clear
            communication, strong collaboration, and attention to detail. We
            work closely with clients to understand their vision, translate it
            into practical design solutions, and deliver results that stand the
            test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

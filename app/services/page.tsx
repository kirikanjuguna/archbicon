"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HardHat,
  DraftingCompass,
  Lightbulb,
  Ruler,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: DraftingCompass,
    title: "Architectural Design",
    description:
      "We create functional, modern, and visually striking architectural designs tailored to client needs, site conditions, and regulatory requirements.",
  },
  {
    icon: Building2,
    title: "Interior Design",
    description:
      "Our interior solutions focus on space optimization, aesthetics, and comfort—balancing beauty with practical use.",
  },
  {
    icon: HardHat,
    title: "Construction & Project Execution",
    description:
      "From groundwork to final finishes, we manage construction with precision, quality control, and adherence to timelines.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "We oversee every project phase, coordinating consultants, contractors, and schedules to ensure smooth delivery.",
  },
  {
    icon: Ruler,
    title: "Structural & Engineering Solutions",
    description:
      "We provide sound engineering designs that prioritize safety, efficiency, and long-term durability.",
  },
  {
    icon: Lightbulb,
    title: "Consultancy & Feasibility Studies",
    description:
      "We offer expert guidance, feasibility assessments, and technical advice to help clients make informed decisions.",
  },
];

export default function ServicesPage() {
  return (
    <section className="pt-36 pb-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-6">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We provide end-to-end architectural and construction solutions,
            combining creativity, technical expertise, and reliable execution.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 rounded-3xl border border-sky-100 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-10 h-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-sky-50 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-sky-700 mb-4">
            Why Choose Archbicon
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
            We combine innovative design thinking with practical construction
            expertise. Our collaborative approach ensures every project is
            efficient, transparent, and aligned with our clients’ goals.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700">
            <span className="px-5 py-3 bg-white rounded-full border">
              Client-Centered Approach
            </span>
            <span className="px-5 py-3 bg-white rounded-full border">
              Experienced Professionals
            </span>
            <span className="px-5 py-3 bg-white rounded-full border">
              Quality & Precision
            </span>
            <span className="px-5 py-3 bg-white rounded-full border">
              Timely Project Delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Building2, Lightbulb, Ruler } from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    desc: "Modern, functional, and sustainable design solutions tailored to your vision.",
    icon: Building2,
  },
  {
    title: "Construction Management",
    desc: "From concept to completion, we ensure quality and precision every step of the way.",
    icon: HardHat,
  },
  {
    title: "Consultancy",
    desc: "Professional advice to help you plan and execute successful building projects.",
    icon: Lightbulb,
  },
  {
    title: "Structural Engineering",
    desc: "Strong, safe, and efficient structures engineered to perfection.",
    icon: Ruler,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-sky-700 mb-4"
        >
          Our Core Services
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          End-to-end architecture and construction services built for excellence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="rounded-2xl border-sky-100 hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

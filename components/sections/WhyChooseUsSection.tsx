"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Design Excellence",
    desc: "Innovative architectural solutions balancing beauty and function.",
  },
  {
    title: "End-to-End Delivery",
    desc: "From concept to construction, managed seamlessly.",
  },
  {
    title: "Sustainable Approach",
    desc: "Eco-conscious designs built for longevity.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-sky-700 mb-4"
        >
          Why Choose Archbicon
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A trusted partner in modern architectural and construction excellence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-8 border border-sky-100 rounded-2xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

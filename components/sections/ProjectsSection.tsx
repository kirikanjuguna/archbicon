"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Residential Villas",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    desc: "Elegant, modern villas designed for luxury and comfort.",
  },
  {
    title: "Corporate Office",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60",
    desc: "Innovative workspace promoting collaboration and focus.",
  },
  {
    title: "Urban Apartments",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=60",
    desc: "High-rise residential buildings shaping modern city skylines.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-sky-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-sky-700 mb-4"
        >
          Our Recent Projects
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Spaces we’ve brought to life through architectural excellence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl shadow-md group"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Commercial Office Complex",
    category: "Commercial",
    image: "/images/project-1.jpg",
  },
  {
    title: "Luxury Residential Apartments",
    category: "Residential",
    image: "/images/project-2.jpg",
  },
  {
    title: "Mixed-Use Development",
    category: "Urban Development",
    image: "/images/project-3.jpg",
  },
  {
    title: "Interior Fit-Out Project",
    category: "Interior Design",
    image: "/images/project-4.jpg",
  },
  {
    title: "Industrial Warehouse Facility",
    category: "Industrial",
    image: "/images/project-5.jpg",
  },
  {
    title: "Modern Villa Residence",
    category: "Residential",
    image: "/images/project-6.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="pt-36 pb-24 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-6">
            Our Projects
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A selection of projects that showcase our commitment to quality,
            innovation, and functional design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-sky-600 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 text-gray-800">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let’s collaborate to turn your vision into a functional and
            timeless space.
          </p>
          <a
            href="/contact"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-full font-medium transition"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}


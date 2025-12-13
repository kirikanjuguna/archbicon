"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HardHat, Building2, Lightbulb, Ruler } from "lucide-react";

export default function HomePage() {
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

  return (
    <main className="bg-linear-to-b from-sky-50 to-white text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-sky-700 mb-4"
        >
          Building Tomorrow, Today.
        </motion.h1>

        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Archbicon delivers innovative architecture and construction
          solutions—where design meets precision and creativity.
        </p>

        <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 text-lg rounded-full">
          Learn More
        </Button>
      </section>

      {/* About / Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-sky-700 mb-4"
          >
            Our Core Services
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end architecture and construction services that
            blend creativity, functionality, and sustainability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 border-sky-100 rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <service.icon className="w-12 h-12 text-sky-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

            {/* Projects / Portfolio Section */}
      <section id="projects" className="py-24 px-6 bg-sky-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-sky-700 mb-4"
          >
            Our Recent Projects
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of the spaces we’ve brought to life — combining
            architectural excellence and construction precision.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
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
              img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
              desc: "Sustainable high-rise apartments redefining city living.",
            },


          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

            {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-sky-700 mb-4"
          >
            Why Choose Archbicon
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine design excellence, engineering expertise, and a deep
            understanding of modern construction needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Design Excellence",
              desc: "Innovative architectural solutions that balance beauty and function.",
            },
            {
              title: "End-to-End Delivery",
              desc: "From concept to construction, we manage every stage seamlessly.",
            },
            {
              title: "Sustainable Approach",
              desc: "Eco-conscious designs built for longevity and efficiency.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-sky-100 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


    </main>
  );
}

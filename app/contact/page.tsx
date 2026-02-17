"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="pt-36 pb-24 px-6 bg-gradient-to-b from-sky-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-6">
            Let’s Build Something Great
          </h1>

          <p className="text-lg text-gray-600 mb-12 max-w-xl">
            Whether you’re planning a new development, renovation, or need
            architectural consultation, our team is ready to bring your vision
            to life with precision and innovation.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            
            {/* Location */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-sky-100 p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Office Location</h3>
                <p className="text-gray-600 text-sm">
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-sky-100 p-3 rounded-xl">
                <Phone className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +254 700 000 000
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-sky-100 p-3 rounded-xl">
                <Mail className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm">
                  info@archbicon.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+254 7xx xxx xxx"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

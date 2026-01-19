"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="pt-36 pb-24 px-6 bg-linear-to-b from-sky-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            Have a project in mind or need professional architectural and
            construction services? Reach out to us — we’d love to discuss how
            we can bring your vision to life.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800">📍 Office Location</h3>
              <p className="text-gray-600">
                Nairobi, Kenya
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">📞 Phone</h3>
              <p className="text-gray-600">+254 700 000 000</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">📧 Email</h3>
              <p className="text-gray-600">info@archbicon.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-lg p-10"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+254 7xx xxx xxx"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-4 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

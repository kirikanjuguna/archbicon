"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-linear-to-b from-sky-50 to-white text-gray-800 min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
    </main>
  );
}

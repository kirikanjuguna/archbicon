"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-sky-600">
          Archbicon
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="#about" className="hover:text-sky-600 transition">
            About
          </Link>
          <Link href="#services" className="hover:text-sky-600 transition">
            Services
          </Link>
          <Link href="#projects" className="hover:text-sky-600 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-sky-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-sky-600" />
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <div className="flex flex-col space-y-6 text-gray-800 text-lg font-medium">
                <Link href="#about">About</Link>
                <Link href="#services">Services</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

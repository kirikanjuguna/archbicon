"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-sky-100 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-sky-600 tracking-tight"
        >
          Archbicon
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-sky-600 ${
                pathname === link.href ? "text-sky-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu">
              <Menu className="w-6 h-6 text-sky-600" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-8 flex flex-col items-center justify-center"
            >
              {/* Visually hidden title for accessibility */}
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

              {/* Close Button */}
              <div className="absolute top-6 right-6">
                <SheetClose>
                  <X className="w-6 h-6 text-gray-700 hover:text-sky-600" />
                </SheetClose>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col space-y-8 text-xl font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors hover:text-sky-600 ${
                      pathname === link.href
                        ? "text-sky-600 font-bold"
                        : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

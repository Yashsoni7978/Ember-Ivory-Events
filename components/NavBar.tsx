"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md border-b border-stone/20 py-4 shadow-sm"
          : "bg-transparent py-6 border-b border-stone/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl sm:text-2xl tracking-[0.18em] text-ink uppercase font-normal group-hover:text-oxblood transition-colors">
            Ember &amp; Ivory
          </span>
          <span className="text-[10px] tracking-[0.35em] text-stone uppercase font-medium mt-0.5">
            Jaipur &bull; Private Events &bull; Est. 2018
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-medium text-ink/80">
          <Link
            href="#services"
            className="hover:text-oxblood transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-oxblood transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-oxblood transition-colors duration-200"
          >
            Words
          </Link>
          <Link
            href="#about"
            className="hover:text-oxblood transition-colors duration-200"
          >
            About
          </Link>
        </nav>

        {/* Action Button - Invitation style (no arrow, one bold color moment) */}
        <div className="hidden md:flex items-center">
          <Link
            href="#inquiry"
            className="inline-block px-6 py-2.5 bg-oxblood text-bone hover:bg-oxblood-deep transition-colors duration-300 text-xs tracking-[0.22em] uppercase font-medium shadow-sm"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink hover:text-oxblood focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span
              className={`h-[1px] bg-ink transition-all duration-300 ${
                mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`h-[1px] bg-ink transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[1px] bg-ink transition-all duration-300 ${
                mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bone border-b border-stone/20 px-6 py-8 space-y-6 animate-fadeIn">
          <nav className="flex flex-col space-y-5 text-sm tracking-[0.18em] uppercase font-medium text-ink">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-oxblood transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-oxblood transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-oxblood transition-colors"
            >
              Words
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-oxblood transition-colors"
            >
              About
            </Link>
          </nav>
          <div className="pt-4 border-t border-stone/15">
            <Link
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-oxblood text-bone text-xs tracking-[0.22em] uppercase font-medium"
            >
              Inquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

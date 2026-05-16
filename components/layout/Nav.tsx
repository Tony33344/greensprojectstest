"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-hover)] shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Green Spirit IT Solutions"
            className="h-28 w-auto object-contain transition-opacity group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} className="text-[var(--text-secondary)]" /> : <Moon size={18} className="text-[var(--text-secondary)]" />}
          </button>
          <Link
            href="/contact"
            className="btn-primary text-sm font-semibold text-white px-5 py-2 rounded-full"
          >
            Let's Talk
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} className="text-[var(--text-secondary)]" /> : <Moon size={18} className="text-[var(--text-secondary)]" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary text-center text-sm font-semibold text-white px-5 py-2.5 rounded-full mt-2"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

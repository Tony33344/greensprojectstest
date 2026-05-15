"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Brain, Wrench, FlaskConical, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    color: "green",
    description:
      "Full-stack web applications that go beyond design. Next.js, React, TypeScript — with real backends, auth systems, booking engines, and e-commerce.",
    highlights: ["Next.js 15 & React 19", "Supabase & PostgreSQL", "Stripe Payments", "Playwright E2E Testing"],
    href: "/services#web",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    color: "blue",
    description:
      "Multi-agent AI pipelines, speech recognition, text-to-speech, LLM orchestration, and document intelligence systems. Production-ready, not just demos.",
    highlights: ["Multi-Agent AI (CrewAI)", "Voice AI (ElevenLabs)", "Browser ML (ONNX/WebGPU)", "LLM Orchestration"],
    href: "/services#ai",
  },
  {
    icon: Wrench,
    title: "Automation & Tools",
    color: "teal",
    description:
      "Web scrapers, trading bots, document processors, OCR systems, and load testers. We automate the repetitive so your team can focus on what matters.",
    highlights: ["Web Scraping (Selenium)", "Trading Automation", "OCR & Document Processing", "API Integrations"],
    href: "/services#automation",
  },
  {
    icon: FlaskConical,
    title: "Research & Data",
    color: "indigo",
    description:
      "Data-driven analysis, patent research, academic study tools, and intelligent document analysis systems built for researchers and institutions.",
    highlights: ["Multi-Agent Research", "Patent Analysis", "Legal Document AI", "Educational Platforms"],
    href: "/services#research",
  },
];

const colorMap = {
  green: {
    bg: "bg-green-500/8",
    border: "border-green-500/15",
    icon: "text-green-400",
    highlight: "text-green-400",
    glow: "hover:shadow-green-500/8",
  },
  blue: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/15",
    icon: "text-blue-400",
    highlight: "text-blue-400",
    glow: "hover:shadow-blue-500/8",
  },
  teal: {
    bg: "bg-teal-500/8",
    border: "border-teal-500/15",
    icon: "text-teal-400",
    highlight: "text-teal-400",
    glow: "hover:shadow-teal-500/8",
  },
  indigo: {
    bg: "bg-indigo-500/8",
    border: "border-indigo-500/15",
    icon: "text-indigo-400",
    highlight: "text-indigo-400",
    glow: "hover:shadow-indigo-500/8",
  },
};

export default function ServicesGrid() {
  return (
    <section className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-5">
            Four core services,
            <br />
            <span className="gradient-text">infinite possibilities</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Most agencies sell you a template. We build bespoke solutions using
            the same stack your most admired SaaS companies run on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const c = colorMap[service.color as keyof typeof colorMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className={`group block p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] hover:shadow-xl ${c.glow} transition-all duration-300 h-full`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} border ${c.border} mb-6`}>
                    <Icon size={22} className={c.icon} />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--text-primary)]/90 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.highlight.replace("text", "bg")}`} />
                        <span className="text-[var(--text-secondary)]">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-2 text-sm font-medium ${c.highlight} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

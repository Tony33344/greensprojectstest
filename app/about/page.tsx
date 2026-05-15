import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Wrench, GraduationCap } from "lucide-react";

export const metadata = {
  title: "About",
  description: "AI-native software studio — 2 years, 60+ projects delivered",
};

const pillars = [
  { icon: Code2, label: "Web Development", count: "29", color: "text-green-400" },
  { icon: Brain, label: "AI & ML Systems", count: "19", color: "text-blue-400" },
  { icon: Wrench, label: "Automation Tools", count: "8", color: "text-teal-400" },
  { icon: GraduationCap, label: "Educational Platforms", count: "4+", color: "text-indigo-400" },
];

const values = [
  {
    title: "Production-first",
    body: "Every project we build is designed to run in production from day one — tested, secure, performant.",
  },
  {
    title: "AI-native",
    body: "We don't bolt AI on top of existing tools. We design with AI as a core primitive — multi-agent pipelines, voice AI, browser ML.",
  },
  {
    title: "You own your code",
    body: "100% of the source code belongs to you. No lock-in, no ongoing fees, no hidden dependencies.",
  },
  {
    title: "Honest pricing",
    body: "We scope carefully, price fairly, and tell you when something isn't worth building.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h1 className="text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Green Spirit
              <br />
              <span className="gradient-text">IT Solutions</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              We are an AI-native software studio based in Slovenia, specialising
              in full-stack web development and intelligent automation. Over the
              past two years we have delivered 60+ production projects across
              hospitality, education, legal, agriculture, and healthcare.
            </p>
            <p className="text-[var(--text-muted)] text-base leading-relaxed">
              What makes us different: we do not separate "AI" and "web dev" into
              silos. Our engineers work across the full stack — from Next.js
              e-commerce platforms to multi-agent research systems and real-time
              voice AI.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-500/10 to-blue-500/10 blur-xl" />
              <Image
                src="/images/logo.png"
                alt="Green Spirit IT Solutions"
                width={320}
                height={200}
                className="relative w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="section-divider mb-16" />

        <div className="mb-20">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-8">
            By The Numbers
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.label} className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
                <div className="text-3xl font-bold gradient-text mb-2">{p.count}</div>
                <div className="text-xs text-[var(--text-muted)] leading-snug">{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mb-16" />

        <div className="mb-20">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-8">
            Our Principles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)] text-base mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mb-12" />

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Want to work with us?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold"
            >
              Let's Talk
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] font-medium hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

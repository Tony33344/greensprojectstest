"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Wrench, GraduationCap, Star } from "lucide-react";

const stats = [
  { value: "60+", label: "Projects Delivered", icon: Code2 },
  { value: "2", label: "Years of Excellence", icon: Star },
  { value: "29", label: "Web Applications", icon: Code2 },
  { value: "19", label: "AI/ML Systems", icon: Brain },
  { value: "8", label: "Automation Tools", icon: Wrench },
  { value: "4+", label: "Educational Platforms", icon: GraduationCap },
];

export default function TrustBar() {
  return (
    <section className="py-16 border-y border-[var(--border-color)] bg-[var(--bg-tertiary)]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">
            Proven Track Record
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/8 border border-green-500/15 flex items-center justify-center mb-1">
                  <Icon size={18} className="text-green-400" />
                </div>
                <span className="text-3xl font-bold tracking-tight gradient-text">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--text-muted)] leading-tight text-center">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 section-divider" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            "Next.js", "React", "TypeScript", "Supabase", "Python",
            "CrewAI", "ElevenLabs", "Framer Motion", "Stripe", "FastAPI",
            "Playwright", "Docker", "Shadcn UI", "Transformers.js", "ONNX",
          ].map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

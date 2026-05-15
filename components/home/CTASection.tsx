"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/6 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-border rounded-3xl p-12 bg-[var(--bg-secondary)]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-medium tracking-wide mb-8">
            <Zap size={12} />
            Ready to start building?
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-5">
            Let's build something
            <br />
            <span className="gradient-text">that actually converts</span>
          </h2>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Most agencies make you wait. We move fast, communicate clearly, and
            deliver software that earns its investment. Tell us what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base shadow-xl shadow-green-500/10 w-full sm:w-auto justify-center"
            >
              <MessageSquare size={18} />
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full text-[var(--text-secondary)] font-semibold text-base border border-[var(--border-color)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all w-full sm:w-auto justify-center"
            >
              Browse Our Work
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border-color)] grid grid-cols-3 gap-6">
            {[
              { value: "48h", label: "Average response time" },
              { value: "60+", label: "Projects delivered" },
              { value: "100%", label: "Client ownership of code" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{item.value}</div>
                <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

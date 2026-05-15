import Link from "next/link";
import { Mail, MessageSquare, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Start a project with Green Spirit IT Solutions",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Let's build
            <br />
            <span className="gradient-text">something great</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Tell us what you need. We respond within 48 hours with honest
            feedback and a clear path forward.
          </p>
        </div>

        <div className="gradient-border rounded-2xl p-8 bg-[var(--bg-secondary)] space-y-6 mb-8">
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Smith"
              className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-green-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-green-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-2">
              What do you need?
            </label>
            <textarea
              rows={5}
              placeholder="Describe your project, goals, and timeline..."
              className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-green-500/40 transition-colors resize-none"
            />
          </div>
          <button
            type="button"
            className="btn-primary flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-white font-semibold text-sm"
          >
            <MessageSquare size={16} />
            Send Message
          </button>
        </div>

        <div className="flex items-center gap-3 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
            <Mail size={18} className="text-green-400" />
          </div>
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-0.5">Or email directly</p>
            <a
              href="mailto:info@greenspiritit.com"
              className="text-[var(--text-primary)] text-sm font-medium hover:text-green-400 transition-colors"
            >
              info@greenspiritit.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

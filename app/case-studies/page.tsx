import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export const metadata = {
  title: "Case Studies",
  description: "In-depth look at our most impactful projects",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-16">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">
            Deep Dives
          </p>
          <h1 className="text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl">
            Detailed breakdowns of how we solved complex problems for real clients — architecture decisions, challenges, and outcomes.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-green-500/8 border border-green-500/15 flex items-center justify-center mb-6">
            <BookOpen size={28} className="text-green-400/60" />
          </div>
          <p className="text-[var(--text-muted)] text-lg mb-2">Case studies coming soon</p>
          <p className="text-[var(--text-muted)] text-sm max-w-sm">
            We are writing detailed breakdowns for Kmetija Maroša, ORI 369, and H2O Team. Check back shortly.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] text-sm font-medium hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all"
          >
            Browse All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

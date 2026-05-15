import Link from "next/link";
import { Globe, Brain, Wrench, FlaskConical, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services",
  description: "Web Development, AI, Automation, and Research services from Green Spirit IT Solutions",
};

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    color: "green",
    tagline: "Full-stack applications that generate revenue",
    description:
      "We build custom web applications from scratch — not WordPress templates or page builders. Real backends, real databases, real-time features, tested and deployed.",
    deliverables: [
      "Next.js 15/16 and React 19 applications",
      "Supabase / PostgreSQL backends with RLS security",
      "Stripe and payment integration",
      "Multi-language (next-intl, i18next)",
      "E-commerce with full product catalogs",
      "Booking and appointment systems",
      "Admin dashboards with role-based access",
      "Playwright end-to-end testing",
      "Netlify / Vercel deployment",
    ],
    examples: ["Kmetija Maroša", "H2O Team", "ORI 369", "Healthy Corner", "HEAVEN Resort"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    color: "blue",
    tagline: "Production AI, not just chatbot wrappers",
    description:
      "Multi-agent pipelines, voice AI, speech recognition, in-browser ML, and document intelligence. We build AI systems that run reliably in production.",
    deliverables: [
      "Multi-agent AI systems (CrewAI, LangChain)",
      "ElevenLabs voice agents and conversational AI",
      "Speech-to-text (Whisper, Qwen3-ASR, 52 languages)",
      "Text-to-speech (Supertonic-2, browser-native ONNX)",
      "In-browser ML inference (Transformers.js, WebGPU)",
      "Document intelligence and OCR (PaddleOCR, VLMs)",
      "Semantic search (pgvector, sentence-transformers)",
      "LLM orchestration (Groq, OpenRouter, Gemini, OpenAI)",
    ],
    examples: ["Modular Voice-to-Voice Sandbox", "Qwen3-ASR", "ARIS Research System", "UPR Document Intelligence"],
  },
  {
    id: "automation",
    icon: Wrench,
    title: "Automation & Tools",
    color: "teal",
    tagline: "Automate the boring, focus on what matters",
    description:
      "Web scrapers, trading bots, document processors, load testers, and API integrations. We script the repetitive tasks that eat your team's time.",
    deliverables: [
      "Web scraping with Selenium and BeautifulSoup",
      "Trading bot automation (Bybit API v5, WebSocket)",
      "Invoice OCR and bookkeeping automation",
      "PDF processing and document extraction",
      "Email and calendar automation",
      "Load testing and QA automation",
      "Data pipeline construction",
    ],
    examples: ["Bybit Copytrading Bot", "Invoice OCR Processor", "Aurena.at Scraper", "Telegram Call Extractor"],
  },
  {
    id: "research",
    icon: FlaskConical,
    title: "Research & Data",
    color: "indigo",
    tagline: "Data-driven insights, properly sourced",
    description:
      "Patent analysis, academic research tools, legal document intelligence, and data-driven analysis systems. We handle large datasets and complex information architectures.",
    deliverables: [
      "Multi-agent research orchestration",
      "Patent portfolio extraction and analysis",
      "Legal document semantic search",
      "Academic study tools with mind maps",
      "Data visualization dashboards",
      "Statistical analysis and reporting",
    ],
    examples: ["Cannabis Patent Analysis", "Global Case Law Search Engine", "Scientific Research Agent", "Polaris Research System"],
  },
];

const colorMap: Record<string, { icon: string; border: string; bg: string; dot: string }> = {
  green: { icon: "text-green-400", border: "border-green-500/20", bg: "bg-green-500/8", dot: "bg-green-400" },
  blue: { icon: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/8", dot: "bg-blue-400" },
  teal: { icon: "text-teal-400", border: "border-teal-500/20", bg: "bg-teal-500/8", dot: "bg-teal-400" },
  indigo: { icon: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/8", dot: "bg-indigo-400" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
            Services
          </h1>
          <p className="text-[var(--text-secondary)] text-xl leading-relaxed max-w-xl">
            Four service lines, one team. We are full-stack by nature and
            AI-native by choice.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service) => {
            const Icon = service.icon;
            const c = colorMap[service.color];
            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 scroll-mt-24"
              >
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} border ${c.border} mb-5`}>
                      <Icon size={22} className={c.icon} />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{service.title}</h2>
                    <p className={`text-sm font-medium mb-4 ${c.icon}`}>{service.tagline}</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((ex) => (
                        <span key={ex} className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
                      What You Get
                    </p>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle2 size={15} className={`${c.icon} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-[var(--text-secondary)]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="section-divider mb-12" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Ready to start?</h2>
          <p className="text-[var(--text-secondary)] mb-8">Tell us what you need and we will get back to you within 48 hours.</p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

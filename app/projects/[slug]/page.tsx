import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects.json";
import ImageGallery from "@/components/projects/ImageGallery";

type Params = { slug: string };

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

const categoryColor: Record<string, string> = {
  "Web Development": "bg-green-500/15 text-green-400 border-green-500/25",
  "AI & Machine Learning": "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Tools & Utilities": "bg-teal-500/15 text-teal-400 border-teal-500/25",
  "Education & Research": "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
};

const statusColor: Record<string, string> = {
  "Production-ready": "bg-green-500/10 text-green-400 border-green-500/20",
  "Complete": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "In Development": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);
  if (!project) notFound();

  const catClass = categoryColor[project.category] ?? "bg-slate-500/15 text-slate-400";
  const statClass = statusColor[project.status] ?? "bg-slate-500/10 text-slate-500/20";

  const related = projectsData
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  const images = Array.isArray((project as any).images) ? (project as any).images : project.image ? [project.image] : [];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          All Projects
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${catClass}`}>
              {project.category}
            </span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statClass}`}>
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
            {project.name}
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">{project.tagline}</p>
        </div>

        {images.length > 0 && <ImageGallery images={images} projectName={project.name} />}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
                Overview
              </h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-5">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)] leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
              <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-5">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
              <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-5">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/4 text-[var(--text-secondary)] border border-[var(--border-color)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
              <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
                Interested in this?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                We can build something similar or custom for your business.
              </p>
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white w-full"
              >
                Discuss Your Project
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <div className="section-divider mb-12" />
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group block rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-all"
                >
                  {p.image ? (
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="33vw"
                      />
                    </div>
                  ) : (
                    <div className="h-32 bg-[var(--bg-tertiary)]" />
                  )}
                  <div className="p-4">
                    <p className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--text-primary)]/80 transition-colors">
                      {p.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{p.subcategory}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

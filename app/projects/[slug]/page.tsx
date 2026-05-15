import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
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

const badgeBase = "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)]";
const statusBadgeBase = "bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-color)]";

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);
  if (!project) notFound();

  const catClass = badgeBase;
  const statClass = statusBadgeBase;

  const related = projectsData
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  const currentIndex = projectsData.findIndex((p) => p.id === slug);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

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
                    <CheckCircle2 size={16} className="text-[var(--text-muted)] mt-0.5 flex-shrink-0" />
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
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
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

        <div className="mt-20">
          <div className="section-divider mb-12" />
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 sm:p-8 hover:border-[var(--border-hover)] transition-all"
          >
            <div className="flex items-center gap-5">
              {nextProject.image ? (
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-[var(--border-color)]">
                  <Image
                    src={nextProject.image}
                    alt={nextProject.name}
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-xl bg-[var(--bg-tertiary)] flex-shrink-0 border border-[var(--border-color)]" />
              )}
              <div>
                <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-1">
                  Next Project
                </p>
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)]/80 transition-colors">
                  {nextProject.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">{nextProject.tagline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
              Continue
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-md border-t border-[var(--border-hover)] shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex items-center gap-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--border-hover)] transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="hidden sm:inline">Previous</span>
          </Link>

          <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
            {currentIndex + 1} / {projectsData.length}
          </span>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
          >
            <span className="hidden sm:inline">Next Project</span>
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--bg-tertiary)] transition-colors">
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

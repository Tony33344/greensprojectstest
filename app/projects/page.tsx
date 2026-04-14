"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ExternalLink, X, ZoomIn } from "lucide-react";
import projectsData from "@/data/projects.json";

const ALL = "All";
const categories = [
  ALL,
  "Web Development",
  "AI & Machine Learning",
  "Tools & Utilities",
  "Education & Research",
];

const categoryColor: Record<string, string> = {
  "Web Development": "bg-green-500/15 text-green-400 border-green-500/25",
  "AI & Machine Learning": "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Tools & Utilities": "bg-teal-500/15 text-teal-400 border-teal-500/25",
  "Education & Research": "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
};

export default function ProjectsPage() {
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (img: string) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  const filtered = useMemo(() => {
    return projectsData.filter((p) => {
      const matchCat = active === ALL || p.category === active;
      const q = query.toLowerCase();
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [active, query]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            All{" "}
            <span className="gradient-text">{projectsData.length}+ Projects</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl">
            Two years of building — web platforms, AI systems, automation tools,
            and educational applications. Each one production-ready.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search by name, tech, tag..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-green-500/40 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-green-500/15 text-green-400 border border-green-500/30"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)] mb-6 font-mono">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""} shown
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const catClass = categoryColor[project.category] ?? "bg-slate-500/15 text-slate-400";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="project-card group flex flex-col h-full rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="relative overflow-hidden h-48 bg-[var(--bg-tertiary)] flex-shrink-0">
                    {project.image ? (
                      <div className="relative w-full h-full cursor-pointer" onClick={(e) => { e.preventDefault(); openLightbox(project.image); }}>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="project-card-img object-cover object-top"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <ZoomIn size={32} className="text-white" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-2">
                            <ExternalLink size={16} className="text-green-400/50" />
                          </div>
                          <p className="text-slate-700 text-[10px] font-mono">No preview</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />

                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-semibold px-2 py-1 rounded-full border ${catClass}`}>
                        {project.category.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <div className="mb-2">
                      <h2 className="font-bold text-[var(--text-primary)] text-base leading-tight mb-1 group-hover:text-[var(--text-primary)]/90">
                        {project.name}
                      </h2>
                      <p className="text-xs text-[var(--text-muted)]">{project.tagline}</p>
                    </div>

                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="tech-pill">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">No projects found for that search.</p>
            <button
              onClick={() => { setQuery(""); setActive(ALL); }}
              className="mt-4 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

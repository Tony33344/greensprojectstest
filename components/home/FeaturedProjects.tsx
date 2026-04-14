"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import projectsData from "@/data/projects.json";

const featured = projectsData.filter((p) => p.featured && p.image).slice(0, 8);

const categoryColor: Record<string, string> = {
  "Web Development": "bg-green-500/15 text-green-400 border-green-500/25",
  "AI & Machine Learning": "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Tools & Utilities": "bg-teal-500/15 text-teal-400 border-teal-500/25",
  "Education & Research": "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
};

export default function FeaturedProjects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (img: string) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  return (
    <section className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Projects that
              <br />
              <span className="gradient-text">speak for themselves</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group flex-shrink-0"
          >
            View all 60+ projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => {
            const catClass = categoryColor[project.category] ?? "bg-slate-500/15 text-slate-400 border-slate-500/25";
            const isLarge = i === 0 || i === 4;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={isLarge ? "lg:col-span-2" : ""}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="project-card group block rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 h-full"
                >
                  <div className={`relative overflow-hidden ${isLarge ? "h-64" : "h-52"} bg-[var(--bg-tertiary)]`}>
                    {project.image ? (
                      <div className="relative w-full h-full cursor-pointer" onClick={(e) => { e.preventDefault(); openLightbox(project.image); }}>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="project-card-img object-cover object-top"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <ZoomIn size={32} className="text-white" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-6">
                          <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-3">
                            <ExternalLink size={20} className="text-green-400/60" />
                          </div>
                          <p className="text-slate-600 text-xs font-mono">Preview coming soon</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-[var(--text-primary)] text-lg leading-tight group-hover:text-[var(--text-primary)]/90 transition-colors">
                        {project.name}
                      </h3>
                      <span className={`text-[10px] font-semibold px-2 py-1 rounded-full border flex-shrink-0 ${catClass}`}>
                        {project.subcategory.split(" / ")[0]}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="tech-pill">+{project.techStack.length - 4}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-white font-semibold text-sm hover:border-white/25 hover:bg-white/3 transition-all"
          >
            Explore All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>

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
    </section>
  );
}

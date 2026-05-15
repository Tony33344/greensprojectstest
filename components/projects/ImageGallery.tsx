"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  url: string;
  alt?: string;
}

interface ImageGalleryProps {
  images: (string | ImageItem)[];
  projectName: string;
}

function normalizeImage(img: string | ImageItem): { url: string; alt: string } {
  if (typeof img === 'string') {
    return { url: img, alt: '' };
  }
  return { url: img.url || '', alt: img.alt || '' };
}

export default function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") setLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <>
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, idx: number) => {
            const normalized = normalizeImage(img);
            return (
              <div key={idx} className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] group cursor-pointer" onClick={() => openLightbox(idx)}>
                <Image
                  src={normalized.url}
                  alt={normalized.alt || `${projectName} - Version ${idx + 1}`}
                  width={1200}
                  height={630}
                  className="w-full object-cover object-top"
                  priority={idx === 0}
                />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn size={32} className="text-white" />
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-10 bg-black/50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>

          {(() => {
            const normalized = normalizeImage(images[currentIndex]);
            return (
              <img
                src={normalized.url}
                alt={normalized.alt || `${projectName} - Version ${currentIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            );
          })()}
        </div>
      )}
    </>
  );
}

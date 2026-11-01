// src/app/our-work/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CONTACT } from "@/lib/constants";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  images: string[];
};

const PROJECTS: Project[] = [
  {
    id: "warm-contemporary-office",
    title: "The Warm Contemporary Office",
    category: "Commercial",
    description:
      "Marble-effect surfaces, rich walnut finishes and fluted detailing create a welcoming professional space with warm ambient lighting.",
    tags: ["Natural Wood", "Marble Accents", "Warm Lighting"],
    images: [
      "/images/projects/project-1/1.webp",
      "/images/projects/project-1/2.webp",
      "/images/projects/project-1/3.webp",
      "/images/projects/project-1/4.webp",
    ],
  },
  {
    id: "modern-practice-suite",
    title: "The Modern Practice Suite",
    category: "Commercial",
    description:
      "Clean white surfaces, charcoal cabinetry and warm timber detailing shape a composed workspace softened by integrated lighting and natural daylight.",
    tags: [
      "Custom Office Furniture",
      "Wooden Panelling",
      "Integrated Lighting",
    ],
    images: [
      "/images/projects/project-2/1.webp",
      "/images/projects/project-2/2.webp",
      "/images/projects/project-2/3.webp",
      "/images/projects/project-2/4.webp",
    ],
  },
  {
    id: "contemporary-family-home",
    title: "The Contemporary Family Home",
    category: "Residential",
    description:
      "Warm timber, taupe cabinetry and botanical wall panels bring a calm contemporary rhythm to thoughtfully connected living, dining and kitchen spaces.",
    tags: ["Custom Woodwork", "Botanical Wall Art", "Modern Modular Kitchen"],
    images: [
      "/images/projects/project-3/1.webp",
      "/images/projects/project-3/2.webp",
      "/images/projects/project-3/3.webp",
      "/images/projects/project-3/4.webp",
      "/images/projects/project-3/5.webp",
      "/images/projects/project-3/6.webp",
      "/images/projects/project-3/7.webp",
      "/images/projects/project-3/8.webp",
    ],
  },
  {
    id: "playful-bedroom-collection",
    title: "The Playful Bedroom Collection",
    category: "Residential",
    description:
      "Cricket-inspired graphics, botanical wallpapers and blush upholstery bring personality to these bedrooms, balanced by bespoke storage and soft lighting.",
    tags: ["Themed Wall Designs", "Custom Upholstery", "Floral Wallpaper"],
    images: [
      "/images/projects/project-4/1.webp",
      "/images/projects/project-4/2.webp",
      "/images/projects/project-4/3.webp",
    ],
  },
];

// ─────────────────────────────────────────
// Project Carousel (small card, on the page)
// ─────────────────────────────────────────
function ProjectCarousel({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (projectId: string, imageIndex: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          overflow: "hidden",
          backgroundColor: "#EBE4D8",
          cursor: "zoom-in",
        }}
        onClick={() => onImageClick(project.id, currentIndex)}
      >
        <Image
          src={images[currentIndex]}
          alt={`${project.title} — image ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />

        {/* Left arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous image"
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "9999px",
              backgroundColor: "rgba(247,243,237,0.95)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(31,27,22,0.15)",
              zIndex: 2,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1F1B16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
            style={{
              position: "absolute",
              top: "50%",
              right: "12px",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "9999px",
              backgroundColor: "rgba(247,243,237,0.95)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(31,27,22,0.15)",
              zIndex: 2,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1F1B16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Counter */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            backgroundColor: "rgba(31,27,22,0.85)",
            color: "#F7F3ED",
            fontSize: "11px",
            fontWeight: 500,
            padding: "5px 12px",
            letterSpacing: "0.08em",
            zIndex: 2,
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        {/* "Click to expand" hint */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "rgba(31,27,22,0.75)",
            color: "#F7F3ED",
            fontSize: "9px",
            fontWeight: 500,
            padding: "5px 10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            zIndex: 2,
          }}
        >
          ⤢ Click to expand
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "6px",
              zIndex: 2,
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`Go to image ${index + 1}`}
                style={{
                  width: index === currentIndex ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  backgroundColor:
                    index === currentIndex
                      ? "#F7F3ED"
                      : "rgba(247,243,237,0.5)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Lightbox (full-screen gallery)
// ─────────────────────────────────────────
function Lightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const images = project.images;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(31,27,22,0.96)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "48px",
          height: "48px",
          borderRadius: "9999px",
          backgroundColor: "rgba(247,243,237,0.15)",
          border: "none",
          color: "#F7F3ED",
          cursor: "pointer",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10001,
        }}
      >
        ×
      </button>

      {/* Header — project title */}
      <div
        style={{
          paddingTop: "12px",
          paddingBottom: "24px",
          textAlign: "center",
          color: "#F7F3ED",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          style={{
            display: "block",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "#D4B37E",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          {project.category}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {project.title}
        </h3>
      </div>

      {/* Main image area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          minHeight: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "52px",
              borderRadius: "9999px",
              backgroundColor: "rgba(247,243,237,0.15)",
              border: "none",
              color: "#F7F3ED",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            maxWidth: "1200px",
          }}
        >
          <Image
            src={images[currentIndex]}
            alt={`${project.title} — image ${currentIndex + 1}`}
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
          />
        </div>

        {/* Right arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "52px",
              borderRadius: "9999px",
              backgroundColor: "rgba(247,243,237,0.15)",
              border: "none",
              color: "#F7F3ED",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom — thumbnails strip */}
      <div
        style={{
          paddingTop: "24px",
          paddingBottom: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`View image ${index + 1}`}
            style={{
              position: "relative",
              width: "72px",
              height: "72px",
              borderRadius: "2px",
              overflow: "hidden",
              border:
                index === currentIndex
                  ? "2px solid #D4B37E"
                  : "2px solid transparent",
              cursor: "pointer",
              padding: 0,
              backgroundColor: "#EBE4D8",
              opacity: index === currentIndex ? 1 : 0.6,
              transition: "all 0.2s",
            }}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="72px"
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div
        style={{
          textAlign: "center",
          color: "#F7F3ED",
          fontSize: "11px",
          letterSpacing: "0.2em",
          paddingBottom: "4px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {currentIndex + 1} / {images.length} · Use ← → or click thumbnails
      </div>
    </div>
  );
}

export default function OurWorkPage() {
  const [lightboxState, setLightboxState] = useState<{
    projectId: string;
    imageIndex: number;
  } | null>(null);

  const handleImageClick = (projectId: string, imageIndex: number) => {
    setLightboxState({ projectId, imageIndex });
  };

  const activeProject = lightboxState
    ? PROJECTS.find((p) => p.id === lightboxState.projectId) || null
    : null;

  return (
    <>
      {/* HERO */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "40px", paddingBottom: "56px" }}
        >
          <div style={{ maxWidth: "800px" }}>
            <SectionLabel style={{ marginBottom: "20px" }}>
              Our Work · Portfolio
            </SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1F1B16",
                marginBottom: "20px",
              }}
            >
              Spaces we&apos;ve brought to life.
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "24px",
                maxWidth: "680px",
              }}
            >
              A curated selection of residential and commercial interiors
              designed by Built Up Designs in Nashik.
            </p>
            <div
              style={{
                display: "flex",
                gap: "24px",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#8F6633",
                fontWeight: 600,
              }}
            >
              <span>{PROJECTS.length} Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
        <div
          className="container-content"
          style={{ paddingTop: "32px", paddingBottom: "72px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FBF8F3",
                  border: "1px solid rgba(217,207,192,0.5)",
                }}
              >
                <ProjectCarousel
                  project={project}
                  onImageClick={handleImageClick}
                />

                <div
                  style={{
                    padding: "28px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                      color: "#8F6633",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "24px",
                      lineHeight: 1.2,
                      color: "#1F1B16",
                      marginBottom: "12px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#5C5247",
                      marginBottom: "20px",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "9px",
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          color: "#8F6633",
                          border: "1px solid rgba(143,102,51,0.3)",
                          padding: "4px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "64px", paddingBottom: "64px" }}
        >
          <div
            style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}
          >
            <SectionLabel
              style={{
                marginBottom: "16px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              See More
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "#1F1B16",
                marginBottom: "16px",
              }}
            >
              More spaces we&apos;ve designed.
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "28px",
              }}
            >
              Follow us on Instagram for the latest projects, behind-the-scenes
              work, and design inspiration.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  backgroundColor: "#1F1B16",
                  color: "#F7F3ED",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  padding: "14px 24px",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Follow on Instagram
              </a>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(31,27,22,0.6)",
                  color: "#1F1B16",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  padding: "14px 24px",
                  textDecoration: "none",
                }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxState && activeProject && (
        <Lightbox
          project={activeProject}
          initialIndex={lightboxState.imageIndex}
          onClose={() => setLightboxState(null)}
        />
      )}
    </>
  );
}

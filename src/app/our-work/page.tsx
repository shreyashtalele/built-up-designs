// src/app/our-work/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CONTACT } from "@/lib/constants";

type VideoProject = {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
  duration: string;
  videoSrc: string;
  posterSrc: string;
};

type PhotoProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
};

const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "warm-contemporary-residence",
    title: "The Warm Contemporary Residence",
    description:
      "A modern home blending warm wood finishes, marble-look surfaces, and soft ambient lighting. Thoughtful storage and playful study spaces create a welcoming, balanced interior.",
    year: "2025",
    category: "Residential",
    tags: ["Kitchen & Living", "Custom Millwork", "Bedroom & Study"],
    duration: "00:33",
    videoSrc: "/videos/project-1.mp4",
    posterSrc: "/images/hero/hero-image.png",
  },
  {
    id: "modern-office-suite",
    title: "The Modern Office Suite",
    description:
      "A refined workspace featuring warm wood accents, marble-textured walls, and clean white reception counters. Layered lighting and comfortable seating create a polished, welcoming atmosphere.",
    year: "2025",
    category: "Commercial",
    tags: ["Reception Design", "Workspace Interiors", "Custom Millwork"],
    duration: "00:24",
    videoSrc: "/videos/project-2.mp4",
    posterSrc: "/images/hero/hero-imgae-2.png",
  },
];

const PHOTO_PROJECTS: PhotoProject[] = [
  {
    id: "warm-modern-apartment",
    title: "Warm Modern Apartment",
    category: "Residential",
    description:
      "A calm home with natural textures, layered lighting, and thoughtful spatial planning.",
    imageSrc:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: "studio-library",
    title: "Studio & Library",
    category: "Residential",
    description:
      "Custom millwork, quiet corners, and warm wood finishes for focused everyday living.",
    imageSrc:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
  },
  {
    id: "kitchen-living",
    title: "Kitchen & Living",
    category: "Residential",
    description:
      "An open plan with warm wood finishes, marble surfaces, and soft ambient light.",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

// Video card with blurred background + centered vertical video
function VideoCard({
  project,
  onClick,
}: {
  project: VideoProject;
  onClick: () => void;
}) {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const foregroundVideoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState<string>(project.duration);

  const handleMouseEnter = () => {
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play().catch(() => {});
    }
    if (foregroundVideoRef.current) {
      foregroundVideoRef.current.play().catch(() => {});
    }
    setPlaying(true);
  };

  const handleMouseLeave = () => {
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.pause();
      backgroundVideoRef.current.currentTime = 0;
    }
    if (foregroundVideoRef.current) {
      foregroundVideoRef.current.pause();
      foregroundVideoRef.current.currentTime = 0;
    }
    setPlaying(false);
  };

  // Get real duration from video metadata
  const handleLoadedMetadata = () => {
    if (foregroundVideoRef.current) {
      const seconds = Math.round(foregroundVideoRef.current.duration);
      if (seconds > 0 && isFinite(seconds)) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        setVideoDuration(
          `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`,
        );
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(217,207,192,0.5)",
        backgroundColor: "#FBF8F3",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Video preview area */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          backgroundColor: "#1F1B16",
        }}
      >
        {/* Blurred background video */}
        <video
          ref={backgroundVideoRef}
          src={project.videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(20px) brightness(0.6)",
            transform: "scale(1.1)",
            pointerEvents: "none",
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(31,27,22,0.35)",
            pointerEvents: "none",
          }}
        />

        {/* Centered vertical video WITH CONTROLS */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "100%",
              aspectRatio: "9/16",
              boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          >
            <video
              ref={foregroundVideoRef}
              src={project.videoSrc}
              muted
              loop
              playsInline
              controls
              preload="metadata"
              onLoadedMetadata={handleLoadedMetadata}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Category badge top-left — pointer-events none */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            backgroundColor: "rgba(247,243,237,0.95)",
            color: "#8F6633",
            fontSize: "10px",
            fontWeight: 600,
            padding: "5px 12px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            pointerEvents: "none",
          }}
        >
          {project.category}
        </div>

        {/* Duration badge top-right — pointer-events none */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            backgroundColor: "rgba(31,27,22,0.85)",
            color: "#F7F3ED",
            fontSize: "11px",
            fontWeight: 500,
            padding: "5px 10px",
            letterSpacing: "0.08em",
            pointerEvents: "none",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {videoDuration}
        </div>
      </div>

      {/* Info below — NOT clickable (no onClick to modal) */}
      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "22px",
            lineHeight: 1.2,
            color: "#1F1B16",
            marginBottom: "8px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "#5C5247",
            marginBottom: "16px",
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "10px",
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
  );
}

export default function OurWorkPage() {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "32px", paddingBottom: "56px" }}
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
              <span>02 Videos</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{PHOTO_PROJECTS.length} Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PROJECTS */}
      <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
        <div
          className="container-content"
          style={{ paddingTop: "56px", paddingBottom: "56px" }}
        >
          <div style={{ marginBottom: "40px" }}>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Featured Videos
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#1F1B16",
              }}
            >
              See the spaces come to life.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEO_PROJECTS.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onClick={() => setActiveVideo(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO PROJECTS */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "56px", paddingBottom: "72px" }}
        >
          <div style={{ marginBottom: "40px" }}>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Selected Projects
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#1F1B16",
              }}
            >
              More spaces we&apos;ve designed.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PHOTO_PROJECTS.map((project) => (
              <div
                key={project.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FBF8F3",
                  border: "1px solid rgba(217,207,192,0.5)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    backgroundColor: "#EBE4D8",
                  }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                      color: "#8F6633",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "20px",
                      lineHeight: 1.2,
                      color: "#1F1B16",
                      marginBottom: "8px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "#5C5247",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
        <div
          className="container-content"
          style={{ paddingTop: "56px", paddingBottom: "56px" }}
        >
          <div
            style={{ maxWidth: "640px", textAlign: "center", margin: "0 auto" }}
          >
            <SectionLabel
              style={{
                marginBottom: "16px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Stay Connected
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#1F1B16",
                marginBottom: "16px",
              }}
            >
              Follow us for more projects.
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "24px",
              }}
            >
              New interiors, behind-the-scenes work, and design inspirations on
              our Instagram.
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
                  gap: "8px",
                  backgroundColor: "#1F1B16",
                  color: "#F7F3ED",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  padding: "12px 22px",
                  textDecoration: "none",
                }}
              >
                Follow @built_up_designs
              </a>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(31,27,22,0.6)",
                  color: "#1F1B16",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  padding: "12px 22px",
                  textDecoration: "none",
                }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL — full video player */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(31,27,22,0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            overflowY: "auto",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            style={{
              position: "fixed",
              top: "24px",
              right: "24px",
              width: "48px",
              height: "48px",
              borderRadius: "9999px",
              backgroundColor: "rgba(247,243,237,0.15)",
              color: "#F7F3ED",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
            }}
          >
            ×
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "9/16",
                backgroundColor: "#000",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <video
                src={activeVideo.videoSrc}
                controls
                autoPlay
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              style={{
                marginTop: "20px",
                color: "#F7F3ED",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "20px",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}
              >
                {activeVideo.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(247,243,237,0.7)",
                }}
              >
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// src/components/sections/ProjectVideo.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProjectVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
        <div
          className="container-content"
          style={{ paddingTop: "72px", paddingBottom: "72px" }}
        >
          <div style={{ maxWidth: "640px", marginBottom: "40px" }}>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Spaces in Detail
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#1F1B16",
              }}
            >
              The harmony of design and everyday living.
            </h2>
          </div>

          {/* Video Thumbnail / Play Button */}
          <div
            onClick={() => setIsOpen(true)}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              overflow: "hidden",
              backgroundColor: "#1F1B16",
              cursor: "pointer",
            }}
            className="md:!aspect-[21/9]"
          >
            {/* Poster Image */}
            <Image
              src="/videos/home-video-poster.webp"
              alt="Built Up Designs — Project Video Walkthrough"
              fill
              className="object-cover"
              style={{ opacity: 0.85 }}
              sizes="100vw"
            />

            {/* Dark gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(31,27,22,0.85), rgba(31,27,22,0.25) 50%, transparent)",
              }}
            />

            {/* Play Button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(247,243,237,0.95)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s",
                }}
                className="hover:!scale-110"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#1F1B16"
                  style={{ marginLeft: "4px" }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                right: "24px",
              }}
              className="md:!bottom-10 md:!left-10 md:!right-10"
            >
              <span
                style={{
                  display: "block",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#D4B37E",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Visual Walkthrough
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  lineHeight: 1.2,
                  color: "#F7F3ED",
                }}
              >
                Inside Our Projects
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(31,27,22,0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close video"
            style={{
              position: "absolute",
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

          {/* Video Player */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "1000px",
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <video
              src="/videos/home-video.mp4"
              controls
              autoPlay
              playsInline
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

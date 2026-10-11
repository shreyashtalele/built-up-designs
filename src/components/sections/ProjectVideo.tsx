// src/components/sections/ProjectVideo.tsx
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProjectVideo() {
  return (
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

        <div
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
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000&q=80"
            alt="Cinematic interior view"
            fill
            className="object-cover"
            style={{ opacity: 0.7 }}
            sizes="100vw"
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(31,27,22,0.85), rgba(31,27,22,0.25) 50%, transparent)",
            }}
          />

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
                width: "64px",
                height: "64px",
                borderRadius: "9999px",
                backgroundColor: "rgba(247,243,237,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "#1F1B16", marginLeft: "4px" }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              right: "20px",
            }}
            className="md:!bottom-8 md:!left-8 md:!right-8"
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
                fontSize: "clamp(20px, 3vw, 26px)",
                lineHeight: 1.2,
                color: "#F7F3ED",
              }}
            >
              The Vineyard Residence
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

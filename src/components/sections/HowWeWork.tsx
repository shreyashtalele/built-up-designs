// src/components/sections/HowWeWork.tsx
"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Understanding Your Vision",
    description:
      "We begin by understanding your requirements, lifestyle, design preferences, and budget to create a space that reflects your vision.",
  },
  {
    number: "02",
    title: "Site Analysis",
    subtitle: "Space Evaluation & Planning",
    description:
      "We conduct site visits, take measurements, and evaluate the space to develop practical and functional design solutions.",
  },
  {
    number: "03",
    title: "Concept Development",
    subtitle: "Planning & Visualization",
    description:
      "We create furniture layouts, space plans, mood boards, and 3D visualizations to bring your ideas to life.",
  },
  {
    number: "04",
    title: "Design Detailing",
    subtitle: "Drawings & Material Selection",
    description:
      "We prepare detailed furniture drawings, electrical layouts, false ceiling designs, and assist in selecting materials, finishes, and colours.",
  },
  {
    number: "05",
    title: "Project Guidance",
    subtitle: "Execution & Site Coordination",
    description:
      "We provide regular site visits, coordinate with contractors, and offer design guidance throughout execution to ensure the project aligns with the approved design.",
  },
];

export function HowWeWork() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
      <div
        className="container-content"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}
      >
        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "64px" }}>
          <SectionLabel style={{ marginBottom: "16px" }}>
            How We Work
          </SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "#1F1B16",
            }}
          >
            From Ideas to Beautifully Designed Spaces.
          </h2>
        </div>

        {/* Steps container — relative for the connector line */}
        <div style={{ position: "relative" }}>
          {/* Connector line — desktop only, positioned to align with circle centers */}
          <div
            className="hidden lg:block"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "26px",
              left: "26px",
              right: "26px",
              height: "1px",
              backgroundColor: "#D9CFC0",
              zIndex: 0,
            }}
          />

          {/* Grid — 5 columns on desktop */}
          <div
            className="grid grid-cols-1 lg:grid-cols-5"
            style={{
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: index * 0.08 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* Circle number — fixed size, no wrapping */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "9999px",
                    backgroundColor: "#F2ECE3",
                    border: "1px solid #8F6633",
                    color: "#8F6633",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "18px",
                    flexShrink: 0,
                    marginBottom: "24px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {step.number}
                </div>

                {/* Title — now fixed min-height so all align */}
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "20px",
                    lineHeight: 1.25,
                    color: "#1F1B16",
                    marginBottom: "8px",
                    minHeight: "50px",
                  }}
                >
                  {step.title}
                </h3>

                {/* Subtitle — small caps */}
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#8F6633",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    marginBottom: "16px",
                    minHeight: "30px",
                  }}
                >
                  {step.subtitle}
                </span>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "#5C5247",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

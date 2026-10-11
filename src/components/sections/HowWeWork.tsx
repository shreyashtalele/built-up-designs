// src/components/sections/HowWeWork.tsx
"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    tag: "Discovery",
    description:
      "We begin with a conversation — your lifestyle, aesthetic, and what you want the space to do for you.",
  },
  {
    number: "02",
    title: "Understanding",
    tag: "Analysis",
    description:
      "Site visit, spatial analysis, measurements, budget, and timeline. We map the realities before design begins.",
  },
  {
    number: "03",
    title: "Design Planning",
    tag: "Concepts",
    description:
      "Conceptual layouts, functional floor plans, and moodboards. The direction takes shape.",
  },
  {
    number: "04",
    title: "Design Development",
    tag: "Detail",
    description:
      "Detailed drawings, joinery design, material selections, and 3D views. Everything is specified.",
  },
  {
    number: "05",
    title: "Guidance",
    tag: "Handover",
    description:
      "Vendor coordination, site supervision, and quality checks through to handover.",
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
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div style={{ marginBottom: "16px" }}>
            <SectionLabel>How We Work</SectionLabel>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "#1F1B16",
            }}
          >
            A simple process,
            <br className="hidden sm:block" />
            thoughtful results.
          </h2>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connector line — hidden on mobile, spans from center of first circle to center of last circle */}
          <div
            className="hidden lg:block"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "26px",
              left: "26px", // center of first circle (52px / 2)
              right: "26px", // center of last circle
              height: "1px",
              backgroundColor: "#D9CFC0",
              zIndex: 0,
            }}
          />

          <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6"
            style={{ position: "relative", zIndex: 1 }}
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: index * 0.08 }}
                style={{ position: "relative" }}
              >
                {/* Number circle + tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  {/* Circle — solid background so it covers the line */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "9999px",
                      backgroundColor: "#F2ECE3", // solid — same as section bg, covers the line
                      border: "1px solid #8F6633",
                      color: "#8F6633",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "18px",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Tag with background to cover the line where it passes */}
                  <span
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                      color: "#8F6633",
                      fontWeight: 600,
                      backgroundColor: "#F2ECE3",
                      padding: "4px 0",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {step.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "20px",
                    lineHeight: 1.2,
                    color: "#1F1B16",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#5C5247",
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

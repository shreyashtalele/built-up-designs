// src/components/sections/AboutPreview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutPreview() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
      <div
        className="container-content"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="w-full lg:w-1/2"
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(280px, 38vw, 480px)",
                  overflow: "hidden",
                  backgroundColor: "#EBE4D8",
                }}
              >
                <Image
                  src="/images/hero/about-image.webp"
                  alt="Refined interior designed by Built Up Designs in Nashik — warm materials and thoughtful lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div
                className="hidden sm:block"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  backgroundColor: "#FBF8F3",
                  padding: "20px",
                  maxWidth: "260px",
                  border: "1px solid rgba(217,207,192,0.5)",
                  boxShadow: "0 8px 30px rgba(31,27,22,0.06)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Our Approach
                </span>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#5C5247",
                  }}
                >
                  Natural materials, warm lighting, and calm, well-planned
                  layouts.
                </p>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="w-full lg:w-1/2"
          >
            <SectionLabel style={{ marginBottom: "20px" }}>
              About the Studio
            </SectionLabel>

            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#1F1B16",
                marginBottom: "24px",
              }}
            >
              Thoughtful Designs,
              <br className="hidden sm:block" />
              Beautiful Spaces,
              <br className="hidden sm:block" />
              Inspired Living.
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "20px",
                maxWidth: "540px",
              }}
            >
              Built Up Designs is an interior design studio specializing in
              residential and commercial spaces. We believe every space should
              reflect the personality, lifestyle, and vision of its occupants
              while maintaining a perfect balance of aesthetics and
              functionality.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "32px",
                maxWidth: "540px",
              }}
            >
              With a personalized approach, we offer comprehensive interior
              design consultation, from space planning and 3D visualization to
              detailed drawings, material selection, and site coordination. Our
              focus is on creating elegant, practical, and timeless interiors
              while guiding our clients through every stage of their design
              journey.
            </p>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#1F1B16",
                textDecoration: "none",
              }}
            >
              <span>Read Our Story</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

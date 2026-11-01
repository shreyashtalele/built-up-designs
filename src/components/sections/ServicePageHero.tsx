// src/components/sections/ServicePageHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicePageHero() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#F7F3ED" }}
    >
      <div
        className="container-content"
        style={{ paddingTop: "40px", paddingBottom: "64px" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT — TEXT */}
          <div className="w-full lg:w-[50%] order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              style={{ marginBottom: "24px" }}
            >
              <SectionLabel>Our Services</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1F1B16",
                marginBottom: "24px",
              }}
            >
              Thoughtful Design Solutions for Every Space.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#5C5247",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              Transforming residential and commercial spaces through creative
              design, functional planning, and personalized interior solutions.
            </motion.p>

            {/* Small tagline block to fill space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              style={{
                paddingTop: "24px",
                borderTop: "1px solid rgba(217,207,192,0.6)",
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: "#8F6633",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#5C5247",
                    fontWeight: 500,
                  }}
                >
                  Residential
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: "#8F6633",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#5C5247",
                    fontWeight: 500,
                  }}
                >
                  Commercial
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="w-full lg:w-[50%] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(320px, 42vw, 520px)",
                overflow: "hidden",
                backgroundColor: "#EBE4D8",
              }}
            >
              <Image
                src="/images/hero/hero-imgae-2.webp"
                alt="Panoramic interior view by Built Up Designs, Nashik"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Small badge overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgba(247,243,237,0.95)",
                  backdropFilter: "blur(8px)",
                  padding: "10px 16px",
                  border: "1px solid rgba(217,207,192,0.5)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "2px",
                  }}
                >
                  Our Work
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "15px",
                    color: "#1F1B16",
                  }}
                >
                  Interior Practice
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

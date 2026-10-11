// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
      <div
        className="container-content"
        style={{ paddingTop: "40px", paddingBottom: "72px" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* TEXT COLUMN */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#8F6633",
                  fontWeight: 600,
                }}
              >
                Interior Design Consultancy
              </span>
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  backgroundColor: "rgba(143,102,51,0.4)",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(92,82,71,0.7)",
                }}
              >
                Nashik · Mumbai
              </span>
            </motion.div>

            <h1
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1F1B16",
                marginBottom: "24px",
                fontWeight: 400,
              }}
            >
              Designing spaces
              <br />
              <span style={{ fontStyle: "italic" }}>that feel like</span>
              <br />
              home<span style={{ color: "#8F6633" }}>.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "28px",
                maxWidth: "420px",
              }}
            >
              Thoughtful interior design shaped around how you live. Warm
              materials, considered layouts, and calm details.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.65 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "20px",
                marginBottom: "36px",
              }}
            >
              <Button href="/our-work" variant="primary" size="md">
                View Our Work
              </Button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#1F1B16",
                  padding: "10px 0",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    paddingBottom: "4px",
                    borderBottom: "1px solid rgba(31,27,22,0.5)",
                  }}
                >
                  Talk to Us
                </span>
                <span>→</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.85 }}
              style={{
                paddingTop: "24px",
                borderTop: "1px solid rgba(217,207,192,0.6)",
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "9999px",
                    backgroundColor: "#8F6633",
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#5C5247",
                  }}
                >
                  Nashik Studio
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "9999px",
                    backgroundColor: "#8F6633",
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#5C5247",
                  }}
                >
                  Residential · Commercial
                </span>
              </div>
            </motion.div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.3 }}
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(320px, 45vw, 560px)",
                overflow: "hidden",
                backgroundColor: "#EBE4D8",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85"
                alt="Warm, thoughtfully designed interior living space"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "128px",
                  background:
                    "linear-gradient(to top, rgba(31,27,22,0.4), transparent)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1F1B16",
                  color: "#F7F3ED",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "15px",
                }}
              >
                01
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  backgroundColor: "rgba(247,243,237,0.95)",
                  backdropFilter: "blur(8px)",
                  padding: "12px 16px",
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
                    marginBottom: "2px",
                  }}
                >
                  Recent Commission
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "15px",
                    color: "#1F1B16",
                  }}
                >
                  Private Residence
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

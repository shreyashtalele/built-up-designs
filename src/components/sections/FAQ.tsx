// src/components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FAQS = [
  {
    q: "Do you work on residential and commercial projects?",
    a: "Yes. We design both residential interiors (homes, villas, apartments) and commercial spaces (offices, retail, hospitality) across Nashik.",
  },
  {
    q: "How long does an interior design project take?",
    a: "Most residential projects take 6–12 weeks, depending on the scale, scope, and site conditions. Commercial projects may vary. We share a clear timeline after the first site visit.",
  },
  {
    q: "What areas of Nashik do you serve?",
    a: "We serve all major areas of Nashik, including Gangapur Road, College Road, Panchavati, Nashik Road, Indira Nagar, Cidco, Satpur, Ambad, Deolali, and surrounding regions.",
  },
  {
    q: "Do you provide 3D designs and material samples?",
    a: "Yes. Our design process includes detailed 3D visualizations, material palettes, and physical samples so you can see and feel the design before execution.",
  },
  {
    q: "How much does interior design cost?",
    a: "Cost depends on the scope — the size of the space, the materials used, and the level of customization. We offer a free consultation to understand your requirements and provide a transparent quote.",
  },
  {
    q: "Do you handle execution or only design?",
    a: "We handle end-to-end interior design — from concept and detailed drawings to vendor coordination, site supervision, and final handover.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
      <div
        className="container-content"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Common Questions
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
              Frequently asked questions
            </h2>
          </div>

          <div style={{ borderTop: "1px solid #D9CFC0" }}>
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid #D9CFC0",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "22px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      gap: "20px",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.4,
                        color: "#1F1B16",
                        fontFamily: "var(--font-playfair), serif",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontSize: "22px",
                        color: "#8F6633",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                        transition: "transform 0.3s",
                        flexShrink: 0,
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease-out",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "#5C5247",
                        paddingBottom: "22px",
                        paddingRight: "40px",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

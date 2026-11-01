// src/components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FAQS = [
  {
    q: "Do you work on residential and commercial projects?",
    a: "Yes. We design both residential interiors and commercial spaces across Nashik.",
  },
  {
    q: "How long does an interior design project take?",
    a: "Most residential interior projects typically take 6–12 months, depending on the project size, design requirements, scope of work, and site conditions. Commercial project timelines may vary. We provide an estimated project timeline after understanding your requirements and site visit.",
  },
  {
    q: "Do you provide 3D designs and mood boards?",
    a: "Yes. Our design process includes detailed 3D visualizations, thoughtfully curated mood boards, and material palettes to help you visualize the overall design, colours, textures, and finishes before execution begins.",
  },
  {
    q: "How much does interior design cost?",
    a: "The cost depends on the size of the space, project requirements, design scope, material selection, and level of customization. At Built Up Designs, we offer a complimentary first site visit to understand your requirements, discuss your vision, and provide a transparent, customized quotation.",
  },
  {
    q: "Do you handle execution or only design?",
    a: "At Built Up Designs, we specialize in complete interior design consultation, from concept development and detailed drawings to material selection and site coordination. While execution is handled by contractors or the client, we provide professional guidance and regular site visits to ensure the work aligns with the approved design.",
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
            <SectionLabel style={{ marginBottom: "16px" }}>
              Common Questions
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
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
                      padding: "24px 0",
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
                        fontSize: "17px",
                        lineHeight: 1.4,
                        color: "#1F1B16",
                        fontFamily: "var(--font-playfair), serif",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontSize: "24px",
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
                      maxHeight: isOpen ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease-out",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "#5C5247",
                        paddingBottom: "24px",
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

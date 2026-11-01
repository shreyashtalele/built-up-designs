// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CONTACT, LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — Interior Designer Vaishnavi Mogare",
  description:
    "Meet Vaishnavi Mogare, founder of Built Up Designs — a Nashik-based interior design studio creating thoughtful residential and commercial spaces.",
  alternates: {
    canonical: "https://builtupdesigns.com/about",
  },
  openGraph: {
    title: "About Built Up Designs — Interior Designer in Nashik",
    description:
      "Meet Vaishnavi Mogare, founder of Built Up Designs. A Nashik interior design studio.",
    images: ["/og-image.png"],
  },
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start by understanding the space, requirements, and preferences.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Think about how the space should function, flow, and feel.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Develop an interior direction that brings the different elements together.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Pay attention to composition, materials, details, and the overall experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "32px", paddingBottom: "72px" }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <SectionLabel style={{ marginBottom: "20px" }}>
                About Built Up Designs
              </SectionLabel>
              <h1
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 4.5vw, 4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "#1F1B16",
                  marginBottom: "24px",
                }}
              >
                Spaces designed with purpose.
              </h1>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#5C5247",
                  maxWidth: "500px",
                  marginBottom: "32px",
                }}
              >
                Built Up Designs is a Nashik-based interior design studio
                focused on creating thoughtful spaces around how people actually
                live.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <Button href="/contact" variant="primary" size="md">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
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
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=85"
                  alt="Refined interior composition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER — Photo LEFT, Text RIGHT */}
      <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
        <div
          className="container-content"
          style={{ paddingTop: "72px", paddingBottom: "72px" }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* LEFT — Founder Photo (moved from right) */}
            <div className="w-full lg:w-1/2">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/5",
                  maxHeight: "560px",
                  overflow: "hidden",
                  backgroundColor: "#D9CFC0",
                }}
              >
                <Image
                  src="/images/founder.webp"
                  alt="Vaishnavi Mogare — Founder and Interior Designer at Built Up Designs, Nashik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT — Founder Text (moved from left) */}
            <div className="w-full lg:w-1/2">
              <SectionLabel style={{ marginBottom: "20px" }}>
                Founder
              </SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  color: "#1F1B16",
                  marginBottom: "20px",
                }}
              >
                Vaishnavi Mogare
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#8F6633",
                  marginBottom: "24px",
                  fontWeight: 600,
                }}
              >
                Founder · Interior Designer
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#5C5247",
                  marginBottom: "16px",
                }}
              >
                Vaishnavi leads Built Up Designs with a simple belief: good
                interiors are made from clarity, warmth, and materials that age
                well.
              </p>
              <p
                style={{ fontSize: "15px", lineHeight: 1.7, color: "#5C5247" }}
              >
                Her studio handles residential and commercial interiors across
                Nashik — from the first site visit to the final handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "72px", paddingBottom: "72px" }}
        >
          <div style={{ maxWidth: "640px", marginBottom: "48px" }}>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Our Approach
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
              How we think about design
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.number}
                style={{
                  backgroundColor: "#F2ECE3",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "240px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "56px",
                    lineHeight: 1,
                    color: "#D9CFC0",
                    marginBottom: "24px",
                  }}
                >
                  {p.number}
                </span>
                <h3
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#1F1B16",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#5C5247",
                    marginTop: "auto",
                  }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO — Nashik only */}
      <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
        <div
          className="container-content"
          style={{ paddingTop: "72px", paddingBottom: "72px" }}
        >
          <div style={{ marginBottom: "40px" }}>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Visit the Studio
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                color: "#1F1B16",
              }}
            >
              Nashik, Maharashtra
            </h2>
          </div>

          <div
            style={{
              backgroundColor: "#F7F3ED",
              padding: "40px 32px",
              maxWidth: "640px",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                color: "#8F6633",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Studio Address
            </span>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "var(--font-playfair), serif",
                color: "#1F1B16",
                marginBottom: "8px",
              }}
            >
              {CONTACT.address.display}
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "24px",
              }}
            >
              {LOCATIONS.primary.description}
            </p>
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid #D9CFC0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#5C5247",
                }}
              >
                {CONTACT.hours}
              </span>
              <a
                href={`tel:${CONTACT.phone}`}
                style={{
                  fontSize: "14px",
                  color: "#1F1B16",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

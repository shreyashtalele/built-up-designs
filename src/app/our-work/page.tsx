// src/app/our-work/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTASection } from "@/components/sections/CTASection";

type Category = "all" | "residential" | "commercial";

const PROJECTS = [
  {
    id: "gangapur-villa",
    title: "The Gangapur Villa",
    category: "residential" as const,
    location: "Nashik",
    description:
      "Open-format interior with Italian marble counters, fluted timber accents, and warm lighting.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    featured: true,
  },
  {
    id: "bandra-residence",
    title: "Bandra Coastal Residence",
    category: "residential" as const,
    location: "Mumbai",
    description:
      "Bouclé silhouettes, walnut louvers, and travertine stonework for quiet sea-breeze living.",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80",
  },
  {
    id: "atelier-suite",
    title: "Atelier Workplace Suite",
    category: "commercial" as const,
    location: "BKC Mumbai",
    description:
      "Fluted dark timber and travertine table for executive warmth.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    id: "oakwood-retreat",
    title: "Oakwood Retreat",
    category: "residential" as const,
    location: "Nashik",
    description:
      "Sculptural millwork, sheer linen, and muted plaster finishes.",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80",
  },
  {
    id: "apex-hq",
    title: "Apex Corporate Headquarters",
    category: "commercial" as const,
    location: "Mumbai",
    description: "Warm oak paneling and sculptural meeting stations.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
  },
  {
    id: "serenity-penthouse",
    title: "Serenity Penthouse Salon",
    category: "residential" as const,
    location: "Nashik",
    description:
      "Fluted plaster walls, stoneware vessels, low-slung linen seating.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

export default function OurWorkPage() {
  const [active, setActive] = useState<Category>("all");
  const visible =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "32px", paddingBottom: "32px" }}
        >
          <div style={{ maxWidth: "800px" }}>
            <SectionLabel style={{ marginBottom: "20px" }}>
              Our Work · Portfolio
            </SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1F1B16",
                marginBottom: "20px",
              }}
            >
              Spaces we&apos;ve brought to life.
            </h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5C5247" }}>
              A curated selection of residential and commercial projects by
              Built Up Designs across Nashik and Mumbai.
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{
          backgroundColor: "#F7F3ED",
          borderBottom: "1px solid #D9CFC0",
        }}
      >
        <div
          className="container-content"
          style={{ paddingTop: "0px", paddingBottom: "0px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              paddingTop: "20px",
            }}
          >
            {FILTERS.map((f) => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#1F1B16" : "#5C5247",
                    paddingBottom: "20px",
                    borderBottom: isActive
                      ? "2px solid #1F1B16"
                      : "2px solid transparent",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "-1px",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "64px", paddingBottom: "72px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {visible.map((project) => (
              <Link
                key={project.id}
                href="/our-work"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    backgroundColor: "#EBE4D8",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.22em",
                        color: "#8F6633",
                        fontWeight: 600,
                      }}
                    >
                      {project.category === "residential"
                        ? "Residential Interior"
                        : "Commercial Interior"}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "rgba(92,82,71,0.7)",
                      }}
                    >
                      {project.location}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "24px",
                      lineHeight: 1.2,
                      color: "#1F1B16",
                      marginBottom: "10px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "#5C5247",
                      marginBottom: "16px",
                    }}
                  >
                    {project.description}
                  </p>
                  <span
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: "#1F1B16",
                      borderBottom: "1px solid #1F1B16",
                      paddingBottom: "3px",
                    }}
                  >
                    View Project →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

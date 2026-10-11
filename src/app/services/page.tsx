// src/app/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design services in Nashik and Mumbai — residential interiors, commercial spaces, and design consultation.",
};

const SERVICES = [
  {
    number: "01",
    title: "Residential Interiors",
    subtitle: "Private Residences",
    description:
      "Personalised interior design for homes that reflect your lifestyle and comfort. From sweeping estates in Nashik to high-rise penthouses across Mumbai, we create serene private sanctuaries.",
    capabilities: [
      "Bespoke villas & penthouses",
      "Full-scope spatial planning",
      "Custom cabinetry & millwork",
      "Material & lighting curation",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85",
  },
  {
    number: "02",
    title: "Commercial Interiors",
    subtitle: "Corporate & Boutique",
    description:
      "Functional and stylish spaces designed for work, business, and everyday experiences. We translate executive stature and hospitality identity into durable, tactile architecture.",
    capabilities: [
      "Executive suites & studios",
      "Ergonomic space planning",
      "Warm architectural dignity",
      "Brand-aligned material palette",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85",
  },
  {
    number: "03",
    title: "Interior Design Consultation",
    subtitle: "Spatial Advisory",
    description:
      "Expert guidance to help you make the right design decisions. Ideal for clients requiring targeted architectural review, finish palettes, or pre-construction assessment.",
    capabilities: [
      "Spatial & layout audits",
      "Finishes & tactile palettes",
      "Architectural lighting strategy",
      "Contractor & execution plans",
    ],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=85",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "32px", paddingBottom: "48px" }}
        >
          <div style={{ maxWidth: "900px" }}>
            <SectionLabel style={{ marginBottom: "20px" }}>
              Our Services · Nashik · Mumbai
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
              Designing spaces around your needs.
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#5C5247",
                maxWidth: "640px",
              }}
            >
              Interior design consultation and solutions tailored to your space,
              requirements and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      {SERVICES.map((service, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={service.number}
            className="w-full"
            style={{ backgroundColor: index % 2 === 0 ? "#F7F3ED" : "#F2ECE3" }}
          >
            <div
              className="container-content"
              style={{ paddingTop: "72px", paddingBottom: "72px" }}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${reverse ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.2em",
                        color: "#8F6633",
                        fontWeight: 600,
                      }}
                    >
                      {service.number} / PRACTICE
                    </span>
                    <span
                      style={{
                        width: "32px",
                        height: "1px",
                        backgroundColor: "#D9CFC0",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#5C5247",
                      }}
                    >
                      {service.subtitle}
                    </span>
                  </div>

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
                    {service.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "#5C5247",
                      marginBottom: "28px",
                    }}
                  >
                    {service.description}
                  </p>

                  <div style={{ paddingTop: "8px", marginBottom: "32px" }}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#1F1B16",
                        fontWeight: 500,
                        marginBottom: "12px",
                      }}
                    >
                      Core Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {service.capabilities.map((cap) => (
                        <div
                          key={cap}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#8F6633",
                              flexShrink: 0,
                            }}
                          />
                          <span style={{ fontSize: "14px", color: "#1F1B16" }}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button href="/contact" variant="primary" size="md">
                    Inquire About This Service
                  </Button>
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
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <HowWeWork />
    </>
  );
}

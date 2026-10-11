// src/components/sections/ServicesOverview.tsx
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    number: "01",
    title: "Residential Interiors",
    subtitle: "Villas · Penthouses · Apartments",
    description:
      "Personalised interior design for homes that reflect your lifestyle and comfort. Full-scope planning, custom joinery, and material curation.",
  },
  {
    number: "02",
    title: "Commercial Interiors",
    subtitle: "Studios · Offices · Retail",
    description:
      "Functional and stylish spaces designed for work, business, and everyday brand experiences. Ergonomic layouts with warm materials.",
  },
  {
    number: "03",
    title: "Design Consultation",
    subtitle: "Spatial Audits · Material Advisory",
    description:
      "Expert guidance to help you make the right design decisions. Material audits, lighting strategy, and contractor planning.",
  },
];

export function ServicesOverview() {
  return (
    <section
      className="w-full"
      id="services"
      style={{ backgroundColor: "#F7F3ED" }}
    >
      <div
        className="container-content"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginBottom: "48px",
          }}
          className="md:!flex-row md:!items-end md:!justify-between"
        >
          <div>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Our Services
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#1F1B16",
                maxWidth: "540px",
              }}
            >
              Design solutions for every space.
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#5C5247",
              maxWidth: "360px",
            }}
          >
            A focused design practice for residential homes, commercial offices,
            and design consulting.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FBF8F3",
                border: "1px solid rgba(217,207,192,0.5)",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "32px",
                    lineHeight: 1,
                    color: "#8F6633",
                  }}
                >
                  {service.number}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "rgba(92,82,71,0.7)",
                  }}
                >
                  Practice
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "22px",
                  lineHeight: 1.2,
                  color: "#1F1B16",
                  marginBottom: "8px",
                }}
              >
                {service.title}
              </h3>

              <span
                style={{
                  display: "block",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#8F6633",
                  marginBottom: "20px",
                }}
              >
                {service.subtitle}
              </span>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "#5C5247",
                  marginBottom: "28px",
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(217,207,192,0.5)",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#1F1B16",
                  }}
                >
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button href="/services" variant="outline" size="md">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

// src/components/sections/ServicesOverview.tsx
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    number: "01",
    title: "Residential Interiors",
    subtitle: "Apartments · 3,4 BHK Flats",
    description:
      "Creating beautiful, functional homes that reflect your personality and lifestyle. From space planning and 3D visualization to furniture detailing and material selection, we design spaces that feel uniquely yours.",
  },
  {
    number: "02",
    title: "Commercial Interiors",
    subtitle: "Offices · Retail Spaces · Workspaces",
    description:
      "Designing professional, functional, and aesthetically appealing commercial spaces. Our approach combines smart space planning, creative design solutions, and thoughtful detailing to enhance productivity and reflect your business identity.",
  },
  {
    number: "03",
    title: "Design Consultation",
    subtitle: "Space Planning · Material Selection · Project Guidance",
    description:
      "Providing expert guidance from initial concepts to project completion. Our consultation services include design development, detailed drawings, material selection, site visits, and coordination to ensure your vision is brought to life.",
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
            <SectionLabel style={{ marginBottom: "16px" }}>
              Our Services
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#1F1B16",
                maxWidth: "640px",
              }}
            >
              Thoughtful Design Solutions for Every Space.
            </h2>
          </div>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#5C5247",
              maxWidth: "400px",
            }}
          >
            Transforming residential and commercial spaces through creative
            design, functional planning, and personalized interior solutions.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FBF8F3",
                border: "1px solid rgba(217,207,192,0.5)",
                padding: "32px",
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
                    fontSize: "36px",
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
                    fontWeight: 500,
                  }}
                >
                  Practice
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
                {service.title}
              </h3>

              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "#8F6633",
                  marginBottom: "20px",
                  fontWeight: 500,
                }}
              >
                {service.subtitle}
              </span>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#5C5247",
                  flex: 1,
                }}
              >
                {service.description}
              </p>
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

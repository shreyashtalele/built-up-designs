// src/components/sections/ServiceAreas.tsx
import { SectionLabel } from "@/components/ui/SectionLabel";

const AREAS = [
  "Gangapur Road",
  "College Road",
  "Panchavati",
  "Nashik Road",
  "Indira Nagar",
  "Cidco",
  "Satpur",
  "Ambad",
  "Deolali",
];

export function ServiceAreas() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
      <div
        className="container-content"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <SectionLabel
            style={{
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Areas We Serve
          </SectionLabel>

          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "#1F1B16",
              marginBottom: "20px",
            }}
          >
            Serving homes and workspaces across Nashik.
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#5C5247",
              marginBottom: "32px",
            }}
          >
            From private residences to commercial spaces, we design interiors
            across all major areas of Nashik.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            {AREAS.map((area) => (
              <span
                key={area}
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#1F1B16",
                  border: "1px solid rgba(143,102,51,0.3)",
                  padding: "8px 16px",
                  backgroundColor: "#F7F3ED",
                }}
              >
                {area}
              </span>
            ))}
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "rgba(92,82,71,0.7)",
              fontStyle: "italic",
            }}
          >
            And surrounding areas in and around Nashik, Maharashtra.
          </p>
        </div>
      </div>
    </section>
  );
}

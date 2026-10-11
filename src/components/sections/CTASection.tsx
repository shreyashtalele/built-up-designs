// src/components/sections/CTASection.tsx
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CONTACT, getWhatsAppLink } from "@/lib/constants";

export function CTASection() {
  return (
    <section
      className="w-full"
      id="consultation"
      style={{ backgroundColor: "#F7F3ED" }}
    >
      <div
        className="container-content"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}
      >
        <div
          style={{
            backgroundColor: "#F2ECE3",
            border: "1px solid rgba(217,207,192,0.6)",
            padding: "48px 24px",
          }}
          className="md:!p-14 lg:!p-16"
        >
          <div style={{ maxWidth: "640px" }}>
            <SectionLabel style={{ marginBottom: "16px" }}>
              Let&apos;s Design Your Space
            </SectionLabel>

            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#1F1B16",
                marginBottom: "20px",
              }}
            >
              Have a project in mind?
              <br className="hidden sm:block" />
              Let&apos;s discuss your requirements.
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "32px",
                maxWidth: "520px",
              }}
            >
              Whether you are building a new residence in Nashik, redesigning an
              apartment in Mumbai, or planning a workspace, we are here to help.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              <Button href="/contact" variant="primary" size="lg">
                Get a Consultation
              </Button>
              <Button
                href={getWhatsAppLink()}
                variant="outline"
                size="lg"
                external
              >
                WhatsApp Us
              </Button>
            </div>

            <div
              style={{
                paddingTop: "32px",
                borderTop: "1px solid rgba(217,207,192,0.6)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "24px",
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Direct Phone
                </span>
                <a
                  href={`tel:${CONTACT.phone}`}
                  style={{
                    fontSize: "14px",
                    color: "#1F1B16",
                    textDecoration: "none",
                  }}
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Studio Email
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{
                    fontSize: "14px",
                    color: "#1F1B16",
                    textDecoration: "none",
                    wordBreak: "break-all",
                  }}
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Locations
                </span>
                <span style={{ fontSize: "14px", color: "#1F1B16" }}>
                  Nashik · Mumbai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

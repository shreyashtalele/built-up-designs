// src/components/sections/SelectedWork.tsx
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function SelectedWork() {
  return (
    <section
      className="w-full"
      id="featured-projects"
      style={{ backgroundColor: "#F7F3ED" }}
    >
      <div
        className="container-content"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}
      >
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
              Selected Projects
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
              Spaces we&apos;ve brought to life.
            </h2>
          </div>
          <Button href="/our-work" variant="outline" size="md">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Featured — 7/12 */}
          <Link
            href="/our-work"
            className="lg:col-span-7"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FBF8F3",
              border: "1px solid rgba(217,207,192,0.5)",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/11",
                overflow: "hidden",
                backgroundColor: "#EBE4D8",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
                alt="Warm modern living interior with wood paneling and natural light by Built Up Designs, Nashik"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                loading="lazy"
              />
            </div>
            <div style={{ padding: "32px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
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
                  Featured Project
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "rgba(92,82,71,0.7)",
                  }}
                >
                  2025
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "28px",
                  lineHeight: 1.2,
                  color: "#1F1B16",
                  marginBottom: "12px",
                }}
              >
                The Warm Contemporary Residence
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#5C5247",
                  marginBottom: "24px",
                  maxWidth: "520px",
                }}
              >
                A modern home blending warm wood finishes, marble-look surfaces,
                and soft ambient lighting.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#1F1B16",
                }}
              >
                <span>RESIDENTIAL</span>
                <span style={{ color: "#8F6633" }}>·</span>
                <span>NASHIK</span>
              </div>
            </div>
          </Link>

          {/* Supporting — 5/12 */}
          <div
            className="lg:col-span-5"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <Link
              href="/our-work"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FBF8F3",
                border: "1px solid rgba(217,207,192,0.5)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                  backgroundColor: "#EBE4D8",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80"
                  alt="Modern office interior with warm wood accents and clean lines by Built Up Designs, Nashik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px",
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
                    Commercial
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "rgba(92,82,71,0.7)",
                    }}
                  >
                    2025
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "20px",
                    lineHeight: 1.2,
                    color: "#1F1B16",
                    marginBottom: "8px",
                  }}
                >
                  The Modern Office Suite
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "#5C5247",
                  }}
                >
                  Refined workspace with warm wood, marble-textured walls, and
                  layered lighting.
                </p>
              </div>
            </Link>

            <Link
              href="/our-work"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FBF8F3",
                border: "1px solid rgba(217,207,192,0.5)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                  backgroundColor: "#EBE4D8",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Warm interior living space with natural materials by Built Up Designs, Nashik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px",
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
                    Residential
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "rgba(92,82,71,0.7)",
                    }}
                  >
                    2025
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "20px",
                    lineHeight: 1.2,
                    color: "#1F1B16",
                    marginBottom: "8px",
                  }}
                >
                  The Warm Modern Apartment
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "#5C5247",
                  }}
                >
                  A calm home with natural textures, layered lighting, and
                  thoughtful spatial planning.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

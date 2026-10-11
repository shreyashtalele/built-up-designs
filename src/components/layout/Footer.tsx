// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/data/navigation";
import { CONTACT, SITE, LOCATIONS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#F2ECE3", borderTop: "1px solid #D9CFC0" }}
    >
      <div
        className="container-content"
        style={{ paddingTop: "56px", paddingBottom: "56px" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8"
          style={{ paddingBottom: "48px", borderBottom: "1px solid #D9CFC0" }}
        >
          {/* BRAND */}
          <div
            className="md:col-span-5"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <div
                style={{ position: "relative", width: "64px", height: "64px" }}
              >
                <Image
                  src="/images/logo/logo-main.svg"
                  alt="Built Up Designs"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#5C5247",
                maxWidth: "360px",
              }}
            >
              {SITE.description}
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid #D9CFC0",
                  color: "#1F1B16",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  textDecoration: "none",
                }}
              >
                IG
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid #D9CFC0",
                  color: "#1F1B16",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  textDecoration: "none",
                }}
              >
                WA
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div
            className="md:col-span-3"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <span
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                color: "#8F6633",
                fontWeight: 600,
              }}
            >
              Explore
            </span>
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    color: "#5C5247",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* STUDIOS */}
          <div
            className="md:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <span
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                color: "#8F6633",
                fontWeight: 600,
              }}
            >
              Studios
            </span>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1F1B16",
                  }}
                >
                  Nashik
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#5C5247",
                    marginTop: "4px",
                  }}
                >
                  {LOCATIONS.primary.area}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1F1B16",
                  }}
                >
                  Mumbai
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#5C5247",
                    marginTop: "4px",
                  }}
                >
                  {LOCATIONS.secondary.area}
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div
            className="md:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <span
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                color: "#8F6633",
                fontWeight: 600,
              }}
            >
              Get in Touch
            </span>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <a
                href={`tel:${CONTACT.phone}`}
                style={{
                  fontSize: "14px",
                  color: "#5C5247",
                  textDecoration: "none",
                }}
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                style={{
                  fontSize: "12px",
                  color: "#5C5247",
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                {CONTACT.email}
              </a>
              <span style={{ fontSize: "12px", color: "#5C5247" }}>
                {CONTACT.hours}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            paddingTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(92,82,71,0.7)",
            }}
          >
            © {currentYear} Built Up Designs. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(92,82,71,0.7)",
            }}
          >
            <span>Interior Design Studio</span>
            <span style={{ color: "#8F6633" }}>/</span>
            <span>Nashik · Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/data/navigation";
import { CONTACT, SITE } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  border: "1px solid #D9CFC0",
  color: "#1F1B16",
  textDecoration: "none",
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#F2ECE3", borderTop: "1px solid #D9CFC0" }}
    >
      <div
        className="container-content"
        style={{ paddingTop: "56px", paddingBottom: "40px" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8"
          style={{ paddingBottom: "40px", borderBottom: "1px solid #D9CFC0" }}
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
                style={{ position: "relative", width: "72px", height: "72px" }}
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
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: "#8F6633",
                lineHeight: 1.4,
              }}
            >
              {SITE.tagline}
            </p>
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
                aria-label="Instagram"
                style={socialLinkStyle}
              >
                <InstagramIcon />
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={socialLinkStyle}
              >
                <WhatsAppIcon />
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

          {/* STUDIO — Nashik only */}
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
              Studio
            </span>
            <div>
              <p
                style={{ fontSize: "14px", fontWeight: 600, color: "#1F1B16" }}
              >
                Nashik
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#5C5247",
                  marginTop: "4px",
                  lineHeight: 1.6,
                }}
              >
                M.G. Road, Nashik,
                <br />
                Maharashtra
              </p>
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
            paddingTop: "28px",
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
              gap: "20px",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(92,82,71,0.7)",
            }}
          >
            <span>Interior Design Studio</span>
            <span style={{ color: "#8F6633" }}>/</span>
            <span>Nashik, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

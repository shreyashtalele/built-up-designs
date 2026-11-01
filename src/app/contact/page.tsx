// src/app/contact/page.tsx
import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CONTACT, getWhatsAppLink, getPhoneLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Interior Design Studio in Nashik",
  description:
    "Get in touch with Built Up Designs — Nashik interior design studio. Call, WhatsApp, or email us. Studio at M.G. Road, Nashik.",
  alternates: {
    canonical: "https://builtupdesigns.com/contact",
  },
  openGraph: {
    title: "Contact Built Up Designs — Interior Design Studio Nashik",
    description:
      "Get in touch with Built Up Designs. Studio at M.G. Road, Nashik. WhatsApp, call, or email.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "32px", paddingBottom: "56px" }}
        >
          <div style={{ maxWidth: "720px" }}>
            <SectionLabel style={{ marginBottom: "20px" }}>
              Get in Touch
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
              Let&apos;s talk about your space.
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#5C5247",
                marginBottom: "32px",
              }}
            >
              Have an interior project in mind? Get in touch with Built Up
              Designs to discuss your requirements.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <Button
                href={getWhatsAppLink()}
                variant="primary"
                size="lg"
                external
              >
                Talk to Us on WhatsApp
              </Button>
              <Button href={getPhoneLink()} variant="outline" size="lg">
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO INFO */}
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

          <div style={{ backgroundColor: "#F7F3ED", padding: "32px" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.24em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Address
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#1F1B16",
                  }}
                >
                  {CONTACT.address.display}
                </p>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.24em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Hours
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#1F1B16",
                  }}
                >
                  {CONTACT.hours}
                </p>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.24em",
                    color: "#8F6633",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Contact
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#1F1B16",
                  }}
                >
                  <a
                    href={`tel:${CONTACT.phone}`}
                    style={{ color: "#1F1B16", textDecoration: "none" }}
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                  <br />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{
                      color: "#1F1B16",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                  >
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CHANNELS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#F7F3ED",
                padding: "32px",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.24em",
                  color: "#5C5247",
                }}
              >
                Channel 01
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "24px",
                  color: "#1F1B16",
                  marginTop: "12px",
                  marginBottom: "8px",
                }}
              >
                WhatsApp
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#5C5247",
                  marginBottom: "20px",
                }}
              >
                Start a conversation directly.
              </p>
              <span
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#1F1B16",
                  borderBottom: "1px solid #8F6633",
                  paddingBottom: "4px",
                }}
              >
                Message Us →
              </span>
            </a>

            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#F7F3ED",
                padding: "32px",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.24em",
                  color: "#5C5247",
                }}
              >
                Channel 02
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "24px",
                  color: "#1F1B16",
                  marginTop: "12px",
                  marginBottom: "8px",
                }}
              >
                Instagram
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#5C5247",
                  marginBottom: "20px",
                }}
              >
                See our latest work.
              </p>
              <span
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#1F1B16",
                  borderBottom: "1px solid #8F6633",
                  paddingBottom: "4px",
                }}
              >
                View Instagram →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="w-full" style={{ backgroundColor: "#F7F3ED" }}>
        <div
          className="container-content"
          style={{ paddingTop: "72px", paddingBottom: "72px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel style={{ marginBottom: "16px" }}>
                Project Inquiry
              </SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.1,
                  color: "#1F1B16",
                  marginBottom: "20px",
                }}
              >
                Tell us about your project.
              </h2>
              <p
                style={{ fontSize: "16px", lineHeight: 1.7, color: "#5C5247" }}
              >
                Share a few details and we&apos;ll get back to you on WhatsApp
                within one working day.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div
                style={{ backgroundColor: "#F2ECE3", padding: "40px 32px" }}
                className="md:!p-12"
              >
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// src/app/contact/page.tsx
import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CONTACT, getWhatsAppLink, getPhoneLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Built Up Designs for interior design consultation in Nashik and Mumbai.",
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

      {/* CHANNELS */}
      <section className="w-full" style={{ backgroundColor: "#F2ECE3" }}>
        <div
          className="container-content"
          style={{ paddingTop: "72px", paddingBottom: "72px" }}
        >
          <div style={{ marginBottom: "40px" }}>
            <SectionLabel style={{ marginBottom: "12px" }}>
              Choose a Channel
            </SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                color: "#1F1B16",
              }}
            >
              Three ways to connect.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              style={{
                backgroundColor: "#F7F3ED",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "280px",
              }}
            >
              <div>
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
                <div
                  style={{
                    backgroundColor: "#F2ECE3",
                    padding: "12px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#1F1B16" }}>
                    {CONTACT.phoneDisplay}
                  </span>
                </div>
              </div>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#1F1B16",
                  textDecoration: "none",
                  borderBottom: "1px solid #8F6633",
                  paddingBottom: "4px",
                  width: "fit-content",
                }}
              >
                Message on WhatsApp →
              </a>
            </div>

            <div
              style={{
                backgroundColor: "#F7F3ED",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "280px",
              }}
            >
              <div>
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
                  Phone
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#5C5247",
                    marginBottom: "20px",
                  }}
                >
                  Speak with the studio.
                </p>
                <div
                  style={{
                    backgroundColor: "#F2ECE3",
                    padding: "12px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#1F1B16" }}>
                    {CONTACT.phoneDisplay}
                  </span>
                </div>
              </div>
              <a
                href={getPhoneLink()}
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#1F1B16",
                  textDecoration: "none",
                  borderBottom: "1px solid #8F6633",
                  paddingBottom: "4px",
                  width: "fit-content",
                }}
              >
                Call Us →
              </a>
            </div>

            <div
              style={{
                backgroundColor: "#F7F3ED",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "280px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.24em",
                    color: "#5C5247",
                  }}
                >
                  Channel 03
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
                <div
                  style={{
                    backgroundColor: "#F2ECE3",
                    padding: "12px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#1F1B16" }}>
                    {CONTACT.instagram}
                  </span>
                </div>
              </div>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#1F1B16",
                  textDecoration: "none",
                  borderBottom: "1px solid #8F6633",
                  paddingBottom: "4px",
                  width: "fit-content",
                }}
              >
                View Instagram →
              </a>
            </div>
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

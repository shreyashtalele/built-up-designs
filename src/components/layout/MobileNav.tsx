// src/components/layout/MobileNav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
import { CONTACT, getWhatsAppLink } from "@/lib/constants";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div
      className="lg:hidden"
      style={{
        position: "fixed",
        top: "64px",
        left: 0,
        right: 0,
        height: "calc(100vh - 64px)",
        width: "100vw",
        backgroundColor: "#F7F3ED",
        zIndex: 9999,
        overflowY: "auto",
        display: isOpen ? "block" : "none",
      }}
    >
      <nav
        aria-label="Mobile navigation"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 20px 32px",
        }}
      >
        {/* Small header inside drawer for depth */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            paddingBottom: "16px",
            marginBottom: "8px",
            borderBottom: "1px solid rgba(217,207,192,0.6)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/logo/logo-main.svg"
              alt="Built Up Designs"
              fill
              className="object-contain"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "14px",
                color: "#1F1B16",
                lineHeight: 1.2,
              }}
            >
              Built Up Designs
            </span>
            <span
              style={{
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#8F6633",
                marginTop: "2px",
              }}
            >
              Interior Studio · Nashik
            </span>
          </div>
        </div>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "18px",
              padding: "14px 0",
              borderBottom: "1px solid rgba(217,207,192,0.6)",
              color: isActive(link.href) ? "#1F1B16" : "#5C5247",
              textDecoration: "none",
              display: "block",
            }}
          >
            {link.label}
          </Link>
        ))}

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <a
            href={`tel:${CONTACT.phone}`}
            style={{
              fontSize: "13px",
              color: "#5C5247",
              textDecoration: "none",
            }}
          >
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            style={{
              fontSize: "13px",
              color: "#5C5247",
              textDecoration: "none",
              wordBreak: "break-all",
            }}
          >
            {CONTACT.email}
          </a>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Link
            href="/contact"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1F1B16",
              color: "#F7F3ED",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              padding: "14px 20px",
              textDecoration: "none",
            }}
          >
            Get a Consultation
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(31,27,22,0.6)",
              color: "#1F1B16",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              padding: "14px 20px",
              textDecoration: "none",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </nav>
    </div>
  );
}

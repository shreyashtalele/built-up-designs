// src/components/layout/MobileNav.tsx
"use client";

import Link from "next/link";
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
    <>
      <style jsx global>{`
        @media (min-width: 1024px) {
          .mobile-nav-backdrop,
          .mobile-nav-drawer {
            display: none !important;
          }
        }
      `}</style>

      {/* BACKDROP */}
      <div
        className="mobile-nav-backdrop"
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(31,27,22,0.4)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 40,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* DRAWER */}
      <div
        className="mobile-nav-drawer"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#F7F3ED",
          zIndex: 40,
          overflowY: "auto",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "32px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgba(217,207,192,0.6)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "22px",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(217,207,192,0.6)",
                  color: isActive(link.href) ? "#1F1B16" : "#5C5247",
                  textDecoration: "none",
                }}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
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
                fontSize: "14px",
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
              marginTop: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
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
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                padding: "16px 20px",
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
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                padding: "16px 20px",
                textDecoration: "none",
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

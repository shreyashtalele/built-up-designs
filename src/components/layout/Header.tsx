// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <style jsx global>{`
        @media (min-width: 1024px) {
          .header-desktop-nav {
            display: flex !important;
          }
          .header-mobile-toggle {
            display: none !important;
          }
          .header-cta {
            display: inline-flex !important;
          }
        }
        @media (max-width: 1023px) {
          .header-desktop-nav {
            display: none !important;
          }
          .header-mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 639px) {
          .header-cta {
            display: none !important;
          }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled
            ? "rgba(247,243,237,0.95)"
            : "rgba(247,243,237,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(217,207,192,0.6)"
            : "1px solid transparent",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        <div className="container-content">
          <div
            style={{
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            {/* LOGO */}
            <Link
              href="/"
              aria-label="Built Up Designs — Home"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <div
                style={{ position: "relative", width: "44px", height: "44px" }}
              >
                <Image
                  src="/images/logo/logo-main.svg"
                  alt="Built Up Designs"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="header-desktop-nav"
              aria-label="Main navigation"
              style={{
                alignItems: "center",
                gap: "28px",
              }}
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      position: "relative",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontWeight: active ? 600 : 500,
                      color: active ? "#1F1B16" : "#5C5247",
                      paddingBottom: "4px",
                      textDecoration: "none",
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "1px",
                        width: active ? "100%" : "0%",
                        backgroundColor: "#8F6633",
                        transition: "width 0.3s",
                      }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SIDE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexShrink: 0,
              }}
            >
              {/* CTA */}
              <Link
                href="/contact"
                className="header-cta"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1F1B16",
                  color: "#F7F3ED",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontWeight: 500,
                  padding: "10px 20px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8F6633";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F1B16";
                }}
              >
                Get a Consultation
              </Link>

              {/* HAMBURGER */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="header-mobile-toggle"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "36px",
                  height: "36px",
                  gap: "5px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "1.5px",
                    backgroundColor: "#1F1B16",
                    transition: "transform 0.3s, opacity 0.3s",
                    transform: mobileOpen
                      ? "rotate(45deg) translateY(6.5px)"
                      : "none",
                  }}
                />
                <span
                  style={{
                    width: "20px",
                    height: "1.5px",
                    backgroundColor: "#1F1B16",
                    transition: "transform 0.3s, opacity 0.3s",
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    width: "20px",
                    height: "1.5px",
                    backgroundColor: "#1F1B16",
                    transition: "transform 0.3s, opacity 0.3s",
                    transform: mobileOpen
                      ? "rotate(-45deg) translateY(-6.5px)"
                      : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>
    </>
  );
}

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
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
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
        <div className="h-16 flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Built Up Designs — Home"
            className="flex items-center shrink-0"
          >
            <div className="relative w-11 h-11">
              <Image
                src="/images/logo/logo-main.svg"
                alt="Built Up Designs"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV — hidden below lg, flex above */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1"
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    fontWeight: active ? 600 : 500,
                    color: active ? "#1F1B16" : "#5C5247",
                    textDecoration: "none",
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        backgroundColor: "#8F6633",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 shrink-0">
            {/* CTA — hidden below sm */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center"
              style={{
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
            >
              Get a Consultation
            </Link>

            {/* HAMBURGER — hidden above lg */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
              style={{
                gap: "5px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                style={{
                  width: "22px",
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
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#1F1B16",
                  transition: "transform 0.3s, opacity 0.3s",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: "22px",
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
  );
}

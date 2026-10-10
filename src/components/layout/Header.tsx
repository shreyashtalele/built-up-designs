// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-surface-container-highest">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-space-sm group"
          aria-label="Built Up Designs — Home"
        >
          <div className="w-10 h-10 overflow-hidden flex items-center justify-center border border-surface-container-highest bg-surface-container-low">
            <span className="font-display text-title-lg text-primary leading-none">
              B
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-body text-title-lg tracking-wider text-primary uppercase leading-none">
              Built Up Designs
            </span>
            <span className="font-body text-label-sm text-on-surface-variant tracking-[0.25em] uppercase mt-0.5">
              Interior Architecture &amp; Spatial Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-space-lg"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-label-md uppercase tracking-[0.14em] py-1 transition-colors duration-300",
                isActive(link.href)
                  ? "text-primary font-semibold border-b border-secondary"
                  : "text-on-surface-variant hover:text-secondary",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-space-md">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get a Consultation
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "w-6 h-[1.5px] bg-primary transition-all duration-300",
                mobileOpen && "rotate-45 translate-y-[7px]",
              )}
            />
            <span
              className={cn(
                "w-6 h-[1.5px] bg-primary transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "w-6 h-[1.5px] bg-primary transition-all duration-300",
                mobileOpen && "-rotate-45 -translate-y-[7px]",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

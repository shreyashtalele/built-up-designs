// src/components/layout/MobileNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
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
      {/* Backdrop */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 z-40",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "lg:hidden fixed top-20 left-0 right-0 bg-surface border-b border-surface-container-highest z-40",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none",
        )}
      >
        <nav
          className="flex flex-col px-margin-mobile md:px-margin-tablet py-space-lg gap-space-md"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "font-body text-title-lg uppercase tracking-[0.14em] py-3 border-b border-surface-container-highest transition-colors duration-300",
                isActive(link.href)
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-secondary",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-space-sm pt-space-md">
            <Button href="/contact" variant="primary" size="md">
              Get a Consultation
            </Button>
            <Button
              href={getWhatsAppLink()}
              variant="secondary"
              size="md"
              external
            >
              Talk to Us on WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-1 pt-space-md border-t border-surface-container-highest">
            <a
              href={`tel:${CONTACT.phone}`}
              className="font-body text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-body text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              {CONTACT.email}
            </a>
            <span className="font-body text-label-sm text-outline uppercase tracking-widest mt-2">
              Nashik · Mumbai
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

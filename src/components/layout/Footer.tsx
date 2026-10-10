// src/components/layout/Footer.tsx
import Link from "next/link";
import { NAV_LINKS } from "@/data/navigation";
import { CONTACT, SITE, LOCATIONS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container-highest">
      <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-gutter pb-space-xl border-b border-surface-container-highest">
          {/* Column 1: Brand */}
          <div className="md:col-span-5 flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-11 h-11 border border-surface-container-highest flex items-center justify-center bg-surface-container-lowest">
                <span className="font-display text-title-lg text-primary leading-none">
                  B
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-title-lg tracking-widest text-primary uppercase">
                  Built Up Designs
                </span>
                <span className="font-body text-label-sm text-on-surface-variant tracking-[0.2em] uppercase">
                  Nashik &middot; Mumbai
                </span>
              </div>
            </div>
            <p className="font-body text-body-md text-on-surface-variant max-w-sm mt-space-xs">
              {SITE.description}
            </p>
            <div className="mt-space-sm flex flex-col gap-1.5 font-body text-label-sm tracking-widest text-on-surface-variant uppercase">
              <p>Studio Locations: Nashik / Mumbai, Maharashtra</p>
              <p>Registration: Architectural &amp; Interior Design Practice</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 flex flex-col gap-space-md">
            <span className="font-body text-label-sm uppercase tracking-[0.2em] text-primary">
              Spatial Portfolio
            </span>
            <nav
              className="flex flex-col gap-2.5"
              aria-label="Footer navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Studios */}
          <div className="md:col-span-2 flex flex-col gap-space-md">
            <span className="font-body text-label-sm uppercase tracking-[0.2em] text-primary">
              Studios
            </span>
            <div className="flex flex-col gap-space-sm font-body text-body-md text-on-surface-variant">
              <div>
                <p className="font-semibold text-on-surface">Nashik Studio</p>
                <p>{LOCATIONS.primary.area}</p>
              </div>
              <div>
                <p className="font-semibold text-on-surface">Mumbai Atelier</p>
                <p>{LOCATIONS.secondary.area}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-2 flex flex-col gap-space-md">
            <span className="font-body text-label-sm uppercase tracking-[0.2em] text-primary">
              Studio Concierge
            </span>
            <div className="flex flex-col gap-3 font-body text-body-md text-on-surface-variant">
              <div className="flex flex-col">
                <span className="font-body text-label-sm text-primary uppercase tracking-wider">
                  Direct
                </span>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-secondary transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-label-sm text-primary uppercase tracking-wider">
                  Inquiries
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-secondary transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-label-sm text-primary uppercase tracking-wider">
                  Social
                </span>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {CONTACT.instagram}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-label-sm text-primary uppercase tracking-wider">
                  Hours
                </span>
                <span>{CONTACT.hours}</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block text-left font-body text-label-md text-primary uppercase tracking-[0.14em] border-b border-secondary pb-0.5 hover:text-secondary transition-colors duration-300 mt-space-xs"
            >
              {"Book Studio Appointment \u2192"}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-body text-label-sm tracking-wider text-on-surface-variant uppercase">
          <p>
            {"\u00A9"} {currentYear} BUILT UP DESIGNS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span>Bespoke Interior Consultancy</span>
            <span>/</span>
            <span>Nashik &middot; Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

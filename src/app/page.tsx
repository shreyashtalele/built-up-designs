// src/app/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ProjectVideo } from "@/components/sections/ProjectVideo";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Interior Design Studio in Nashik",
  description:
    "Built Up Designs is a Nashik-based interior design studio creating warm, functional homes and workspaces. Residential and commercial interiors with natural materials and thoughtful layouts.",
  alternates: {
    canonical: "https://buildupdesigns.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://built-up-designs.vercel.app",
    siteName: "Built Up Designs",
    title: "Built Up Designs | Interior Design Studio in Nashik",
    description:
      "Nashik-based interior design studio creating warm, functional homes and workspaces.",
    images: [
      {
        url: "https://built-up-designs.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Built Up Designs — Interior Design Studio in Nashik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built Up Designs | Interior Design Studio in Nashik",
    description:
      "Nashik-based interior design studio creating warm, functional homes and workspaces.",
    images: ["https://built-up-designs.vercel.app/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <ServiceAreas />
      <HowWeWork />
      <SelectedWork />
      <ProjectVideo />
      <FAQ />
      <CTASection />
    </>
  );
}

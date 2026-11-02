// src/app/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ProjectVideo } from "@/components/sections/ProjectVideo";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Interior Design Studio in Nashik | Built Up Designs",
  description:
    "Nashik-based interior design studio for residential and commercial spaces. Space planning, 3D visualization, and design consultation.",
  alternates: {
    canonical: "https://builtupdesigns.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://built-up-designs.vercel.app", // ✅ Correct URL
    siteName: "Built Up Designs",
    title: "Built Up Designs | Interior Design Studio in Nashik",
    description:
      "Nashik-based interior design studio for residential and commercial spaces.",
    images: [
      {
        url: "https://built-up-designs.vercel.app/og-image.png", // ✅ Correct Image
        width: 1200,
        height: 630,
        alt: "Built Up Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built Up Designs | Interior Design Studio in Nashik",
    description:
      "Nashik-based interior design studio for residential and commercial spaces.",
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
      <ProjectVideo />
      <FAQ />
      <CTASection />
    </>
  );
}

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

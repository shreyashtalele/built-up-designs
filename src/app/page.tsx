// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ProjectVideo } from "@/components/sections/ProjectVideo";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <HowWeWork />
      <SelectedWork />
      <ProjectVideo />
      <CTASection />
    </>
  );
}

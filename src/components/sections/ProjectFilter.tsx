// src/components/sections/ProjectFilter.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Category = "all" | "residential" | "commercial";

type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "all">;
  location: string;
  description: string;
  featured?: boolean;
  size?: "large" | "medium" | "wide";
};

const PROJECTS: Project[] = [
  {
    id: "gangapur-villa",
    title: "The Gangapur Villa",
    category: "residential",
    location: "Nashik, Maharashtra",
    description:
      "An expansive open-format interior balancing natural Italian marble counters with fluted timber accents and warm low-glare architectural lighting.",
    featured: true,
    size: "wide",
  },
  {
    id: "atelier-workplace",
    title: "Atelier Workplace Suite",
    category: "commercial",
    location: "BKC, Mumbai",
    description:
      "Fluted dark timber paneling with a monolith travertine table, balancing executive discipline and hospitality warm-minimalism.",
    size: "medium",
  },
  {
    id: "bandra-residence",
    title: "Bandra Coastal Residence",
    category: "residential",
    location: "Mumbai",
    description:
      "Bouclé silhouettes, warm architectural walnut louvers, and bespoke travertine stonework crafted for quiet sea-breeze illumination.",
    size: "medium",
  },
  {
    id: "vintner-residence",
    title: "The Vintner Residence",
    category: "residential",
    location: "Nashik",
    description:
      "A cinematic walkthrough highlighting tactile materiality, daylit circulation, and custom millwork detailing engineered for quiet living.",
    size: "wide",
  },
  {
    id: "olive-grove-kitchen",
    title: "Olive Grove Kitchen & Breakfast Lounge",
    category: "residential",
    location: "Nashik",
    description:
      "Fluted island in honed beige limestone accented with bespoke minimal oak cabinetry and architectural illumination.",
    size: "medium",
  },
  {
    id: "apex-headquarters",
    title: "Apex Corporate Headquarters",
    category: "commercial",
    location: "Mumbai",
    description:
      "Warm oak fluted paneling and sculptural meeting stations configured to support acoustic intimacy and corporate grace.",
    size: "medium",
  },
  {
    id: "serenity-penthouse",
    title: "Serenity Penthouse Salon",
    category: "residential",
    location: "Nashik",
    description:
      "Tactile fluted plaster walls, sculptural stoneware vessels, and low-slung linen seating oriented toward generous natural light.",
    size: "wide",
  },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

export function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const visibleProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter Bar */}
      <section className="w-full max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-16 lg:mb-24">
        <div className="flex items-center justify-between border-b border-surface-container-highest pb-4">
          <div className="flex items-center gap-8 sm:gap-12">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "font-body text-label-md uppercase tracking-[0.16em] pb-4 relative transition-colors",
                  activeFilter === filter.value
                    ? "text-on-surface font-semibold"
                    : "text-on-surface-variant hover:text-on-surface font-medium",
                )}
              >
                {filter.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300",
                    activeFilter === filter.value
                      ? "bg-on-surface"
                      : "bg-transparent",
                  )}
                />
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2 font-body text-label-sm uppercase tracking-[0.14em] text-on-surface-variant">
            <span>Curated Works</span>
            <span className="text-secondary">·</span>
            <span>
              {String(visibleProjects.length).padStart(2, "0")} Selected
            </span>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="w-full max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {visibleProjects.map((project, index) => {
            const isWide = project.size === "wide";
            const isOffset = index % 2 === 1 && !isWide;

            return (
              <Link
                key={project.id}
                href="/our-work"
                className={cn(
                  "group flex flex-col gap-5",
                  isWide ? "lg:col-span-12" : "lg:col-span-6",
                  isOffset && "lg:mt-12",
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-surface-container",
                    isWide
                      ? "aspect-[16/10] sm:aspect-[21/10]"
                      : "aspect-[4/5]",
                  )}
                >
                  <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-high flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <span className="font-display text-headline-md text-on-surface-variant/50">
                      {project.title}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-6 left-6 bg-surface/90 px-3 py-1 text-on-surface font-body text-label-sm uppercase tracking-[0.16em]">
                      Featured Masterwork
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 pt-1">
                  <div className="flex flex-col gap-1">
                    <h3
                      className={cn(
                        "font-display text-on-surface group-hover:text-secondary transition-colors",
                        isWide ? "text-headline-md" : "text-headline-sm",
                      )}
                    >
                      {project.title}
                    </h3>
                    <span className="font-body text-label-sm uppercase tracking-[0.16em] text-on-surface-variant">
                      {project.category === "residential"
                        ? "Residential Interior"
                        : "Commercial Interior"}{" "}
                      · {project.location}
                    </span>
                  </div>
                  <p className="font-body text-body-md text-on-surface-variant line-clamp-2">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-label-md uppercase tracking-[0.14em] text-on-surface group-hover:text-secondary transition-colors self-start border-b border-on-surface group-hover:border-secondary pb-1">
                    View Project →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {visibleProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-body-md text-on-surface-variant">
              No projects in this category yet.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

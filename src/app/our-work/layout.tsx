// src/app/our-work/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Interior Design Projects in Nashik",
  description:
    "Explore the residential and commercial interior design projects by Built Up Designs in Nashik. See our video walkthroughs and design work.",
  alternates: {
    canonical: "https://buildupdesigns.com/our-work",
  },
  openGraph: {
    title: "Our Work | Built Up Designs — Interior Design Projects in Nashik",
    description:
      "See our interior design projects in Nashik — residential and commercial spaces.",
    images: ["/og-image.png"],
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

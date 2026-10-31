// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { WhatsAppPopup } from "@/components/ui/WhatsAppPopup";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildupdesigns.com"),
  title: {
    default: "Built Up Designs | Interior Design Studio in Nashik",
    template: "%s | Built Up Designs",
  },
  description:
    "Built Up Designs is a Nashik-based interior design studio creating warm, functional homes and workspaces. Residential, commercial, and design consultation services.",
  keywords: [
    "interior designer in Nashik",
    "interior design studio Nashik",
    "residential interior design Nashik",
    "commercial interior design Nashik",
    "modular kitchen Nashik",
    "wardrobe design Nashik",
    "Built Up Designs",
    "Vaishnavi Mogare",
  ],
  authors: [{ name: "Built Up Designs" }],
  creator: "Built Up Designs",
  publisher: "Built Up Designs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Built Up Designs",
    url: "https://built-up-designs.vercel.app",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://buildupdesigns.com",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F7F3ED",
  width: "device-width",
  initialScale: 1,
};

// Local Business JSON-LD
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://buildupdesigns.com",
  name: "Built Up Designs",
  alternateName: "Built Up Designs Interior Studio",
  description:
    "Interior design studio based in Nashik, Maharashtra. Creating warm, functional homes and workspaces.",
  url: "https://buildupdesigns.com",
  telephone: "+917507520026",
  email: "designsbuiltup@gmail.com",
  image: "https://buildupdesigns.com/og-image.png",
  logo: "https://buildupdesigns.com/images/logo/logo-main.svg",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "M.G. Road",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    postalCode: "422001",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Nashik",
    },
  ],
  sameAs: [
    "https://instagram.com/built_up_designs",
    "https://wa.me/917507520026",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Vaishnavi Mogare",
    jobTitle: "Interior Designer",
  },
  knowsAbout: [
    "Interior Design",
    "Residential Interiors",
    "Commercial Interiors",
    "Modular Kitchens",
    "Custom Millwork",
    "Spatial Planning",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work on residential and commercial projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design both residential interiors (homes, villas, apartments) and commercial spaces (offices, retail, hospitality) across Nashik.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an interior design project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential projects take 6–12 weeks, depending on the scale, scope, and site conditions. Commercial projects may vary. We share a clear timeline after the first site visit.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Nashik do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all major areas of Nashik, including Gangapur Road, College Road, Panchavati, Nashik Road, Indira Nagar, Cidco, Satpur, Ambad, Deolali, and surrounding regions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 3D designs and material samples?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our design process includes detailed 3D visualizations, material palettes, and physical samples so you can see and feel the design before execution.",
      },
    },
    {
      "@type": "Question",
      name: "How much does interior design cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the scope — the size of the space, the materials used, and the level of customization. We offer a free consultation to understand your requirements and provide a transparent quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle execution or only design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle end-to-end interior design — from concept and detailed drawings to vendor coordination, site supervision, and final handover.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable}`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <Header />
        <main className="pt-16 md:pt-[72px] min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <WhatsAppPopup />
      </body>
    </html>
  );
}

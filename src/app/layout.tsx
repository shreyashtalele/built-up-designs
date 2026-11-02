// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { WhatsAppPopup } from "@/components/ui/WhatsAppPopup";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

// ⚠️ TEMPORARY: Using Vercel URL for testing. Change back to builtupdesigns.com before Hostinger deploy.
const BASE_URL = "https://built-up-designs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    url: BASE_URL,
    title: "Built Up Designs | Interior Design Studio in Nashik",
    description:
      "Nashik-based interior design studio creating warm, functional homes and workspaces.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
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
    images: [`${BASE_URL}/og-image.png`],
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
    canonical: BASE_URL,
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
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://builtupdesigns.com",
  name: "Built Up Designs",
  alternateName: "Built Up Designs Interior Studio",
  description:
    "Interior design studio based in Nashik, Maharashtra. Creating warm, functional homes and workspaces.",
  url: "https://builtupdesigns.com",
  telephone: "+917507520026",
  email: "designsbuiltup@gmail.com",
  image: "https://builtupdesigns.com/og-image.png",
  logo: "https://builtupdesigns.com/images/logo/logo-main.svg",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gala No. 2, Ground Floor, Hansa Laxmi, Fawade Lane, M.G. Road",
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
        text: "Yes. We design both residential interiors and commercial spaces across Nashik.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an interior design project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential interior projects typically take 6–12 months, depending on the project size, design requirements, scope of work, and site conditions. Commercial project timelines may vary. We provide an estimated project timeline after understanding your requirements and site visit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 3D designs and mood boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our design process includes detailed 3D visualizations, thoughtfully curated mood boards, and material palettes to help you visualize the overall design, colours, textures, and finishes before execution begins.",
      },
    },
    {
      "@type": "Question",
      name: "How much does interior design cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the size of the space, project requirements, design scope, material selection, and level of customization. At Built Up Designs, we offer a complimentary first site visit to understand your requirements, discuss your vision, and provide a transparent, customized quotation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle execution or only design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Built Up Designs, we specialize in complete interior design consultation, from concept development and detailed drawings to material selection and site coordination. While execution is handled by contractors or the client, we provide professional guidance and regular site visits to ensure the work aligns with the approved design.",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.webp" type="image/webp" />
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
        <main className="pt-20 md:pt-[88px] lg:pt-[92px] min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <WhatsAppPopup />
      </body>
    </html>
  );
}

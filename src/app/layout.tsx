import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
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
  title: {
    default: "Built Up Designs | Interior Architecture & Spatial Curation",
    template: "%s | Built Up Designs",
  },
  description:
    "Built Up Designs is an interior design consultancy in Nashik and Mumbai offering residential, commercial, and consultation services.",
  metadataBase: new URL("https://buildupdesigns.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Built Up Designs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}

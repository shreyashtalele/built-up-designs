// src/lib/constants.ts

export const SITE = {
  name: "Built Up Designs",
  tagline: "Interior Architecture & Spatial Studio",
  description:
    "Curating bespoke living spaces, luxury residences, and architectural environments tailored for refined modern living.",
  url: "https://buildupdesigns.com",
} as const;

export const CONTACT = {
  phone: "+917507520026",
  phoneDisplay: "+91 75075 20026",
  whatsapp: "917507520026",
  email: "designsbuiltup@gmail.com",
  instagram: "@built_up_designs",
  instagramUrl: "https://instagram.com/built_up_designs",
  hours: "Mon — Sat // 10:00 - 19:00 IST",
} as const;

export const LOCATIONS = {
  primary: {
    city: "Nashik",
    label: "Primary Practice",
    area: "Samarth Nagar",
    description:
      "Residential villas, estate homes, penthouses, and bespoke turnkey interior consultancy tailored for quiet permanence and landscape integration.",
  },
  secondary: {
    city: "Mumbai",
    label: "Urban Studio",
    area: "Bandra West",
    description:
      "Urban residences, bespoke boutique offices, and commercial interior architecture prioritizing spatial clarity and tailored material palette execution.",
  },
} as const;

export const PROJECT_TYPES = [
  { value: "residential", label: "Residential Interior" },
  { value: "commercial", label: "Commercial Interior" },
  { value: "consultation", label: "Interior Design Consultation" },
  { value: "other", label: "Other" },
] as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Built Up Designs, I would like to discuss an interior project.";

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
}

export function getPhoneLink() {
  return `tel:${CONTACT.phone}`;
}

export function getEmailLink(subject?: string) {
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${CONTACT.email}${s}`;
}

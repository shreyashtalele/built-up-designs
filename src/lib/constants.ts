// src/lib/constants.ts

export const SITE = {
  name: "Built Up Designs",
  tagline: "Aligning space, Elevating lives",
  description:
    "Built Up Designs is a Nashik-based interior design studio creating warm, functional homes and workspaces.",
  url: "https://builtupdesigns.com",
} as const;

export const CONTACT = {
  phone: "+917507520026",
  phoneDisplay: "+91 75075 20026",
  whatsapp: "917507520026",
  email: "designsbuiltup@gmail.com",
  instagram: "@built_up_designs",
  instagramUrl: "https://instagram.com/built_up_designs",
  hours: "Mon — Sat // 10:00 - 19:00 IST",
  address: {
    street: "Gala No. 2, Ground Floor, Hansa Laxmi, Fawade Lane, M.G. Road",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422001",
    country: "India",
    display:
      "Gala No. 2, Ground Floor, Hansa Laxmi, Fawade Lane, M.G. Road, Nashik - 422001",
  },
} as const;

export const LOCATIONS = {
  primary: {
    city: "Nashik",
    label: "Studio",
    area: "M.G. Road",
    description:
      "Our studio is based in Nashik. We design homes, villas, and commercial spaces across the city.",
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

// src/components/sections/ServicePageHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicePageHero() {
  return (
    <section className="w-full bg-surface pb-space-xl lg:pb-28 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="pt-8 lg:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter items-end pb-12 lg:pb-16">
          <div className="lg:col-span-8 flex flex-col items-start gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionLabel>
                Our Services &middot; Nashik &middot; Mumbai
              </SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-display text-display-xl-mobile md:text-display-xl text-primary leading-[1.08] max-w-3xl"
            >
              Designing spaces around your needs.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="lg:col-span-4 flex flex-col justify-end gap-3 pb-1"
          >
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
              Interior design services tailored to your space, requirements and
              lifestyle.
            </p>
            <div className="pt-2 flex items-center gap-2 flex-wrap">
              <span className="font-body text-label-sm text-secondary uppercase tracking-[0.18em]">
                Practice Focus:
              </span>
              <span className="font-body text-label-sm text-on-surface-variant uppercase tracking-[0.14em]">
                Residential · Commercial · Design Consultation
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="w-full relative overflow-hidden bg-surface-container shadow-sm group"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/hero/hero-imgae-2.png"
              alt="Panoramic interior view showcasing spatial clarity"
              width={2000}
              height={900}
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.02]"
              priority
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-surface/90 backdrop-blur-md px-4 py-2 flex items-center gap-3">
            <span className="font-body text-label-sm text-primary uppercase tracking-[0.2em]">
              Complete Design Practice
            </span>
            <span className="text-secondary font-display text-sm">/</span>
            <span className="font-body text-label-sm text-on-surface-variant uppercase tracking-[0.14em]">
              Residential &amp; Commercial
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

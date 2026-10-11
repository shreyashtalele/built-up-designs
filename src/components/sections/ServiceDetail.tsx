// src/components/sections/ServiceDetail.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  cta: { label: string; href: string };
  reverse?: boolean;
};

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter items-center">
      {/* Content */}
      <div
        className={cn(
          "lg:col-span-5 flex flex-col items-start gap-6",
          service.reverse ? "lg:order-2 lg:pl-6" : "lg:pr-6",
        )}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-body text-label-md tracking-[0.2em] text-secondary font-semibold">
            {service.number} / PRACTICE
          </span>
          <span className="h-px w-8 bg-surface-container-highest" />
          <span className="font-body text-label-sm tracking-[0.16em] text-on-surface-variant uppercase">
            {service.subtitle}
          </span>
        </div>

        <h3 className="font-display text-headline-lg text-primary">
          {service.title}
        </h3>

        <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
          {service.description}
        </p>

        <div className="w-full pt-2 flex flex-col gap-3">
          <span className="font-body text-label-sm uppercase tracking-[0.18em] text-primary font-medium">
            Core Capabilities:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-secondary flex-shrink-0" />
                <span className="font-body text-body-md text-on-surface">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <Button href={service.cta.href} variant="primary" size="md">
            {service.cta.label}
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className={cn("lg:col-span-7", service.reverse && "lg:order-1")}>
        <div className="relative bg-surface-container overflow-hidden shadow-sm aspect-[4/3] group">
          <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-high flex items-center justify-center">
            <span className="font-display text-headline-md text-on-surface-variant/50">
              {service.title} Image
            </span>
          </div>
          <div className="absolute bottom-4 left-4 bg-surface/90 px-4 py-2 backdrop-blur-sm flex items-center gap-3">
            <span className="font-body text-label-sm text-primary uppercase tracking-[0.16em]">
              {service.subtitle} Practice
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

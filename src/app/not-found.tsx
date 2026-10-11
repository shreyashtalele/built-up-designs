import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <section className="w-full bg-surface min-h-[70vh] flex items-center justify-center py-24">
      <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <SectionLabel className="mb-6">Error 404</SectionLabel>

          <h1 className="font-display text-display-xl-mobile md:text-display-xl text-primary leading-tight mb-6">
            Page not found.
          </h1>

          <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-lg">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Return Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>

          <div className="mt-16 pt-8 w-full border-t border-surface-container-highest">
            <p className="font-body text-label-sm uppercase tracking-widest text-outline">
              Built Up Designs · Nashik · Mumbai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

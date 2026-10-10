// src/components/layout/Container.tsx
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: "div" | "section" | "main" | "article";
};

const sizeMap = {
  narrow: "max-w-4xl",
  default: "max-w-[1440px]",
  wide: "max-w-[1600px]",
};

export function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin",
        sizeMap[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}

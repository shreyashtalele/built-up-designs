// src/components/layout/Container.tsx
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "nav" | "header" | "footer";
  size?: "content" | "narrow" | "wide" | "full";
};

const sizeMap = {
  content: "max-w-[1320px]",
  narrow: "max-w-[960px]",
  wide: "max-w-[1520px]",
  full: "max-w-none",
};

const paddingClass = "px-5 sm:px-8 lg:px-10 xl:px-16";

export function Container({
  children,
  className,
  as: Component = "div",
  size = "content",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto",
        sizeMap[size],
        size !== "full" && paddingClass,
        className,
      )}
    >
      {children}
    </Component>
  );
}

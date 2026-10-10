// src/components/ui/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary",
  secondary:
    "bg-surface-container-low text-primary hover:bg-surface-container-high",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-on-primary",
  ghost: "text-primary hover:text-secondary",
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-label-md",
  md: "px-6 py-3 text-label-md",
  lg: "px-8 py-3.5 text-label-md",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon,
    external,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "font-body uppercase tracking-[0.16em]",
    "transition-colors duration-300",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantMap[variant],
    sizeMap[size],
    className,
  );

  // Render as link
  if ("href" in props && props.href) {
    if (external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}

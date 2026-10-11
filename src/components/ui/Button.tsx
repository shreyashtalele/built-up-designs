// src/components/ui/Button.tsx
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

// Pure inline styles — cannot fail
const getStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
): React.CSSProperties => {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "inherit",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  };

  const sizes: Record<ButtonSize, React.CSSProperties> = {
    sm: { padding: "10px 16px", fontSize: "10px" },
    md: { padding: "12px 20px", fontSize: "11px" },
    lg: { padding: "14px 28px", fontSize: "12px" },
  };

  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: "#1F1B16",
      color: "#F7F3ED",
    },
    secondary: {
      backgroundColor: "#F2ECE3",
      color: "#1F1B16",
      border: "1px solid rgba(217, 207, 192, 0.6)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#1F1B16",
      border: "1px solid rgba(31, 27, 22, 0.7)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#1F1B16",
    },
  };

  return { ...base, ...sizes[size], ...variants[variant] };
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md" } = props;
  const styles = getStyles(variant, size);

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          style={styles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} style={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{
        ...styles,
        opacity: props.disabled ? 0.5 : 1,
        pointerEvents: props.disabled ? "none" : "auto",
      }}
    >
      {children}
    </button>
  );
}

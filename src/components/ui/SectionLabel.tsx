// src/components/ui/SectionLabel.tsx
type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function SectionLabel({
  children,
  className,
  style,
}: SectionLabelProps) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        ...style,
      }}
    >
      <span
        style={{
          width: "4px",
          height: "4px",
          backgroundColor: "#8F6633",
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.24em",
          color: "#8F6633",
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </div>
  );
}

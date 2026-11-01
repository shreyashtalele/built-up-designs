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
        flexDirection: "row",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "6px",
          height: "6px",
          backgroundColor: "#8F6633",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          display: "inline-block",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: "#8F6633",
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        {children}
      </span>
    </div>
  );
}

// src/components/ui/WhatsAppPopup.tsx
"use client";

import { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/constants";

const STORAGE_KEY = "bud_wa_popup_dismissed";

export function WhatsAppPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("[WhatsAppPopup] Mounted, setting timer");

    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      console.log("[WhatsAppPopup] Session storage:", dismissed);
      if (dismissed === "true") {
        console.log("[WhatsAppPopup] Dismissed — not showing");
        return;
      }
    }

    const timer = setTimeout(() => {
      console.log("[WhatsAppPopup] Timer fired, setting visible=true");
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  console.log("[WhatsAppPopup] Render — visible:", visible);

  if (!visible) {
    console.log("[WhatsAppPopup] Not visible — returning null");
    return null;
  }

  const handleClose = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        width: "340px",
        backgroundColor: "#F7F3ED",
        border: "1px solid #D9CFC0",
        borderRadius: "4px",
        boxShadow: "0 10px 40px rgba(31, 27, 22, 0.15)",
        zIndex: 9999,
        padding: "22px",
        colorScheme: "light",
        display: "block",
        visibility: "visible",
        opacity: 1,
      }}
    >
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "26px",
          height: "26px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
          color: "#8F6633",
          lineHeight: 1,
        }}
      >
        ×
      </button>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "9999px",
            backgroundColor: "#1F1B16",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#F7F3ED">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>

        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#8F6633",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            Built Up Designs
          </p>

          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "17px",
              color: "#1F1B16",
              marginBottom: "6px",
              lineHeight: 1.3,
            }}
          >
            Aligning space, Elevating lives.
          </p>

          <p
            style={{
              fontSize: "13px",
              color: "#5C5247",
              lineHeight: 1.55,
              marginBottom: "16px",
            }}
          >
            Have a project in mind? Chat with us — we reply quickly.
          </p>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              backgroundColor: "#1F1B16",
              color: "#F7F3ED",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontWeight: 500,
              padding: "11px 18px",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            Chat on WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

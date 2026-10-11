// src/components/forms/InquiryForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CONTACT, PROJECT_TYPES } from "@/lib/constants";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please tell us a bit more about your project"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#F7F3ED",
  border: "1px solid rgba(217,207,192,0.6)",
  padding: "14px 16px",
  fontFamily: "inherit",
  fontSize: "14px",
  color: "#1F1B16",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "#1F1B16",
  fontWeight: 600,
  marginBottom: "8px",
};

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", phone: "", projectType: "", message: "" },
  });

  const onSubmit = (data: InquiryFormData) => {
    const projectTypeLabel =
      PROJECT_TYPES.find((t) => t.value === data.projectType)?.label ||
      data.projectType;
    const message = [
      `Hello Built Up Designs,`,
      ``,
      `I'd like to discuss an interior project.`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Project Type: ${projectTypeLabel}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n");
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      noValidate
    >
      <div>
        <label style={labelStyle} htmlFor="client-name">
          Name
        </label>
        <input
          id="client-name"
          type="text"
          placeholder="Enter your name"
          style={inputStyle}
          {...register("name")}
        />
        {errors.name && (
          <p
            style={{
              fontSize: "11px",
              color: "#A53A2D",
              marginTop: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle} htmlFor="client-phone">
          Phone Number
        </label>
        <input
          id="client-phone"
          type="tel"
          placeholder="Enter your phone number"
          style={inputStyle}
          {...register("phone")}
        />
        {errors.phone && (
          <p
            style={{
              fontSize: "11px",
              color: "#A53A2D",
              marginTop: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle} htmlFor="project-type">
          Project Type
        </label>
        <select
          id="project-type"
          style={inputStyle}
          {...register("projectType")}
        >
          <option value="">Select project scope</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p
            style={{
              fontSize: "11px",
              color: "#A53A2D",
              marginTop: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            {errors.projectType.message}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle} htmlFor="project-message">
          Message
        </label>
        <textarea
          id="project-message"
          rows={5}
          placeholder="Tell us a little about your project..."
          style={{ ...inputStyle, resize: "none" }}
          {...register("message")}
        />
        {errors.message && (
          <p
            style={{
              fontSize: "11px",
              color: "#A53A2D",
              marginTop: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            backgroundColor: "#1F1B16",
            color: "#F7F3ED",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 500,
            padding: "14px 32px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span>Send Inquiry</span>
          <span>→</span>
        </button>
      </div>

      {submitted && (
        <div
          style={{
            padding: "16px",
            backgroundColor: "#F7F3ED",
            border: "1px solid #8F6633",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "#8F6633" }}>✓</span>
          <span style={{ fontSize: "14px", color: "#1F1B16" }}>
            WhatsApp should have opened with your inquiry. Our team will connect
            with you shortly.
          </span>
        </div>
      )}
    </form>
  );
}

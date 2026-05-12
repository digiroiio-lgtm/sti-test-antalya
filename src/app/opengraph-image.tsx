import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "STI Test Antalya | Private Sexual Health Testing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A2342",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            background: "#2563EB",
            borderRadius: "12px",
            padding: "12px 28px",
            marginBottom: "32px",
            color: "#fff",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Private Clinic · Antalya, Turkey
        </div>
        <div
          style={{
            color: "#fff",
            fontSize: "60px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          STI Test Antalya
        </div>
        <div
          style={{
            color: "#93C5FD",
            fontSize: "28px",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Confidential sexual health testing · Same-day results · English-speaking staff
        </div>
        <div
          style={{
            marginTop: "48px",
            background: "#16A34A",
            borderRadius: "10px",
            padding: "14px 36px",
            color: "#fff",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          💬 Book via WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}

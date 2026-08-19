import { ImageResponse } from "next/og";
import { person } from "@/content/data/profile";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #070b14, #0d1424)",
          color: "#eef2f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e8ac3d",
            marginBottom: 24,
          }}
        >
          arockia.cloud
        </div>
        <div style={{ fontSize: 64, fontWeight: 700 }}>{person.name}</div>
        <div
          style={{
            fontSize: 34,
            marginTop: 20,
            background: "linear-gradient(90deg, #e8ac3d, #3fd1e0)",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: 600,
          }}
        >
          {person.role}
        </div>
        <div style={{ fontSize: 24, marginTop: 28, color: "#93a0b4" }}>
          Zero Trust · ISO 27001 · GRC · Cloud &amp; IT/OT Security · DevSecOps
        </div>
      </div>
    ),
    { ...size }
  );
}

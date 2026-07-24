import { ImageResponse } from "next/og";

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
          padding: "80px",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(123,9,17,0.55), rgba(10,10,11,0) 60%)",
          color: "#f3f1ec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#ef2e3c",
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          CHSN
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 128,
            fontWeight: 700,
            lineHeight: 0.95,
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          <span style={{ display: "flex" }}>Chosen,</span>
          <span style={{ display: "flex", color: "#ef2e3c" }}>not given.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

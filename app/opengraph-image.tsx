import { ImageResponse } from "next/og"

export const alt = "Zeros — Software factory en Buenos Aires"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0b0d",
          color: "#f3f7f4",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
          <div
            style={{
              alignItems: "center",
              border: "2px solid #b8f56b",
              borderRadius: "999px",
              display: "flex",
              fontSize: 32,
              height: 56,
              justifyContent: "center",
              width: 56,
            }}
          >
            /
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>Zeros</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#b8f56b",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Software factory · Buenos Aires
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            Web, mobile e IA para escalar.
          </div>
        </div>

        <div style={{ color: "#9aa39e", fontSize: 24 }}>
          Diseño y desarrollo de productos digitales a medida.
        </div>
      </div>
    ),
    size,
  )
}

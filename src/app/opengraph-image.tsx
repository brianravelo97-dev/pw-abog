import { ImageResponse } from "next/og";

export const alt = "Estudio Jurídico Melipilla — Abogados a tu alcance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
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
          background: "radial-gradient(ellipse at 75% 20%, #1a3360 0%, #0b1a33 50%, #070f1f 100%)",
          color: "#faf7f1",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 8, color: "#d8bf8c", textTransform: "uppercase" }}>Estudio Jurídico</div>
        <div style={{ fontSize: 110, letterSpacing: 10, marginTop: 8 }}>MELIPILLA</div>
        <div style={{ width: 160, height: 2, background: "#b8935a", margin: "36px 0" }} />
        <div style={{ fontSize: 44, fontStyle: "italic", color: "#d8bf8c" }}>Abogados a tu alcance</div>
        <div style={{ fontSize: 26, marginTop: 28, color: "rgba(250,247,241,.75)", fontFamily: "sans-serif" }}>
          Familia · Civil · Laboral · Penal · Migratorio · Mediación — Silva Chávez 94, Melipilla
        </div>
      </div>
    ),
    size,
  );
}

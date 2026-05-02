"use client";

import { motion } from "framer-motion";

const products = [
  "OT Tables",
  "LED OT Lights",
  "ICU Beds",
  "Patient Monitors",
  "Medical Pendants",
  "Anesthesia Workstations",
];

export default function ProductSlider() {
  return (
    <section style={{ padding: "80px 20px", background: "#020617" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "2.2rem",
          marginBottom: "40px",
        }}
      >
        Featured Products
      </h2>

      <motion.div
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
        style={{
          display: "flex",
          gap: "20px",
          cursor: "grab",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {products.map((item, i) => (
          <div
            key={i}
            style={{
              minWidth: "260px",
              background: "#020617",
              border: "1px solid #0f172a",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <h3 style={{ color: "#e5e7eb" }}>{item}</h3>
            <p style={{ color: "#9ca3af", marginTop: "10px" }}>
              High-quality hospital-grade equipment.
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

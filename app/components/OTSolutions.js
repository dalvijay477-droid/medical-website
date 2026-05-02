"use client";

import { motion } from "framer-motion";

export default function OTSolutions() {
  const features = [
    "Modular Operation Theatre Design",
    "Laminar Air Flow Systems",
    "Medical Gas Pipeline Installation",
    "Infection Control Compliance",
    "OT Lighting & Pendant Integration",
  ];

  return (
    <motion.section
      id="ot"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        background: "linear-gradient(135deg, #020617, #020617)",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "2.4rem",
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            OT Solutions
          </h2>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "1.05rem",
              lineHeight: "1.8",
            }}
          >
            M.D. Enterprise provides end-to-end Operation Theatre solutions,
            delivering safe, sterile, and technologically advanced OT
            environments trusted by hospitals across India.
          </p>
        </motion.div>

        {/* RIGHT FEATURES */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {features.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                background: "#020617",
                border: "1px solid #0f172a",
                borderRadius: "12px",
                padding: "18px 22px",
                marginBottom: "16px",
                color: "#e5e7eb",
                fontSize: "1rem",
              }}
            >
              ✔ {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}

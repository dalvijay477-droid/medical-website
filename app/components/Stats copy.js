"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ fontSize: "2.6rem", color: "#38bdf8" }}>
        {count}+
      </h3>
      <p style={{ color: "#9ca3af" }}>{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{
        background: "#020617",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
        }}
      >
        <Counter end={10} label="Years of Experience" />
        <Counter end={500} label="Hospitals Served" />
        <Counter end={1000} label="Successful Installations" />
      </div>
    </motion.section>
  );
}

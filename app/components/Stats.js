"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#020617",
        padding: "80px 20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <Stat number={10} suffix="+" label="Years of Experience" inView={inView} />
        <Stat number={500} suffix="+" label="Hospitals Served" inView={inView} />
        <Stat number={1000} suffix="+" label="Successful Installations" inView={inView} />
      </div>
    </section>
  );
}

function Stat({ number, suffix, label, inView }) {
  return (
    <div>
      <h2 style={{ fontSize: "48px", color: "#38bdf8", margin: 0 }}>
        {inView ? <CountUp end={number} duration={2} /> : 0}
        {suffix}
      </h2>
      <p style={{ marginTop: "10px", fontSize: "18px", color: "#cbd5e1" }}>
        {label}
      </p>
    </div>
  );
}

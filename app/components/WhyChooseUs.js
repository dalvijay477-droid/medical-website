"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Certified Equipment",
      desc: "All products meet hospital-grade safety and quality standards.",
      icon: "✔",
    },
    {
      title: "PAN India Delivery",
      desc: "Fast and reliable supply across India with secure logistics.",
      icon: "🚚",
    },
    {
      title: "OT Installation Experts",
      desc: "Professional installation & setup support for operation theatres.",
      icon: "🏥",
    },
    {
      title: "24/7 Support",
      desc: "Dedicated support team to assist you anytime.",
      icon: "☎",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#38bdf8",
          }}
        >
          Why Choose Us
        </h2>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
            maxWidth: "600px",
            marginInline: "auto",
          }}
        >
          Trusted by hospitals and healthcare professionals across India
          for quality medical and OT equipment solutions.
        </p>

        {/* Cards */}
        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: "#1e293b",
                padding: "30px",
                borderRadius: "16px",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                transition: "0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(56,189,248,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "15px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

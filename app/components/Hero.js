"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Smooth parallax (subtle and corporate)
  const y = useTransform(scrollY, (value) => value * 0.3);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y,
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(2, 6, 23, 0.6)",
        }}
      />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Trusted Medical Equipment Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            marginTop: "20px",
            fontSize: "1.2rem",
            maxWidth: "600px",
            color: "#e2e8f0",
          }}
        >
          M.D. Enterprise delivers hospital-grade medical & OT equipment
          trusted across India.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            marginTop: "35px",
            padding: "12px 28px",
            background: "#38bdf8",
            color: "#020617",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0ea5e9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#38bdf8";
          }}
        >
          View Products
        </motion.a>
      </motion.div>
    </section>
  );
}

"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918600791618?text=Hello%20I%20want%20to%20know%20about%20your%20medical%20products"
      target="_blank"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "white",
        padding: "12px 16px",
        borderRadius: "50px",
        fontSize: "14px",
        textDecoration: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      💬 Chat on WhatsApp
    </a>
  );
}
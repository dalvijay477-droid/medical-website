"use client";

export default function RequestQuoteButton() {
  return (
    <a
      href="#contact"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        background: "linear-gradient(135deg, #22c55e, #16a34a)",
        color: "#052e16",
        padding: "14px 22px",
        borderRadius: "999px",
        fontWeight: "700",
        fontSize: "0.95rem",
        textDecoration: "none",
        boxShadow: "0 12px 30px rgba(34,197,94,0.35)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 16px 40px rgba(34,197,94,0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(34,197,94,0.35)";
      }}
    >
      Request Quote
    </a>
  );
}

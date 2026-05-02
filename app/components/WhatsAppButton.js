"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hello%20I%20want%20a%20quotation"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        zIndex: 9999,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 30px rgba(37,211,102,0.4)",
        transition: "transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.01 0C5.38 0 .01 5.37.01 12a11.9 11.9 0 001.67 6.07L0 24l6.12-1.6a11.94 11.94 0 005.89 1.5h.01c6.63 0 12-5.37 12-12a11.86 11.86 0 00-3.5-8.42z" />
      </svg>
    </a>
  );
}

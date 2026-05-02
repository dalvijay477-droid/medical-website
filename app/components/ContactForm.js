"use client";

export default function ContactForm() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "#020617",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ color: "#38bdf8", marginBottom: "10px" }}>
          Contact Us
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "30px" }}>
          Get in touch for quotations, product details, or bulk orders.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            placeholder="Phone Number"
            required
            style={inputStyle}
          />
          <input
            placeholder="Email Address"
            type="email"
            style={inputStyle}
          />
          <textarea
            placeholder="Your Requirement"
            rows="4"
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              background: "#22c55e",
              color: "#052e16",
              padding: "14px",
              fontWeight: "700",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #1e293b",
  background: "#020617",
  color: "#e5e7eb",
};

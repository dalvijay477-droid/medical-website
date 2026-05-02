export default function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        borderTop: "1px solid #1e293b",
        padding: "60px 20px 30px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
        }}
      >
        {/* COMPANY */}
        <div>
          <h3 style={{ color: "#38bdf8", marginBottom: "12px" }}>
            M.D. Enterprise
          </h3>
          <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
            Trusted supplier of hospital & OT medical equipment across India.
            Delivering quality, safety, and reliability.
          </p>
        </div>

        {/* TRUST */}
        <div>
          <h4 style={{ color: "#e5e7eb", marginBottom: "12px" }}>
            Trusted By
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              color: "#9ca3af",
              fontSize: "0.9rem",
            }}
          >
            <li>✔ 500+ Hospitals</li>
            <li>✔ 10+ Years Experience</li>
            <li>✔ ISO Certified Partners</li>
            <li>✔ PAN India Supply</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={{ color: "#e5e7eb", marginBottom: "12px" }}>
            Contact
          </h4>

          <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: "1.8" }}>
            📍 Kolhapur <br />

            📞{" "}
            <a
              href="tel:+918600791618"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              +91 8600791618
            </a>
            <br />

            ✉️{" "}
            <a
              href="mailto:mdekop1618@gmail.com"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              mdekop1618@gmail.com
            </a>
            <br />

            💬{" "}
            <a
              href="https://wa.me/918600791618"
              target="_blank"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              WhatsApp Us
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#64748b",
          fontSize: "0.8rem",
        }}
      >
        © {new Date().getFullYear()} M.D. Enterprise. All rights reserved.
      </div>
    </footer>
  );
}

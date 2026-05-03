"use client";

import { products } from "../../data/products";

export default function Products() {
  return (
    <section
      id="products"
      style={{
        padding: "60px 10px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
          fontWeight: "700",
          color: "#38bdf8",
        }}
      >
        Our Products
      </h2>

      <div
        style={{
          marginTop: "35px",
          maxWidth: "1000px",
          marginInline: "auto",
          display: "grid",

          // 🔥 EVEN SMALLER CARDS
          gridTemplateColumns: "repeat(auto-fit, minmax(85px, 1fr))",

          gap: "10px",
        }}
      >
        {products.map((product, index) => (
          <a
            key={index}
            href={`/products/${product.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#1e293b",
                padding: "5px", // smaller card
                borderRadius: "8px",
                transition: "0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 14px rgba(56,189,248,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* IMAGE */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",      // ✅ important
                    borderRadius: "6px",
                  }}
                >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",   // even smaller image
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* NAME */}
              <h3
                style={{
                  marginTop: "4px",
                  fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
                  textAlign: "center",
                  color: "#e2e8f0",
                  lineHeight: "1.1",
                }}
              >
                {product.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
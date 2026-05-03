"use client";

import { products } from "../../data/products";

export default function Products() {
  return (
    <section
      id="products"
      style={{
        padding: "80px 20px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          color: "#38bdf8",
        }}
      >
        Our Products
      </h2>

      <div
        style={{
          marginTop: "50px",
          maxWidth: "1200px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
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
                padding: "12px",
                borderRadius: "12px",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(56,189,248,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  color: "#e2e8f0",
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

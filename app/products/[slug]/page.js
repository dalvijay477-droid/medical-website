"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useState } from "react";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [added, setAdded] = useState(false);

  if (!product) return <h2 style={{ color: "white" }}>Product not found</h2>;

  const handleAddToCart = () => {
    setAdded(true);
  };

  return (
    <div
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "auto",
        color: "white",
      }}
    >
      <img
        src={product.image}
        style={{ width: "100%", borderRadius: "12px" }}
      />

      <h1 style={{ marginTop: "20px" }}>{product.name}</h1>

      <h2 style={{ color: "#38bdf8" }}>{product.price}</h2>

      <p style={{ marginTop: "10px", color: "#cbd5f5" }}>
        {product.description}
      </p>

      {/* BUTTONS */}
      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        
        {/* Buy on WhatsApp */}
        <a
          href={`https://wa.me/918600791618?text=I want to buy ${product.name}`}
          target="_blank"
          style={{
            background: "#25D366",
            padding: "12px 18px",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Buy on WhatsApp
        </a>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          style={{
            background: "#6366f1",
            padding: "12px 18px",
            borderRadius: "8px",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          {added ? "Added ✅" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
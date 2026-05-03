"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "../../../data/products";

export default function ProductDetail() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <h2 style={{ color: "white", padding: "100px" }}>
        Product not found
      </h2>
    );
  }

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
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          borderRadius: "12px",
        }}
      />

      {/* NAME */}
      <h1 style={{ marginTop: "20px" }}>
        {product.name}
      </h1>

      {/* PRICE */}
      <h2 style={{ color: "#38bdf8" }}>
        {product.price}
      </h2>

      {/* DESCRIPTION */}
      <p
        style={{
          marginTop: "10px",
          color: "#cbd5f5",
        }}
      >
        {product.description}
      </p>

      {/* BUTTONS */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "15px",
        }}
      >
        {/* BUY BUTTON */}
        <a
          href={`https://wa.me/918600791618?text=Hello, I want to buy ${product.name}`}
          target="_blank"
          style={{
            background: "#25D366",
            padding: "12px 18px",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Buy on WhatsApp
        </a>

        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          style={{
            background: "#6366f1",
            padding: "12px 18px",
            borderRadius: "8px",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          {added ? "Added ✅" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
import { products } from "../../data/products";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div style={{ padding: "100px", color: "white" }}>Product Not Found</div>;
  }

  return (
    <div
      style={{
        padding: "120px 20px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
        }}
      >
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "16px",
          }}
        />

        {/* DETAILS */}
        <div>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            {product.name}
          </h1>

          <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
            {product.description}
          </p>

          <ul style={{ marginTop: "20px", color: "#e2e8f0" }}>
            {product.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                ✔ {feature}
              </li>
            ))}
          </ul>

          {/* CONTACT BUTTONS */}
          <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
            <a
              href="tel:+919999999999"
              style={buttonStyle}
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/919999999999?text=Hello, I am interested in ${product.name}`}
              target="_blank"
              style={buttonStyle}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  background: "#38bdf8",
  color: "#0f172a",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "600",
  transition: "0.3s",
};

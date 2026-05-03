"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: scrolled
          ? "rgba(2, 6, 23, 0.95)"
          : "rgba(2, 6, 23, 0.85)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        padding: scrolled ? "10px 60px" : "18px 60px",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0,0,0,0.4)"
          : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",          // ✅ mobile fix
          gap: "15px",              // ✅ spacing fix
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 10px",        // ✅ prevent overflow
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            textDecoration: "none",
          }}
        >
          <img
            src="/logo/md-enterprise-logo.png"
            alt="M.D. Enterprise"
            style={{
              height: scrolled ? "36px" : "42px",
              transition: "0.3s",
            }}
          />

          <span
            style={{
              color: "#38bdf8",
              fontSize: scrolled ? "1.2rem" : "1.4rem",
              fontWeight: "700",
              transition: "0.3s",
            }}
          >
            M.D. Enterprise
          </span>
        </Link>

        {/* NAV LINKS + SEARCH */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#ot">OT Solutions</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          {/* SEARCH BUTTON */}
          <div
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => setSearchOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(30,41,59,0.8)",
              backdropFilter: "blur(8px)",
              border: "1px solid #334155",
              borderRadius: "30px",
              padding: "6px 12px",
              transition: "all 0.4s ease",
              width: searchOpen ? "200px" : "42px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                color: "#38bdf8",
              }}
            >
              🔍
            </span>

            <input
              type="text"
              placeholder="Search..."
              style={{
                marginLeft: "10px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                width: searchOpen ? "100%" : "0px",
                opacity: searchOpen ? 1 : 0,
                transition: "0.3s",
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      style={{
        color: "#e5e7eb",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "500",
        position: "relative",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
      onMouseLeave={(e) => (e.target.style.color = "#e5e7eb")}
    >
      {children}
    </Link>
  );
}

"use client";

import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/users", label: "Users-client" },
    { href: "/user-server", label: "Users-server" },
    { href: "/crud", label: "CRUD" },
  ];
 
  return (
    <nav
      style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        padding: "14px 28px",
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "16px",
            transition: "color 0.2s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#00c6ff";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#fff";
            e.target.style.transform = "translateY(0)";
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

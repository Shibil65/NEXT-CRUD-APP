"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#f9f9f9",
        padding: "1rem",
        height: "100vh",
        borderRight: "1px solid #ddd",
      }}
    > 
      <h2 style={{ marginBottom: "1rem", fontSize: "18px", color: "#333" }}>
        Navigation
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/services">Services</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}

"use client";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
        backgroundColor: "#f2f2f2",
        color: "#555",
        fontSize: "14px",
      }}
    >
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}
 
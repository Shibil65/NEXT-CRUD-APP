"use client";



export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ece9e6, #ffffff)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Segoe UI, sans-serif",
      }}
    > 

      <main
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            backdropFilter: "blur(10px)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              marginBottom: "20px",
              color: "#222",
              fontSize: "32px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            About Us
          </h1>

          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
            Welcome to <strong>MyApp</strong> — a modern web application built
            with Next.js and React. This project showcases clean architecture,
            reusable components, and a professional design system.
          </p>

          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
            Our goal is to create scalable, recruiter‑friendly portfolio
            projects with minimal UI components, modular code, and
            industry‑standard practices. Whether it’s CRUD workflows,
            dashboards, or polished landing pages, everything is designed to
            highlight full‑stack development skills.
          </p>

          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
            This About page is part of the <strong>(main)</strong> section of
            the app, alongside Services and Contact, giving visitors a clear
            overview of the project’s purpose and vision.
          </p>
        </div>
      </main>

    </div>
  );
}

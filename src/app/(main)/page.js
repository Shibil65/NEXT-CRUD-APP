"use client";

import Card from "../../../components/Card";

export default function Home() {
  const skills = [
    { title: "HTML", description: "Structure the web" },
    { title: "CSS", description: "Style and layout" },
    { title: "JavaScript", description: "Interactive logic" },
    { title: "React", description: "Build dynamic UIs" },
    { title: "Python", description: "Backend and scripting" },
  ];

  return ( 
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ece9e6, #ffffff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
            fontWeight: "600",
            color: "#222",
          }}
        >
          Welcome to MyApp
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {skills.map((skill) => (
            <Card
              key={skill.title}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

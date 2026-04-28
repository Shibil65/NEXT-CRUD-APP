"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditUser() {
  const { id } = useParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        const user = data.find((u) => u._id === id);
        if (user) {
          setName(user.name);
          setEmail(user.email);
        }
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, email }),
    });

    router.push("/crud");
  };

 return (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ece9e6, #ffffff)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, sans-serif",
      padding: "20px",
    }}
  >
    <div
      style={{
        maxWidth: "450px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "16px",
        padding: "30px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#222",
          fontSize: "28px",
          fontWeight: "600",
          letterSpacing: "1px",
        }}
      >
        Edit User
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "18px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: "bold", color: "#555" }}>Name:</label>
          <input
            type="text"
            value={name ?? ""}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              transition: "border-color 0.2s ease",
              color: "#333",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: "bold", color: "#555" }}>Email:</label>
          <input
            type="email"
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              transition: "border-color 0.2s ease",
              color: "#333",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div> 

        <button
          type="submit"
          style={{
            padding: "14px",
            background: "linear-gradient(90deg, #28a745, #34d058)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          Update User
        </button>
      </form>
    </div>
  </div>
);

}

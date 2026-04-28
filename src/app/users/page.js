"use client";

import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  // Fetch sample users from JSONPlaceholder API
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);
 
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(135deg, #ece9e6, #ffffff)",
      }}
    >
      <Navbar />

      <main style={{ flex: "1", padding: "40px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "30px",
            color: "#222",
          }}
        >
          Users List
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {users.map((user) => (
            <Card
              key={user.id}
              title={user.name}
              description={user.email}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

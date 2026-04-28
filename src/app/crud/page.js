"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/users");

      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await fetch(`/api/users`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ece9e6, #ffffff)",
      padding: "40px 20px",
      fontFamily: "Segoe UI, sans-serif",
    }}
  >

       
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
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
          fontSize: "32px",
          fontWeight: "600",
          letterSpacing: "1px",
        }}
      >
        Users List
      </h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Link
          href="/crud/add"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            background: "linear-gradient(90deg, #0070f3, #00c6ff)",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
        >
          + Add User
        </Link>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "#666" }}>Loading...</p>
      ) : users.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>No users found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {users.map((user) => (
            <div
              key={user._id}
              style={{
                padding: "20px",
                background: "linear-gradient(135deg, #ffffff, #f7f9fc)",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <strong style={{ fontSize: "18px", color: "#222" }}>
                {user.name}
              </strong>
              <p style={{ margin: "5px 0", color: "#555" }}>{user.email}</p>

              <div style={{ marginTop: "15px" }}>
                <Link
                  href={`/crud/edit/${user._id}`}
                  style={{
                    padding: "8px 14px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    marginRight: "10px",
                    fontSize: "14px",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#218838")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#28a745")
                  }
                >
                  Edit
                </Link>

                <button
                  style={{
                    padding: "8px 14px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#c82333")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>

      
);

}

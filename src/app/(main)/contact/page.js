"use client";

export default function Contact() {
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
          maxWidth: "600px",
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
          Contact Us
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "25px" }}>
          If you have any questions, feel free to reach out!
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              color: "#000", // typed text black
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              color: "#000", // typed text black
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              color: "#000", // typed text black
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "14px",
              background: "linear-gradient(90deg, #0070f3, #00c6ff)",
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
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

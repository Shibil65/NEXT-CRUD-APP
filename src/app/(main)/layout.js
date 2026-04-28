import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(135deg, #ece9e6, #ffffff)",
      }}
    >
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main style={{ flex: "1", padding: "20px" }}>{children}</main>

      {/* Footer at the bottom */}
      <Footer /> 
    </div>
  );
}

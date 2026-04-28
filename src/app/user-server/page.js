import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// Server Component: fetch users directly
export default async function UsersServerPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

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
          Users (Server Side)
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        >
         <thead>
  <tr style={{ backgroundColor: "#0070f3" }}>
    <th style={{ padding: "14px", textAlign: "left", color: "#fff" }}>ID</th>
    <th style={{ padding: "14px", textAlign: "left", color: "#fff" }}>Name</th>
    <th style={{ padding: "14px", textAlign: "left", color: "#fff" }}>Email</th>
  </tr>
</thead>
<tbody>
  {users.map((user, index) => (
    <tr
      key={user.id}
      style={{
        backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
      }}
    >
      <td style={{ padding: "12px", borderBottom: "1px solid #ddd", color: "#000" }}>
        {user.id}
      </td>
      <td style={{ padding: "12px", borderBottom: "1px solid #ddd", color: "#000" }}>
        {user.name}
      </td>
      <td style={{ padding: "12px", borderBottom: "1px solid #ddd", color: "#000" }}>
        {user.email}
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </main>

      <Footer />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {/* CARD 1 */}
        <div className="card" style={{ padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2>Users</h2>
          <p>100 Users</p>
        </div>

        {/* CARD 2 */}
        <div className="card" style={{ padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2>Sales</h2>
          <p>$5000</p> 
        </div>

        {/* CARD 3 */}
        <div className="card" style={{ padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2>Orders</h2>
          <p>30 Orders</p>
        </div>
      </div>
    </div>
  );
}

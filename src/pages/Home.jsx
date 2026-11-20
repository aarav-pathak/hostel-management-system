import { Link } from "react-router";

export default function Home({ rooms }) {
  const tot = rooms.length;
  const avl = rooms.filter((r) => r.capacity > r.occupied).length;
  const bk = rooms.find((r) => r.isBooked);
  const bkn = bk ? bk.roomNo : "No booking yet";

  return (
    <div className="page">
      <h1>Hostel Room Manager</h1>
      <p>Welcome to the hostel room booking system.</p>

      <div className="stats">
        <div className="stat-box">
          <h3>Total Rooms</h3>
          <p>{tot}</p>
        </div>
        <div className="stat-box">
          <h3>Rooms with Beds Left</h3>
          <p>{avl}</p>
        </div>
        <div className="stat-box">
          <h3>Booked Room</h3>
          <p>{bkn}</p>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/rooms" className="btn-link">Browse Rooms</Link>
      </div>
    </div>
  );
}


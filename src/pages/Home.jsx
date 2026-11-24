import { Link } from "react-router";

export default function Home({ rooms }) {
  const tot = rooms.length;
  const avl = rooms.filter((r) => r.capacity > r.occupied).length;
  const bk = rooms.find((r) => r.isBooked);

  return (
    <div>
      <h1>Hostel Room Manager</h1>
      <p>Overview of current hostel occupancy and reservations.</p>
      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Rooms</span>
          <strong>{tot}</strong>
        </div>
        <div className="stat-card">
          <span>Rooms with Beds Left</span>
          <strong>{avl}</strong>
        </div>
        <div className="stat-card">
          <span>Booked Room</span>
          <strong>{bk ? bk.roomNo : "No booking yet"}</strong>
        </div>
      </div>
      <Link to="/rooms" className="btn-primary">Browse Rooms</Link>
    </div>
  );
}

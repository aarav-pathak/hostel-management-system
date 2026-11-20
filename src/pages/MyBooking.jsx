import { Link } from "react-router";

export default function MyBooking({ rooms, onCancel }) {
  const r = rooms.find((x) => x.isBooked);

  if (!r) {
    return (
      <div className="page">
        <h2>My Booking</h2>
        <p>You have not booked any room</p>
        <Link to="/rooms">Browse Rooms</Link>
      </div>
    );
  }

  const rn = r.roomNo;
  const b = r.block;
  const fl = r.floor;
  const t = r.type;
  const rp = r.rentPerMonth;

  return (
    <div className="page">
      <h2>My Booking</h2>
      <div className="detail-box">
        <h3>Room {rn}</h3>
        <p><strong>Block:</strong> {b}</p>
        <p><strong>Floor:</strong> {fl}</p>
        <p><strong>Type:</strong> {t}</p>
        <p><strong>Rent:</strong> ₹{rp}/month</p>
        <h4>Facilities:</h4>
        <ul>
          {r.facilities.map((fac, i) => (
            <li key={i}>{fac}</li>
          ))}
        </ul>

        <div style={{ marginTop: "15px" }}>
          <button onClick={() => onCancel(r.id)}>Cancel Booking</button>
        </div>
      </div>
    </div>
  );
}


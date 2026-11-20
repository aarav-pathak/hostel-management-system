import { Link } from "react-router";

export default function RoomCard({ r, bk, onBook, onCancel }) {
  const rn = r.roomNo;
  const b = r.block;
  const t = r.type;
  const rp = r.rentPerMonth;
  const bl = r.capacity - r.occupied;

  return (
    <div className="card">
      <h3>Room {rn}</h3>
      <p>Block: {b}</p>
      <p>Type: {t}</p>
      <p>Rent: ₹{rp}/month</p>
      <p>
        Status:{" "}
        <span className="badge">
          {r.occupied === r.capacity ? "Full" : `${bl} beds left`}
        </span>
      </p>

      <div className="actions">
        {r.isBooked ? (
          <button onClick={() => onCancel(r.id)}>Cancel</button>
        ) : r.occupied === r.capacity ? (
          <span>Room Full</span>
        ) : bk ? (
          <span>Already booked another room</span>
        ) : (
          <button onClick={() => onBook(r.id)}>Book</button>
        )}
        <Link to={`/rooms/${r.id}`}>View Details</Link>
      </div>
    </div>
  );
}


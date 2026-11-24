import { Link } from "react-router";

export default function RoomCard({ r, bk, onBook, onCancel }) {
  const { id, roomNo: rn, block: b, type: t, rentPerMonth: rp, capacity: c, occupied: o, isBooked } = r;
  const bl = c - o;

  return (
    <div className="card">
      <h3>Room {rn}</h3>
      <p>Block: {b}</p>
      <p>Type: {t}</p>
      <p>Rent: ₹{rp}/month</p>
      <p>
        Status:{" "}
        <span className={o === c ? "badge badge-full" : "badge"}>
          {o === c ? "Full" : `${bl} beds left`}
        </span>
      </p>
      <div className="card-actions">
        {isBooked ? (
          <button className="btn-cancel" onClick={() => onCancel(id)}>Cancel</button>
        ) : o === c ? (
          <span className="status-text">Room Full</span>
        ) : bk ? (
          <span className="status-text">Already booked another room</span>
        ) : (
          <button onClick={() => onBook(id)}>Book</button>
        )}
        <Link to={`/rooms/${id}`} className="link-muted">View Details</Link>
      </div>
    </div>
  );
}

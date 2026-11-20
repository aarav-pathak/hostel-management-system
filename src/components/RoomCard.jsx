import { Link } from "react-router";

export default function RoomCard({ r, bk, onBook, onCancel }) {
  const { id, roomNo: rn, block: b, type: t, rentPerMonth: rp, capacity: c, occupied: o, isBooked } = r;
  const bl = c - o;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>Room {rn}</h3>
      <p>Block: {b}</p>
      <p>Type: {t}</p>
      <p>Rent: ₹{rp}/month</p>
      <p>Status: {o === c ? "Full" : `${bl} beds left`}</p>
      <div>
        {isBooked ? (
          <button onClick={() => onCancel(id)}>Cancel</button>
        ) : o === c ? (
          <span>Room Full</span>
        ) : bk ? (
          <span>Already booked another room</span>
        ) : (
          <button onClick={() => onBook(id)}>Book</button>
        )}{" "}
        <Link to={`/rooms/${id}`}>View Details</Link>
      </div>
    </div>
  );
}

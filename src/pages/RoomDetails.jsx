import { useParams, Link } from "react-router";

export default function RoomDetails({ rooms, onBook, onCancel }) {
  const { id } = useParams();
  const r = rooms.find((x) => x.id === Number(id));

  if (!r) {
    return (
      <div>
        <p>Room not found.</p>
        <Link to="/rooms">Back to Rooms</Link>
      </div>
    );
  }

  const { id: rid, roomNo: rn, block: b, floor: fl, type: t, capacity: c, occupied: o, rentPerMonth: rp, facilities, isBooked } = r;
  const bl = c - o;
  const bk = rooms.some((x) => x.isBooked);

  return (
    <div>
      <h2>Room Details — {rn}</h2>
      <p>Block: {b}</p>
      <p>Floor: {fl}</p>
      <p>Type: {t}</p>
      <p>Rent: ₹{rp}/month</p>
      <p>Capacity: {c}</p>
      <p>Occupied: {o}</p>
      <p>Beds Left: {bl}</p>
      <p>Status: {o === c ? "Full" : `${bl} beds left`}</p>
      <h4>Facilities:</h4>
      <ul>
        {facilities.map((fac, i) => (
          <li key={i}>{fac}</li>
        ))}
      </ul>
      <div>
        {isBooked ? (
          <button onClick={() => onCancel(rid)}>Cancel</button>
        ) : o === c ? (
          <span>Room Full</span>
        ) : bk ? (
          <span>Already booked another room</span>
        ) : (
          <button onClick={() => onBook(rid)}>Book</button>
        )}
      </div>
      <p>
        <Link to="/rooms">Back to Rooms</Link>
      </p>
    </div>
  );
}

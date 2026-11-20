import { Link } from "react-router";

export default function MyBooking({ rooms, onCancel }) {
  const r = rooms.find((x) => x.isBooked);

  if (!r) {
    return (
      <div>
        <h2>My Booking</h2>
        <p>You have not booked any room</p>
        <Link to="/rooms">Browse Rooms</Link>
      </div>
    );
  }

  const { id, roomNo: rn, block: b, floor: fl, type: t, rentPerMonth: rp, facilities } = r;

  return (
    <div>
      <h2>My Booking</h2>
      <h3>Room {rn}</h3>
      <p>Block: {b}</p>
      <p>Floor: {fl}</p>
      <p>Type: {t}</p>
      <p>Rent: ₹{rp}/month</p>
      <h4>Facilities:</h4>
      <ul>
        {facilities.map((fac, i) => (
          <li key={i}>{fac}</li>
        ))}
      </ul>
      <button onClick={() => onCancel(id)}>Cancel Booking</button>
    </div>
  );
}

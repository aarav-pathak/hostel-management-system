import { useParams, Link } from "react-router";

export default function RoomDetails({ rooms, onBook, onCancel }) {
  const { id } = useParams();
  const r = rooms.find((x) => x.id === Number(id));

  if (!r) {
    return (
      <div>
        <p>Room not found.</p>
        <Link to="/rooms" className="link-muted">Back to Rooms</Link>
      </div>
    );
  }

  const { id: rid, roomNo: rn, block: b, floor: fl, type: t, capacity: c, occupied: o, rentPerMonth: rp, facilities, isBooked } = r;
  const bl = c - o;
  const bk = rooms.some((x) => x.isBooked);

  return (
    <div>
      <h2>Room Details — {rn}</h2>
      <div className="detail-card">
        <p>Block: {b}</p>
        <p>Floor: {fl}</p>
        <p>Type: {t}</p>
        <p>Rent: ₹{rp}/month</p>
        <p>Capacity: {c}</p>
        <p>Occupied: {o}</p>
        <p>Beds Left: {bl}</p>
        <p>
          Status:{" "}
          <span className={o === c ? "badge badge-full" : "badge"}>
            {o === c ? "Full" : `${bl} beds left`}
          </span>
        </p>
        <h4>Facilities:</h4>
        <ul>
          {facilities.map((fac, i) => (
            <li key={i}>{fac}</li>
          ))}
        </ul>
        <div style={{ marginTop: "16px" }}>
          {isBooked ? (
            <button className="btn-cancel" onClick={() => onCancel(rid)}>Cancel</button>
          ) : o === c ? (
            <span className="status-text">Room Full</span>
          ) : bk ? (
            <span className="status-text">Already booked another room</span>
          ) : (
            <button onClick={() => onBook(rid)}>Book</button>
          )}
        </div>
      </div>
      <Link to="/rooms" className="link-muted">← Back to Rooms</Link>
    </div>
  );
}

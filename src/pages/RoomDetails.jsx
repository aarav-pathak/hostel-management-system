import { useParams, Link } from "react-router";

export default function RoomDetails({ rooms, onBook, onCancel }) {
  const { id } = useParams();
  const r = rooms.find((x) => x.id === Number(id));

  if (!r) {
    return (
      <div className="page">
        <p>Room not found.</p>
        <Link to="/rooms">Back to Rooms</Link>
      </div>
    );
  }

  const rn = r.roomNo;
  const b = r.block;
  const fl = r.floor;
  const t = r.type;
  const c = r.capacity;
  const o = r.occupied;
  const rp = r.rentPerMonth;
  const bl = c - o;

  const bk = rooms.some((x) => x.isBooked);

  return (
    <div className="page">
      <h2>Room Details — {rn}</h2>
      <div className="detail-box">
        <p><strong>Block:</strong> {b}</p>
        <p><strong>Floor:</strong> {fl}</p>
        <p><strong>Type:</strong> {t}</p>
        <p><strong>Rent:</strong> ₹{rp}/month</p>
        <p><strong>Capacity:</strong> {c}</p>
        <p><strong>Occupied:</strong> {o}</p>
        <p><strong>Beds Left:</strong> {bl}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="badge">
            {o === c ? "Full" : `${bl} beds left`}
          </span>
        </p>

        <h4>Facilities:</h4>
        <ul>
          {r.facilities.map((fac, i) => (
            <li key={i}>{fac}</li>
          ))}
        </ul>

        <div className="actions" style={{ marginTop: "15px" }}>
          {r.isBooked ? (
            <button onClick={() => onCancel(r.id)}>Cancel</button>
          ) : o === c ? (
            <span>Room Full</span>
          ) : bk ? (
            <span>Already booked another room</span>
          ) : (
            <button onClick={() => onBook(r.id)}>Book</button>
          )}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/rooms">← Back to Rooms</Link>
      </div>
    </div>
  );
}


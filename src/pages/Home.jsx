import { Link } from "react-router";

export default function Home({ rooms }) {
  const tot = rooms.length;
  const avl = rooms.filter((r) => r.capacity > r.occupied).length;
  const bk = rooms.find((r) => r.isBooked);

  return (
    <div>
      <h1>Hostel Room Manager</h1>
      <p>Total Rooms: {tot}</p>
      <p>Rooms with Beds Left: {avl}</p>
      <p>Booked Room: {bk ? bk.roomNo : "No booking yet"}</p>
      <Link to="/rooms">Browse Rooms</Link>
    </div>
  );
}

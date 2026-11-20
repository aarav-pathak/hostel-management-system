import { Link } from "react-router";

export default function Navbar({ c }) {
  return (
    <nav>
      <h2>Hostel Booking</h2>
      <Link to="/">Home</Link> | <Link to="/rooms">Rooms</Link> |{" "}
      <Link to="/my-booking">My Booking ({c})</Link>
      <hr />
    </nav>
  );
}

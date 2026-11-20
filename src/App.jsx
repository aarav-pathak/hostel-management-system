import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import roomsData from "./data/rooms";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";

export default function App() {
  const [rms, setRms] = useState(roomsData);

  const onBook = (id) => {
    setRms(
      rms.map((r) =>
        r.id === id ? { ...r, isBooked: true, occupied: r.occupied + 1 } : r
      )
    );
  };

  const onCancel = (id) => {
    setRms(
      rms.map((r) =>
        r.id === id ? { ...r, isBooked: false, occupied: r.occupied - 1 } : r
      )
    );
  };

  const c = rms.filter((r) => r.isBooked).length;

  return (
    <BrowserRouter>
      <Navbar c={c} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home rooms={rms} />} />
          <Route
            path="/rooms"
            element={
              <Rooms rooms={rms} onBook={onBook} onCancel={onCancel} />
            }
          />
          <Route
            path="/rooms/:id"
            element={
              <RoomDetails rooms={rms} onBook={onBook} onCancel={onCancel} />
            }
          />
          <Route
            path="/my-booking"
            element={<MyBooking rooms={rms} onCancel={onCancel} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


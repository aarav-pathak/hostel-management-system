import { useState } from "react";
import RoomCard from "../components/RoomCard";

export default function Rooms({ rooms, onBook, onCancel }) {
  const [q, setQ] = useState("");
  const [t, setT] = useState("All");

  const bk = rooms.some((r) => r.isBooked);

  const list = rooms.filter((r) => {
    const mq = r.roomNo.toLowerCase().includes(q.toLowerCase());
    const mt = t === "All" || r.type === t;
    return mq && mt;
  });

  return (
    <div className="page">
      <h2>All Rooms</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by room no..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select value={t} onChange={(e) => setT(e.target.value)}>
          <option value="All">All</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
      </div>

      <div className="grid">
        {list.map((r) => (
          <RoomCard
            key={r.id}
            r={r}
            bk={bk}
            onBook={onBook}
            onCancel={onCancel}
          />
        ))}
      </div>
    </div>
  );
}


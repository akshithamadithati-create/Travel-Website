import { useState } from "react";
import { hotels } from "./data/hotels";
import HotelList from "./components/HotelList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <header>
        <h1>Explore Our Hotels</h1>
        <p>Find the perfect hotel for your next trip</p>
      </header>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search hotels..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <HotelList
  hotels={hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
  )}
/>
    </div>
  );
}

export default App;

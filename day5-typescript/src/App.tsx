import { useState } from "react";
import { hotels } from "./data/hotels";
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

      <main className="hotel-container">
        {hotels
  .filter((hotel) =>
  hotel.name.toLowerCase().includes(search.toLowerCase()) ||
  hotel.location.toLowerCase().includes(search.toLowerCase())
)
  .map((hotel) =>  (
          <div className="hotel-card" key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>Location: {hotel.location}</p>
            <p>Price: ₹{hotel.price} / night</p>
            <p>Rating: ⭐ {hotel.rating}</p>
            <button onClick={() => alert(`You selected ${hotel.name}`)}>
              Book Now
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;

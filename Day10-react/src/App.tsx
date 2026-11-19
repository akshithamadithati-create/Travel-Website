import { useState } from "react";
import useFetch from "./hooks/useFetch";
import type { Hotel } from "./types/hotel";
import HotelList from "./components/HotelList";
import HotelSkeleton from "./components/HotelSkeleton";
import "./App.css";

interface Filters {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  maxPrice: number;
  rating: number;
}

function App() {
  const [filters, setFilters] = useState<Filters>({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    maxPrice: 10000,
    rating: 0,
  });
  const {
    data: hotels,
    loading,
    error,
    retry,
  } = useFetch<Hotel[]>("http://localhost:3001/hotels");
  const handleFilterChange = (field: keyof Filters, value: string | number) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const filteredHotels = (hotels ?? []).filter((hotel) => {
    const matchesDestination = hotel.destination
      .toLowerCase()
      .includes(filters.destination.toLowerCase());

    const matchesPrice = hotel.price <= filters.maxPrice;

    const matchesRating =
      filters.rating === 0 || hotel.rating >= filters.rating;

    return matchesDestination && matchesPrice && matchesRating;
  });

  return (
    <div className="app">
      <h1>Hotel Search Application</h1>

      <div className="filter-container">
        <div className="filter-grid">
          <div className="filter-group">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Enter destination"
              value={filters.destination}
              onChange={(e) =>
                handleFilterChange("destination", e.target.value)
              }
            />
          </div>

          <div className="filter-group">
            <label>Check-in Date</label>
            <input
              type="date"
              value={filters.checkIn}
              onChange={(e) => handleFilterChange("checkIn", e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Check-out Date</label>
            <input
              type="date"
              value={filters.checkOut}
              onChange={(e) => handleFilterChange("checkOut", e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Number of Guests</label>
            <input
              type="number"
              min="1"
              placeholder="1"
              value={filters.guests}
              onChange={(e) =>
                handleFilterChange("guests", Number(e.target.value))
              }
            />
          </div>

          <div className="filter-group">
            <label>Maximum Price (₹)</label>
            <input
              type="number"
              placeholder="10000"
              value={filters.maxPrice}
              onChange={(e) =>
                handleFilterChange("maxPrice", Number(e.target.value))
              }
            />
          </div>

          <div className="filter-group">
            <label>Star Rating</label>
            <select
              value={filters.rating}
              onChange={(e) =>
                handleFilterChange("rating", Number(e.target.value))
              }
            >
              <option value={0}>All Ratings</option>
              <option value={3}>3+ Stars</option>
              <option value={4}>4+ Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
        </div>

        <button
          className="reset-button"
          onClick={() =>
            setFilters({
              destination: "",
              checkIn: "",
              checkOut: "",
              guests: 1,
              maxPrice: 10000,
              rating: 0,
            })
          }
        >
          Reset Filters
        </button>
      </div>

      {loading && <HotelSkeleton />}

      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={retry}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <>
          {filteredHotels.length === 0 ? (
            <div>
              <p>No hotels found.</p>
              <button
                onClick={() =>
                  setFilters({
                    destination: "",
                    checkIn: "",
                    checkOut: "",
                    guests: 1,
                    maxPrice: 10000,
                    rating: 0,
                  })
                }
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <HotelList hotels={filteredHotels} />
          )}
        </>
      )}
    </div>
  );
}

export default App;

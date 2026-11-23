import useFetch from "../hooks/useFetch";
import type { Hotel } from "../types/hotel";
import HotelList from "../components/HotelList";
import HotelSkeleton from "../components/HotelSkeleton";

function HotelListPage() {
  const {
    data: hotels,
    loading,
    error,
    retry,
  } = useFetch<Hotel[]>("http://localhost:3001/hotels");

  return (
    <div className="app">
      <h1>Available Hotels</h1>

      {loading && <HotelSkeleton />}

      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={retry}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        hotels && hotels.length > 0 ? (
          <HotelList hotels={hotels} />
        ) : (
          <p>No hotels available.</p>
        )
      )}
    </div>
  );
}

export default HotelListPage;

import { useParams, Link } from "react-router-dom";
import  useFetch  from "../hooks/useFetch";
import type { Hotel } from "../types/hotel";

function HotelDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    data: hotels,
    loading,
    error,
  } = useFetch<Hotel[]>("http://localhost:3001/hotels");

  if (loading) return <p>Loading hotel details...</p>;

  if (error) return <p>Error: {error}</p>;

  const hotel = hotels?.find((item) => String(item.id) === id);

  if (!hotel) {
    return (
      <div>
        <h2>Hotel Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>{hotel.name}</h1>

      <img
        src={hotel.image}
        alt={hotel.name}
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
      />

      <p>Destination: {hotel.destination}</p>
      <p>Rating: {hotel.rating} Stars</p>
      <p>Price: ₹{hotel.price}</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default HotelDetails;

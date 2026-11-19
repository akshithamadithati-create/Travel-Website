
import type { Hotel } from "../types/hotel";

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-info">
        <h2>{hotel.name}</h2>
        <p>📍 {hotel.destination}</p>
        <p>⭐ {hotel.rating} Star Rating</p>
        <h3>₹{hotel.price} / night</h3>
      </div>
    </div>
  );
}

export default HotelCard;

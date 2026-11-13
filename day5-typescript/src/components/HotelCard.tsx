import type { Hotel } from "../types/hotel";

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="hotel-card">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="hotel-image"
      />

      <h2>{hotel.name}</h2>
      <p>Location: {hotel.location}</p>
      <p>Price: ₹{hotel.price} / night</p>
      <p>Rating: ⭐ {hotel.rating}</p>
    </div>
  );
}

export default HotelCard;
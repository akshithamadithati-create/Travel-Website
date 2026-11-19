import type { Hotel } from "../types/hotel";
import { useCart } from "../context/CartContext";

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: hotel.id,
        type: "hotel",
        quantity: 1,
      },
    });
  };

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-info">
        <h2>{hotel.name}</h2>
        <p>📍 {hotel.destination}</p>
        <p>⭐ {hotel.rating} Star Rating</p>
        <h3>₹{hotel.price} / night</h3>

        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default HotelCard;

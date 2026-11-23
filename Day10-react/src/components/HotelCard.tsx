
import type { Hotel } from "../types/hotel";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  const { cart, dispatch } = useCart();

  const cartItem = cart.find(
    (item) => item.id === hotel.id && item.type === "hotel"
  );

  const quantity = cartItem?.quantity ?? 0;

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

  const handleDecrease = () => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id: hotel.id,
        type: "hotel",
        quantity: quantity - 1,
      },
    });
  };

  const handleIncrease = () => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id: hotel.id,
        type: "hotel",
        quantity: quantity + 1,
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

        <Link to={`/hotels/${hotel.id}`}>
          View Details
        </Link>

        {quantity === 0 ? (
          <button onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="quantity-control">
            <button onClick={handleDecrease}>−</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelCard;

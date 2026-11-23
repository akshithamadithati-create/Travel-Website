
import type { Flight } from "../data/flights";
import { useCart } from "../context/CartContext";

interface FlightCardProps {
  flight: Flight;
}

function FlightCard({ flight }: FlightCardProps) {
  const { cart, dispatch } = useCart();

  const cartItem = cart.find(
    (item) => item.id === flight.id && item.type === "flight"
  );

  const quantity = cartItem?.quantity ?? 0;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: flight.id,
        type: "flight",
        quantity: 1,
      },
    });
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      dispatch({
        type: "REMOVE_ITEM",
        payload: { id: flight.id, type: "flight" },
      });
    } else {
      dispatch({
        type: "CHANGE_QUANTITY",
        payload: {
          id: flight.id,
          type: "flight",
          quantity: quantity - 1,
        },
      });
    }
  };

  const handleIncrease = () => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id: flight.id,
        type: "flight",
        quantity: quantity + 1,
      },
    });
  };

  return (
    <div className="flight-card">
      <div className="flight-airline">
        <h3>✈️ {flight.airline}</h3>
      </div>

      <div className="flight-route">
        <div>
          <h3>{flight.from}</h3>
          <p>{flight.departure}</p>
        </div>

        <span>✈️ →</span>

        <div>
          <h3>{flight.to}</h3>
          <p>{flight.arrival}</p>
        </div>
      </div>

      <div className="flight-footer">
        <h2>₹{flight.price.toLocaleString("en-IN")}</h2>

        {quantity === 0 ? (
          <button onClick={handleAddToCart}>Add to Cart</button>
        ) : (
          <div className="quantity-controls">
            <button onClick={handleDecrease}>−</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightCard;

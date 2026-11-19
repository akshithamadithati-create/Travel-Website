import type { Flight } from "../data/flights";
import { useCart } from "../context/CartContext";

interface FlightCardProps {
  flight: Flight;
}

function FlightCard({ flight }: FlightCardProps) {
  const { dispatch } = useCart();

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

        <button
          onClick={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: {
                id: flight.id,
                type: "flight",
                quantity: 1,
              },
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FlightCard;
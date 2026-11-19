
import type { Hotel } from "../types/hotel";
import type { CartItem } from "../context/cartTypes";
import flights from "../data/flights";
import { useCart } from "../context/CartContext";

interface CartProps {
  hotels: Hotel[];
}

function Cart({ hotels }: CartProps) {
  const { cart, dispatch } = useCart();

  const handleRemove = (id: number, type: CartItem["type"]) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id, type },
    });
  };

  const handleQuantityChange = (
    id: number,
    type: CartItem["type"],
    quantity: number
  ) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id, type, quantity },
    });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => {
            const hotel =
              item.type === "hotel"
                ? hotels.find((h) => h.id === item.id)
                : undefined;

            const flight =
              item.type === "flight"
                ? flights.find((f) => f.id === item.id)
                : undefined;

            const name = hotel
              ? hotel.name
              : flight
                ? `${flight.airline}: ${flight.from} → ${flight.to}`
                : "Item unavailable";

            const price = hotel?.price ?? flight?.price;

            if (price === undefined) return null;

            return (
              <div
                key={`${item.type}-${item.id}`}
                className="cart-item"
              >
                <div>
                  <h3>{name}</h3>
                  <p>Type: {item.type}</p>
                  <p>Price: ₹{price}</p>
                </div>

                <div>
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.type,
                        item.quantity - 1
                      )
                    }
                  >
                    −
                  </button>

                  <span> {item.quantity} </span>

                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.type,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <p>
                  Subtotal: ₹
                  {(price * item.quantity).toLocaleString("en-IN")}
                </p>

                <button
                  onClick={() => handleRemove(item.id, item.type)}
                >
                  Remove
                </button>
              </div>
            );
          })}

          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;

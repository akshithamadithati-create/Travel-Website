import type { Hotel } from "../types/hotel";
import flights from "../data/flights";
import { useCart } from "../context/CartContext";

interface CartSummaryProps {
  hotels: Hotel[];
}

function CartSummary({ hotels }: CartSummaryProps) {
  const { cart } = useCart();

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cart.reduce((total, item) => {
    if (item.type === "hotel") {
      const hotel = hotels.find((h) => h.id === item.id);
      return total + (hotel ? hotel.price * item.quantity : 0);
    }

    const flight = flights.find((f) => f.id === item.id);

    return total + (flight ? flight.price * item.quantity : 0);
  }, 0);

  return (
    <div className="cart-summary">
      <h2>🛒 My Cart</h2>
      <p>Items: {itemCount}</p>
      <p>Total: ₹{totalAmount.toLocaleString("en-IN")}</p>
    </div>
  );
}

export default CartSummary;
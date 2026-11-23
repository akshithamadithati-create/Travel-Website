
import useFetch from "../hooks/useFetch";
import type { Hotel } from "../types/hotel";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";

function CartPage() {
  const { data: hotels } = useFetch<Hotel[]>(
    "http://localhost:3001/hotels"
  );

  return (
    <div className="app">
      <h1>My Shopping Cart</h1>

      <CartSummary hotels={hotels ?? []} />
      <Cart hotels={hotels ?? []} />
    </div>
  );
}

export default CartPage;

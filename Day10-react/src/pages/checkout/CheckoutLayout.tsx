
import { Navigate, Outlet } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CheckoutLayout() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="app">
      <h1>Checkout</h1>
      <Outlet />
    </div>
  );
}

export default CheckoutLayout;

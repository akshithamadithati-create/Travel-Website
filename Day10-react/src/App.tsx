import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import CartPage from "./pages/CartPage";
import TravellerDetailsForm from "./pages/checkout/TravellerDetailsForm";
import NotFound from "./pages/NotFound";
import CheckoutLayout from "./pages/checkout/CheckoutLayout";
import HotelListPage from "./pages/HotelListPage";

import "./App.css";

function App() {
  return (
    <>
      <nav className="main-navbar">
        <h2>Travel Website</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout/travellers">Checkout</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/hotels" element={<HotelListPage />} />

        <Route path="/hotels/:id" element={<HotelDetails />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<CheckoutLayout />}>
          <Route path="travellers" element={<TravellerDetailsForm />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

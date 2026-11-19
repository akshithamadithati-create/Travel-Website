
import type { Hotel } from "../types/hotel";
import HotelCard from "./HotelCard";

interface HotelListProps {
  hotels: Hotel[];
}

function HotelList({ hotels }: HotelListProps) {
  if (hotels.length === 0) {
    return <p>No hotels found.</p>;
  }

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;

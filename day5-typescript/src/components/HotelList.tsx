import type { Hotel } from "../types/hotel";
import HotelCard from "./HotelCard";

interface HotelListProps {
  hotels: Hotel[];
}

function HotelList({ hotels }: HotelListProps) {
  if (hotels.length === 0) {
    return <p>No Hotels Found</p>;
  }

  return (
    <div className="hotel-container">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
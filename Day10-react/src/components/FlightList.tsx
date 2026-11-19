import flights from "../data/flights";
import FlightCard from "./FlightCard";

function FlightList() {
  return (
    <section className="flight-section">
      <h2>Available Flights</h2>

      <div className="flight-list">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </section>
  );
}

export default FlightList;
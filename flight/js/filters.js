export function filterFlights(flights, maxPrice, stops) {

    let filteredFlights = flights;

    // Filter by maximum price
    if (maxPrice !== "") {
        filteredFlights = filteredFlights.filter(function(flight) {
            return flight.price <= Number(maxPrice);
        });
    }

    // Filter by number of stops
    if (stops !== "all") {
        filteredFlights = filteredFlights.filter(function(flight) {
            return flight.stops === Number(stops);
        });
    }

    return filteredFlights;
}
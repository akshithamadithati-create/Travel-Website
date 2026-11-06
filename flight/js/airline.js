export function getCheapestFlights(flights) {

    const cheapestFlights = {};

    flights.forEach(function(flight) {

        const airline = flight.airline;

        if (
            !cheapestFlights[airline] ||
            flight.price < cheapestFlights[airline].price
        ) {
            cheapestFlights[airline] = flight;
        }

    });

    return Object.values(cheapestFlights);
}
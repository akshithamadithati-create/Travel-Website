export function displayFlights(flights) {

    const flightList = document.getElementById("flightList");

    flightList.innerHTML = "";

    flights.forEach(function(flight) {

        const card = document.createElement("div");

        card.className = "flight-card";

        card.innerHTML = `
            <h3>${flight.airline} - ${flight.flightNumber}</h3>
            <p>From: ${flight.from}</p>
            <p>To: ${flight.to}</p>
            <p>Departure: ${flight.departure}</p>
            <p>Arrival: ${flight.arrival}</p>
            <p>Price: ₹${flight.price}</p>
            <p>Stops: ${flight.stops}</p>
        `;

        flightList.appendChild(card);
    });
}
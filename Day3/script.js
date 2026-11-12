import { flights } from "./js/flights.js";
import { filterFlights } from "./js/filters.js";
import { sortByPrice, sortByDeparture } from "./js/sort.js";
import { getCheapestFlights } from "./js/airline.js";
import { displayFlights } from "./js/display.js";

// Display all flights when the page loads
displayFlights(flights);

// Get HTML elements
const maxPriceInput = document.getElementById("maxPrice");
const stopsInput = document.getElementById("stops");
const filterBtn = document.getElementById("filterBtn");

const sortSelect = document.getElementById("sortFlights");

let currentFlights = flights;

function updateFlightDisplay() {

    let sortedFlights = currentFlights;

    if (sortSelect.value === "price") {
        sortedFlights = sortByPrice(currentFlights);
    }

    else if (sortSelect.value === "departure") {
        sortedFlights = sortByDeparture(currentFlights);
    }

    displayFlights(sortedFlights);
}

// Apply filters when button is clicked
filterBtn.addEventListener("click", function() {

    const maxPrice = maxPriceInput.value;
    const stops = stopsInput.value;

    const result = filterFlights(flights, maxPrice, stops);

    currentFlights = result;
    updateFlightDisplay();
    console.log("Filtered flights:", result);
});

// Test sorting by price
const priceSortedFlights = sortByPrice(flights);
console.log("Flights sorted by price:", priceSortedFlights);

// Test sorting by departure time
const timeSortedFlights = sortByDeparture(flights);
console.log("Flights sorted by departure time:", timeSortedFlights);

// Find the cheapest flight for each airline
const cheapestFlights = getCheapestFlights(flights);

console.log("Cheapest flight for each airline:", cheapestFlights);

sortSelect.addEventListener("change", function() {
    updateFlightDisplay();
});
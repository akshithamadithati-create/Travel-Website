// Sort flights by price (lowest to highest)
export function sortByPrice(flights) {
    return [...flights].sort(function(a, b) {
        return a.price - b.price;
    });
}

// Sort flights by departure time (earliest to latest)
export function sortByDeparture(flights) {
    return [...flights].sort(function(a, b) {
        return a.departure.localeCompare(b.departure);
    });
}
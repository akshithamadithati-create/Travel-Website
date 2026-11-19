export interface Flight {
  id: number;
  airline: string;
  from: string;
  to: string;
  price: number;
  departure: string;
  arrival: string;
}

const flights: Flight[] = [
  {
    id: 101,
    airline: "IndiGo",
    from: "Hyderabad",
    to: "Goa",
    price: 4500,
    departure: "08:00 AM",
    arrival: "09:30 AM",
  },
  {
    id: 102,
    airline: "Air India",
    from: "Hyderabad",
    to: "Bangalore",
    price: 3800,
    departure: "10:00 AM",
    arrival: "11:15 AM",
  },
  {
    id: 103,
    airline: "Akasa Air",
    from: "Bangalore",
    to: "Mumbai",
    price: 5200,
    departure: "02:00 PM",
    arrival: "03:45 PM",
  },
  {
    id: 104,
    airline: "IndiGo",
    from: "Chennai",
    to: "Hyderabad",
    price: 3200,
    departure: "06:30 PM",
    arrival: "08:00 PM",
  },
];

export default flights;
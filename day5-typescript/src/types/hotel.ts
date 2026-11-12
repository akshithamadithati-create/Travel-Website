export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  discount?: number;
}

export interface Flight {
  id: number;
  airline: string;
  from: string;
  to: string;
  price: number;
  status: "pending" | "confirmed";
}
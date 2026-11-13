export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  discount?: number;
}

export type Status = "pending" | "confirmed";

export interface Flight {
  id: number;
  airline: string;
  from: string;
  to: string;
  price: number;
  status: Status;
}
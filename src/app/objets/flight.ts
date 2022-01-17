import { Place } from "./place";

export interface Flight {
  id: number;
  date: string;
  destination: string;
  departure: string;
  places: Place[];
  highlighted?: boolean;
}

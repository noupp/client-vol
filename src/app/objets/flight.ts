import { Place } from "./place";

export interface Flight {
  id: number;
  places: Place[];
  date: string;
}

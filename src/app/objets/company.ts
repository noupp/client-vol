import { Flight } from "./flight";

export interface Company {
  id: number;
  name: string;
  flights: Flight[];
}

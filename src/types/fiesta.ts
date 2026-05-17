export interface Fiesta {
  id: string;
  town: string;
  festival: string;
  patron: string;
  date: string; // ISO date string for current year
  month: number; // 1-12
  latitude: number;
  longitude: number;
  description: string;
  image: string;
}

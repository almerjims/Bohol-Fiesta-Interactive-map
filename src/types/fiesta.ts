export type FiestaDateType =
  | "fixed"
  | "first-saturday"
  | "last-saturday"
  | "movable";

export interface Fiesta {
  id: string;
  town: string;
  patron: string;
  festival: string;
  dateType: FiestaDateType;
  /** 1-12, or null for movable */
  month: number | null;
  /** day of month, only for fixed */
  day?: number;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
}

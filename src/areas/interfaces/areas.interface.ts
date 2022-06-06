export interface Area {
  _id?: string;
  name: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
  creator: string;
  address: string;
  mine?: boolean;
  visibility?: number;
  distance?: number;
}
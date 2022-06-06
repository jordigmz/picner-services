export interface User {
  _id?: string;
  name?: string;
  email: string;
  username: string;
  password?: string;
  avatar?: string;
  lat: number;
  lng: number;
  guardados: string[];
  sos: number;
  me?: boolean;
}

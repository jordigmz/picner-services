export interface User {
  id?: string;
  name?: string;
  email: string;
  username: string;
  password?: string;
  avatar?: string;
  lat: number;
  lng: number;
  me?: boolean;
}

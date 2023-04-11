export interface Client {
  id: number;
  username: string;
  email: string;
}

export interface Img {
  id: number;
  filename: string;
  url: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  adress: string;
  avatar: number;
}

export interface Refresh_Token {
  id: number;
  idUser: number;
  refresh_token: string;
}

export interface Partner {
  id: number;
  name: string;
  avatar: number;
}

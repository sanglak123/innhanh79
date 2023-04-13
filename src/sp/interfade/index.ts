export interface InterFade_Client {
  id: number;
  username: string;
  email: string;
  admin: boolean;
}

export interface InterFade_Data_Clients {
  Client: InterFade_Client;
  access_token: string;
}

export interface Img {
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

export interface Production {
  id: number;
  name: string;
  size: string;
  quantative: string;
  type_paper: string;
  tag: string;
  icon: string;
  Img: Img;
}

export interface Category {
  id: number;
  name: string;
  avatar: string;
}

export interface InterFade_Partner {
  name: string;
  avatar: number;
}

export interface InterFade_Data_PL {}

export interface InterFade_Client {
  id: number;
  username: string;
  email: string;
}

export interface InterFade_Data_Clients {
  Client: InterFade_Client;
  access_token: string;
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

export interface Production {
  name: string;
  size: string;
  quantative: string;
  type_paper: string;
  tag: string;
  idCate: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface InterFade_Data_PL {}

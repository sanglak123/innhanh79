import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_DOMAIN;
export const root_api = axios.create({
  baseURL: baseURL + "/api",
});

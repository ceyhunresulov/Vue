import axios from "axios";

export const appAxsios = axios.create({
  baseURL: "http://localhost:3000",
});

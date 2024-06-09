import axios from "axios";
import { BASE_URL } from "../constans/constans";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchAdverts = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    error;
  }
};

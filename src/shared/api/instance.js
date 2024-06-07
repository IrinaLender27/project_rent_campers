import axios from "axios";
import { BASE_URL } from "../constans/constans";
axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

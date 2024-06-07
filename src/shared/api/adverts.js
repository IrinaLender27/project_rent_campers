import { instance } from "./instance";

export const getAdverts = async () => {
  try {
    const { data } = await instance.get("/");
    return data;
  } catch (error) {
    error;
  }
};

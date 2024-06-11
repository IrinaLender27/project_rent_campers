import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdverts } from "../../shared/api/adverts";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAdverts();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

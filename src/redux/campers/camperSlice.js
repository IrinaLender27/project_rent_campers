import { createSlice } from "@reduxjs/toolkit";

import { getCampers } from "./operations";

const initialState = {
  campers: [],
  favorite: JSON.parse(localStorage.getItem("favorites")) || [],
  loading: false,
  error: null,
  filters: {
    equipment: [],
    type: "",
  },
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFavorites: (state, { payload }) => {
      const add = state.campers.find((camper) => camper._id === payload._id);
      if (add) {
        state.favorite.push(add);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    deleteFavorites: (state, { payload }) => {
      const index = state.favorite.findIndex(
        (camper) => camper._id === payload
      );
      if (index !== -1) {
        state.favorite.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.filterCampers = state.campers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.campers = payload;
        state.filterCampers = payload;
        state.loading = false;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setFilter, resetFilters, setFavorites, deleteFavorites } =
  campersSlice.actions;
export const campersReducer = campersSlice.reducer;

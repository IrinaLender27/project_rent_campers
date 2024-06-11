import { createSlice } from "@reduxjs/toolkit";

import { getCampers } from "./operations";

const initialState = {
  campers: [],
  filterCampers: [],
  favorite: JSON.parse(localStorage.getItem("favorites")) || [],
  loading: false,
  error: null,
  filters: {
    location: "",
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
    setFilter: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
      state.filteredAdverts = state.campers.filter((camper) => {
        const locationMatch =
          !state.filters.location ||
          camper.location
            .toLowerCase()
            .includes(state.filters.location.toLowerCase());
        const equipmentMatch =
          state.filters.equipment.length === 0 ||
          state.filters.equipment.every((eq) => camper.details[eq]);
        const typeMatch =
          !state.filters.type ||
          camper.form.toLowerCase() === state.filters.type.toLowerCase();
        return locationMatch && equipmentMatch && typeMatch;
      });
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

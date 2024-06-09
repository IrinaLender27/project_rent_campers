import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

const initialState = {
  campers: [],
  filterCampers: [],
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
export const { setFilter, resetFilters } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;

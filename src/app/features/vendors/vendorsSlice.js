import { createSlice } from "@reduxjs/toolkit";

export const vendorSlice = createSlice({
  name: "vendor",
  initialState: {
    vendors: [],
  },
  reducers: {
    add: (state, action) => {
      state.vendors = [...state.vendors, ...action.payload];
    },
    remove: (state, action) => {
      state.vendors.filter((item) => item.id !== action?.payload?.id);
    },
    reset: (state) => {
      state.vendors = [];
    },
  },
});

export const selectVendors = (state) => state.vendor.vendors;

export const { add, remove, reset } = vendorSlice.actions;

export default vendorSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { isTimeExpired } from "../../utils/DateFunctions";

const initialState = {
  states: [],
  cities: [],
  selectedState: null,
  selectedCity: null,
  medicalCenters: [],
  myBookings: [],
};

const appSlice = createSlice({
  name: "medify",
  initialState,
  reducers: {
    setStates(state, action) {
      state.states = action.payload;
    },
    setCities(state, action) {
      state.cities = action.payload;
    },
    setSelectedState(state, action) {
      state.selectedState = action.payload;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
    setMedicalCenters(state, action) {
      state.medicalCenters = action.payload;
    },
    addBooking(state, action) {
      const existingBooking = state.myBookings.find(
        (booking) => booking.hospitalID === action.payload.hospitalID
      );

      if (existingBooking) {
        Object.assign(existingBooking, action.payload);
      } else {
        state.myBookings.push(action.payload);
      }
    },
    removeExpiredBookings(state) {
      state.myBookings = state.myBookings.filter(
        (booking) =>
          isTimeExpired(`${booking.bookingDay} ${booking.bookingTime}`) ===
          false
      );
    },
  },
});

export const {
  setStates,
  setCities,
  setSelectedState,
  setSelectedCity,
  setMedicalCenters,
  addBooking,
  removeExpiredBookings,
} = appSlice.actions;

export default appSlice.reducer;

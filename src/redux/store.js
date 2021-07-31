import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slices/carsSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

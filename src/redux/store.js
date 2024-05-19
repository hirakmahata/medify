import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/reducer";
import { medDataApi } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [appReducer.name]: appReducer,
    [medDataApi.reducerPath]: medDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(medDataApi.middleware),
});

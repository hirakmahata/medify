import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const medDataApi = createApi({
  reducerPath: "medDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://meddata-backend.onrender.com",
  }),
  endpoints: (builder) => ({
    fetchStates: builder.query({
      query: () => "/states",
      providesTags: ["States"],
    }),
    fetchCities: builder.query({
      query: (state) => `/cities/${state}`,
      providesTags: (result, error, args) => {
        if (args.state) {
          return ["Cities", args.state];
        }
        return [];
      },
    }),
    fetchMedicalCenters: builder.query({
      query: ({ state, city }) => `/data?state=${state}&city=${city}`,
      providesTags: (result, error, args) => {
        if (result) {
          return ["MedicalCenters", args.city];
        }
        return ["MedicalCenters"];
      },
    }),
  }),
});

export const {
  useFetchStatesQuery,
  useFetchCitiesQuery,
  useFetchMedicalCentersQuery,
} = medDataApi;

import { baseApi } from "../../api/baseApi";

const services = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query<any[], void>({
      query: () => ({
        url: "/services/allServices",
        method: "GET",   
      }),
    }),
  }),
});

export const { useGetDataQuery } = services;

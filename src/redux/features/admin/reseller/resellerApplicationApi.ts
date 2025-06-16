import { baseApi } from "@/src/redux/api/baseApi";

const resellerApplicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllApplication: builder.query({
      query: () => ({
        url: "/reseller/allApplications",
      }),
      providesTags: ["reseller-applications"],
    }),
    getOneApplication: builder.query({
      query: (aplicantId) => ({
        url: `/reseller/application/${aplicantId}`,
      }),
      providesTags: ["reseller-applications"],
    }),
  }),
});

// const resellerApplicationApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getResellerApplication: builder.query<any, void>({
//       query: () => ({
//         url: "/application/all",
//       }),
//       providesTags: ["reseller-applications"],
//     }),
//   }),
// });

export const { useGetAllApplicationQuery, useGetOneApplicationQuery } =
  resellerApplicationApi;

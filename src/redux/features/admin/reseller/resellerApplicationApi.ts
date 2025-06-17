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
    createApplication: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/auth/apply/${userId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reseller-applications"],
    }),
    acceptReseller: builder.mutation({
      query: ({ userId }) => ({
        url: `/reseller/application/accept/${userId}`,
        method: "POST",
      }),
      invalidatesTags: ["reseller-applications"],
    }),

    // reseller/application/reject/
    rejectReseller: builder.mutation({
      query: ({ userId }) => ({
        url: `/reseller/application/reject/${userId}`,
        method: "POST",
      }),
      invalidatesTags: ["reseller-applications"],
    }),
  }),
});

export const {
  useGetAllApplicationQuery,
  useGetOneApplicationQuery,
  useCreateApplicationMutation,
  useAcceptResellerMutation,
  useRejectResellerMutation,
} = resellerApplicationApi;



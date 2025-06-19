import { baseApi } from "@/src/redux/api/baseApi";

const resellerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllResellers: builder.query({
      query: () => ({
        url: `/reseller/allresellers`,
        method: "GET",
      }),
      providesTags: ["all-resellers"],
    }),
    getResellerById: builder.query({
      query: (id) => ({
        url: `/reseller/reseller/${id}`,
        method: "GET",
      }),
    }),
    updateResellerStatus: builder.mutation({
      query: (id) => ({
        url: `/reseller/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["all-resellers"],
    }),
  }),
});

export const {
  useGetAllResellersQuery,
  useGetResellerByIdQuery,
  useUpdateResellerStatusMutation,
} = resellerApi;

import { baseApi } from "../../api/baseApi";

const services = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query<any[], void>({
      query: () => ({
        url: "/services/allServices",
        method: "GET",
      }),
      providesTags: ["services"],
    }),
    getActiveServices: builder.query<any[], void>({
      query: () => ({
        url: "/services/active",
        method: "GET",
      }),
      providesTags: ["services"],
    }),
    createService: builder.mutation<void, any>({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["services"],
    }),
    toggleServiceStatus: builder.mutation({
      query: (id) => ({
        url: `/services/${id}/toggle-status`,
        method: "PATCH",
      }),
      invalidatesTags: ["services"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetActiveServicesQuery,
  useCreateServiceMutation,
  useToggleServiceStatusMutation,
} = services;

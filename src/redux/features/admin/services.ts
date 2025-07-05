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
    getSingleService: builder.query<any, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),

      providesTags: ['services']

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
    editService: builder.mutation<any, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["services"],
    }),
    allCategories: builder.query<any[], void>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllServicesQuery,
  useGetActiveServicesQuery,
  useGetSingleServiceQuery,
  useCreateServiceMutation,
  useToggleServiceStatusMutation,
  useEditServiceMutation,
  useAllCategoriesQuery,
} = services;

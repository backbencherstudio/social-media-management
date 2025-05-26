import { baseApi } from "@/src/redux/api/baseApi";

const categorys = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<any[], void>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categorys"],
    }),
    getSingleCategory: builder.query<any, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
      providesTags: ["categorys"],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetSingleCategoryQuery } =
  categorys;

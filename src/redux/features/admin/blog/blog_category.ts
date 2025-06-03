import { baseApi } from "@/src/redux/api/baseApi";

const blogCategory = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogCategories: builder.query<any[], void>({
      query: () => ({
        url: "/blog-categories",
        method: "GET",
      }),
      providesTags: ["blog-categories"],
    }),
    createBlogCategory: builder.mutation({
      query: (data) => ({
        url: "/blog-categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog-categories"],
    }),
    deleteBlogCategory: builder.mutation({
      query: (id) => ({
        url: `/blog-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog-categories"],
    }),
  }),
});

export const {
  useGetBlogCategoriesQuery,
  useCreateBlogCategoryMutation,
  useDeleteBlogCategoryMutation,
} = blogCategory;

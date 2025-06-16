import { baseApi } from "@/src/redux/api/baseApi";

const blog = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query<any[], void>({
      query: () => ({
        url: "/admin/blog",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/admin/blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/admin/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
} = blog;

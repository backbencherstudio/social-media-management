import { baseApi } from "@/src/redux/api/baseApi";

const blog = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<any[], void>({
      query: () => ({
        url: "/blogs",
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
  }),
});

export const { useGetBlogsQuery, useCreateBlogMutation } = blog;

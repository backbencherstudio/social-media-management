import { baseApi } from "@/src/redux/api/baseApi";

const blog = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query<any, void>({
      query: () => ({
        url: "/admin/blog",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    getBlogById: builder.query<any, string>({
      query: (id) => ({
        url: `/admin/blog/${id}`,
        method: "GET",
      }),
    }),
    createBlog: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/blog",
          method: "POST",
          body: data?.formData,
        };
      },
      invalidatesTags: ["blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (data) => ({
        url: `/admin/blog/${data?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
    updateBlog: builder.mutation({
      query: ({ data, id , token}: { data: any; id: string, token:string }) => ({
        url: `/admin/blog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blog;

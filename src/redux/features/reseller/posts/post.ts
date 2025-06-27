import { baseApi } from "@/src/redux/api/baseApi";



const post = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<any, void>({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    deletePost: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});


export const { useGetAllPostsQuery, useDeletePostMutation } = post;

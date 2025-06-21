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
  }),
});


export const { useGetAllPostsQuery } = post;

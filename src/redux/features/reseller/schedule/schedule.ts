import { baseApi } from "@/src/redux/api/baseApi";


const schedule = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUpcomingPost: builder.query<any, void>({
      query: () => ({
        url: "/post/upcoming",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
  }),
});


export const { useGetAllUpcomingPostQuery } = schedule;
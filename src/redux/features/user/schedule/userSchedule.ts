import { baseApi } from "@/src/redux/api/baseApi";

const userSchedule = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserScheduleCalender: builder.query({
      query: (id) => ({
        url: `/user/posts/calendar?start=2023-01-01&end=2026-06-30`,
        method: "GET",
      }),
    }),
    getUserAllUpcomingPost: builder.query({
      query: (id) => ({
        url: `/user/posts/upcoming`,
        method: "GET",
      }),
      providesTags: ["user-upcoming-post"],
    }),
    deleteUpcomingPost: builder.mutation({
      query: (id) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user-upcoming-post"],
    }),
  }),
});

export const {
  useGetUserScheduleCalenderQuery,
  useGetUserAllUpcomingPostQuery,
  useDeleteUpcomingPostMutation,
} = userSchedule;

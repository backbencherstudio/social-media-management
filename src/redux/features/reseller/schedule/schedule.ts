import { baseApi } from "@/src/redux/api/baseApi";


const schedule = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getScheduleCalendar: builder.query({
      query: (id: string) => ({
        url: `/post/calendar/${id}?start=2025-07-01&end=2026-08-30`,
        method: "GET",
      }),
    }),

    getAllUpcomingPost: builder.query({
      query: (id: string) => ({
        url: `/post/upcoming/${id}`,
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
  }),
});


export const { useGetAllUpcomingPostQuery, useGetScheduleCalendarQuery } = schedule;
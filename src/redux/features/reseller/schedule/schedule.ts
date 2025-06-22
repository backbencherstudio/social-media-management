import { baseApi } from "@/src/redux/api/baseApi";


const schedule = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getScheduleCalendar: builder.query<any, void>({
      query: () => ({
        url: "/post/calendar?start=2025-07-01&end=2026-08-30",
        method: "GET",
      }),
    }),

    getAllUpcomingPost: builder.query<any, void>({
      query: () => ({
        url: "/post/upcoming",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
  }),
});


export const { useGetAllUpcomingPostQuery, useGetScheduleCalendarQuery } = schedule;
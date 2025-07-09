import { baseApi } from "@/src/redux/api/baseApi";

const analytics = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllstats: builder.query<any, any>({
      query: (id) => ({
        url: `/socials/${id}/stats`,
        method: "GET",
      }),
    }),
    getAllAnalyticsAllServices: builder.query<any, any>({
      query: (id) => ({
        url: `/socials/${id}/posts/performance/all`,
        method: "GET",
      }),
      providesTags: ["allAnalyticsServices"],
    }),
    getFollowerActivity: builder.query({
      query: ({ name, id }: { name: string; id: string }) => ({
        url: `/socials/${id}/follower-activity/${name}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllAnalyticsAllServicesQuery,
  useGetAllstatsQuery,
  useGetFollowerActivityQuery,
} = analytics;

import { baseApi } from "@/src/redux/api/baseApi";

const analytics = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllstats: builder.query<any, void>({
      query: () => ({
        url: "/socials/cmc0017yi0000ws5cqy5qybiy/stats",
        method: "GET",
      }),
    }),
    getAllAnalyticsAllServices: builder.query<any, void>({
      query: () => ({
        url: "/socials/cmc0017yi0000ws5cqy5qybiy/posts/performance/all",
        method: "GET",
      }),
      providesTags: ["allAnalyticsServices"],
    }),
    getFollowerActivity: builder.query({
      query: ({name , id}: {name: string, id: string}) => ({
        url: `/socials/cmc0017yi0000ws5cqy5qybiy/follower-activity/${name}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllAnalyticsAllServicesQuery, useGetAllstatsQuery, useGetFollowerActivityQuery } =
  analytics;

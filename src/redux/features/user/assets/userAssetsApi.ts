import { baseApi } from "@/src/redux/api/baseApi";

export const userAssetsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query({
      query: () => ({
        url: `/user/assets`,
      }),
      providesTags: ["user-assets"],
    }),

    getContentQueue: builder.query({
      query: () => ({
        url: `/user/assets/queue`,
      }),
      providesTags: ["content-queue"],
    }),
  }),
});

export const { useGetAssetsQuery, useGetContentQueueQuery } = userAssetsApi;

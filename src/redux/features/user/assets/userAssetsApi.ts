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

    updateContentStatus: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/user/assets/post/${id}/review`,
        method: "PATCH",
        body: payload,
      }),
      // invalidate related cache after mutation
      invalidatesTags: ["content-queue"],
    }),
  }),
});

export const {
  useGetAssetsQuery,
  useGetContentQueueQuery,
  useUpdateContentStatusMutation,
} = userAssetsApi;

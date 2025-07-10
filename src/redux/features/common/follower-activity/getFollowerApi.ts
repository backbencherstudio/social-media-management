import { baseApi } from "@/src/redux/api/baseApi";

const getFollowerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTwitterFollower: builder.query({
      query: (id) => ({
        url: `/socials/${id}/follower-activity/twitter`,
      }),
      providesTags: ["follower-activity"],
    }),
  }),
});

export const { useGetTwitterFollowerQuery } = getFollowerApi;

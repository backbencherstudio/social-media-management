import { baseApi } from "@/src/redux/api/baseApi";

const getNotificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allNotification: builder.query({
      query: () => ({
        url: "/notification",
      }),
      providesTags: ["all-notification"],
    }),
  }),
});

export const { useAllNotificationQuery } = getNotificationApi;


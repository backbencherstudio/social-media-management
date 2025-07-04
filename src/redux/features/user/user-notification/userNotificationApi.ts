import { baseApi } from "@/src/redux/api/baseApi";

const userNotificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userNotification: builder.query({
      query: () => ({
        url: `/notification`,
      }),
      providesTags: ["user-notification"],
    }),
  }),
});

export const { useUserNotificationQuery } = userNotificationApi;

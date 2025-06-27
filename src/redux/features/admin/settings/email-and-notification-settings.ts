import { baseApi } from "@/src/redux/api/baseApi";


const emailAndNotificationSettings = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmailAndNotificationSettings: builder.query<any, void>({
      query: () => ({
        url: "/admin/emailSettings",
        method: "GET",
      }),
      providesTags: ["email-and-notification-settings"],
    }),
    updateEmailAndNotificationSettings: builder.mutation({
      query: ({ data, id }) => ({
        url: `/admin/emailSettings/${id}`,
        method: "PUT",
        body: data?.data,
      }),
      invalidatesTags: ["email-and-notification-settings"],
    }),
  }),
});

export const { useGetEmailAndNotificationSettingsQuery, useUpdateEmailAndNotificationSettingsMutation } = emailAndNotificationSettings;
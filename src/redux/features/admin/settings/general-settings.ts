import { baseApi } from "@/src/redux/api/baseApi";

const generalSettings = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGeneralSettings: builder.query<any, void>({
      query: () => ({
        url: "/general-settings",
        method: "GET",
      }),
      providesTags: ["general-settings"],
    }),
    updateGeneralSettings: builder.mutation({
      query: (data) => ({
        url: "/admin/website-info",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["general-settings"],
    })
  })
})

export const { useGetGeneralSettingsQuery, useUpdateGeneralSettingsMutation } = generalSettings
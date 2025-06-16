import { useCreateServiceMutation } from "@/src/redux/features/admin/services";
import { baseApi } from "@/src/redux/api/baseApi";

const securitySettings = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSecuritySettings: builder.query<any[], void>({
      query: () => ({
        url: "/security-settings",
        method: "GET",
      }),
      providesTags: ["security-settings"],
    }),
    updateSecuritySettings: builder.mutation({
      query: (data) => ({
        url: "/admin/security-settings/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["security-settings"],
    }),
  }),
});

export const {
  useGetSecuritySettingsQuery,
  useUpdateSecuritySettingsMutation,
} = securitySettings;

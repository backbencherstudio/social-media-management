import { baseApi } from "@/src/redux/api/baseApi";

const userServicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userAllServices: builder.query({
      query: () => ({
        url: `/user/dashboard/all-services`,
      }),
      providesTags: ["user-all-services"],
    }),
  }),
});

export const { useUserAllServicesQuery } = userServicesApi;

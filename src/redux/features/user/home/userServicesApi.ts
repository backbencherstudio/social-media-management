import { baseApi } from "@/src/redux/api/baseApi";

export const userServicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserActiveServices: builder.query<any, void>({
      query: () => ({
        url: `/user/dashboard/active-services`,
      }),
      providesTags: ["active-services"],
    }),

    getUserServicesWeOffer: builder.query<any, void>({
      query: () => ({
        url: `/user/dashboard/services-we-offer`,
      }),
      providesTags: ["services-we-offer"],
    }),

    getUserRecentActivities: builder.query<any, void>({
      query: () => ({
        url: `user/dashboard/recent-activity`,
      }),
      providesTags: ["recent-activities"],
    }),
  }),
});

export const {
  useGetUserActiveServicesQuery,
  useGetUserServicesWeOfferQuery,
  useGetUserRecentActivitiesQuery,
} = userServicesApi;

import { baseApi } from "@/src/redux/api/baseApi";


const dashboard = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    getDashboardAnalysis: builder.query({
      query: (id: string) => ({
        url: `/reseller/dashboard/analysis/${id}`,
        method: "GET",
      }),
    }),
    getActiveServices: builder.query<any, void>({
      query: () => ({
        url: "/reseller/dashboard/active-services",
        method: "GET",
      }),
    }),
    getClientList: builder.query<any, void>({
      query: () => ({
        url: "/reseller/dashboard/clients",
        method: "GET",
      }),
    }),
  }),

  overrideExisting: true
});


export const { useGetDashboardAnalysisQuery, useGetActiveServicesQuery, useGetClientListQuery } = dashboard;
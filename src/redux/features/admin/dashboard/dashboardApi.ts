import { baseApi } from "../../../api/baseApi";

const adminDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPieChartData: builder.query<any, void>({
      query: () => ({
        url: "admin/website-info/task-inside",
      }),
      providesTags: ["dashboard-data"],
    }),

    getTopPerformingServices: builder.query<any, void>({
      query: () => ({
        url: "admin/website-info/top-performing-services",
      }),
      providesTags: ["dashboard-data"],
    }),
  }),
});

export const {
  useGetPieChartDataQuery,
  useGetTopPerformingServicesQuery,
} = adminDashboardApi;  
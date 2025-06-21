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

    getTopResellers: builder.query<any, void>({
      query: () => ({
        url: "/admin/website-info/all",
      }),
      providesTags: ["dashboard-data"],
    }),
    getRecentOrders: builder.query<any, void>({
      query: () => ({
        url: "/admin/website-info/recent-orders",
      }),
      providesTags: ["dashboard-data"],
    }),
  }),
});

export const {
  useGetPieChartDataQuery,
  useGetTopPerformingServicesQuery,
  useGetTopResellersQuery,
  useGetRecentOrdersQuery,
} = adminDashboardApi;

// /admin/website-info/recent-orders

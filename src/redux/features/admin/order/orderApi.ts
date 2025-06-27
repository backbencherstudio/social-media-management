import { baseApi } from "@/src/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: `/order-page/all`,
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    getOrderDetail: builder.query({
      query: (id) => ({
        url: `/order-page/${id}`,
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    assignOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/task-management/assign/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetOrderDetailQuery,
  useAssignOrderMutation,
} = orderApi;

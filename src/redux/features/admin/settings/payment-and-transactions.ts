import { baseApi } from "@/src/redux/api/baseApi";

const paymentAndTransactions = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentAndTransactions: builder.query<any[], void>({
      query: () => ({
        url: "/payment-and-transactions",
        method: "GET",
      }),
      providesTags: ["payment-and-transactions"],
    }),
    updatePaymentAndTransactions: builder.mutation({
      query: (data) => ({
        url: "/admin/withdrawal-settings",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["payment-and-transactions"],
    }),
  }),
});

export const {
  useGetPaymentAndTransactionsQuery,
  useUpdatePaymentAndTransactionsMutation,
} = paymentAndTransactions;

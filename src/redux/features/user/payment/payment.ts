import { baseApi } from "@/src/redux/api/baseApi";

const payment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    paymentService: builder.mutation({
      query: (data) => ({
        url: "/payment/pay",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePaymentServiceMutation } = payment;

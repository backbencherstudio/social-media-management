import { baseApi } from "@/src/redux/api/baseApi";

const payment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPayment: builder.query<any, void>({
      query: () => ({
        url: "/order-page/all",
        method: "GET",
      }),
      providesTags: ["payment"],
    }),

    // getInvoice: builder.query<any, string>({
    //   query: (id) => ({
    //     url: `/invoice/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["invoice"],
    // }),

    getInvoicePdf: builder.query<Blob, string>({
      async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
        const response = await fetchWithBQ({
          url: `/invoice/${id}`,
          method: "GET",
          responseHandler: (r) => r.blob(),
        });
        if (response.error) return { error: response.error as any };
        return { data: response.data as Blob };
      },
      providesTags: ["invoice"],
    }),
    getAllResellerPayment: builder.query<any, void>({
      query: () => ({
        url: "/reseller/all",
        method: "GET",
      }),
      providesTags: ["reseller-payment"],
    }),
    releasePayment: builder.mutation<any, void>({
      query: (id) => ({
        url: `/reseller/${id}/release-payment`,
        method: "POST",
      }),
      invalidatesTags: ["release-payment"],
    }),
  }),
});

export const { useGetPaymentQuery, useGetInvoicePdfQuery, useLazyGetInvoicePdfQuery, useGetAllResellerPaymentQuery, useReleasePaymentMutation} = payment;

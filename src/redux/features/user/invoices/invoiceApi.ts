import Cookies from "js-cookie";
import { baseApi } from "@/src/redux/api/baseApi";

const invoiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch payments for the authenticated client
    clientPayments: builder.query({
      query: () => ({
        url: `/order/my`,  // No need for clientId since it's handled by the token/session
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,  // Pass the token if needed in the headers
        },
      }),
      providesTags: ["client-invoices"],
    }),
  }),
});

export const { useClientPaymentsQuery } = invoiceApi;

import { baseApi } from "@/src/redux/api/baseApi";

const helpAndSupport = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSents: builder.query<any, void>({
      query: () => ({
        url: "/admin/email/all",
        method: "GET",
      }),
      providesTags: ["all-sents"],
    }),
    getAllInbox: builder.query<any, void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["all-sents"],
    }),
    createNewEmail: builder.mutation({
      query: (data) => ({
        url: "/admin/email/create_email",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["create-new-email"],
    }),
    sendAllEmail: builder.mutation({
      query: (data) => ({
        url: "/admin/email/create_email_for_all",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["create-new-email"],
    }),
  }),
});

export const { useGetAllSentsQuery, useGetAllInboxQuery, useCreateNewEmailMutation, useSendAllEmailMutation } =
  helpAndSupport;

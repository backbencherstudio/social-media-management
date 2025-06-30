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
    getSingleSent: builder.query<any, string>({
      query: (id) => ({
        url: `/admin/email/${id}`,
        method: "GET",
      }),
      providesTags: ["single-sent"],
    }),
    getAllInbox: builder.query<any, void>({
      query: () => ({
        url: "/admin/email/inbox",
        method: "GET",
      }),
      providesTags: ["all-inbox"],
    }),
    getSingleInbox: builder.query<any, string>({
      query: (id) => ({
        url: `/admin/email/inbox/${id}`,
        method: "GET",
      }),
      providesTags: ["all-inbox"],
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
    getAllClientConversation: builder.query<any, void>({
      query: () => ({
        url: "/messages/conversations",
        method: "GET",
      }),
    }),
    getSingleUserMessage: builder.query({
      query: (id:string) => ({
        url: `/messages/user/${id}`,
        method: "GET",
      }),
    }),
    getAllAdmins: builder.query({
      query: () => ({
        url: `/auth/admins`,
        method: "GET",
      }),
    }),
    
  }),
});

export const {
  useGetAllSentsQuery,
  useGetSingleSentQuery,
  useGetAllInboxQuery,
  useGetSingleInboxQuery,
  useCreateNewEmailMutation,
  useSendAllEmailMutation,
  useGetAllClientConversationQuery,
  useGetSingleUserMessageQuery,
  useGetAllAdminsQuery,
} = helpAndSupport;
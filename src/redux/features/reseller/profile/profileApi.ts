import { baseApi } from "@/src/redux/api/baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query<any, string>({
      query: (id) => ({
        url: `/reseller-profile/reseller/${id}`,
      }),
      providesTags: ["reseller-profile"],
    }),
    getOneTask: builder.query<any, string>({
      query: (id) => ({
        url: `/reseller-profile/Onetask/${id}`,
      }),
      providesTags: ["reseller-profile"],
    }),
    getResellerEarnings: builder.query<any, string>({
      query: (id) => ({
        url: `/reseller-profile/completed/${id}`,
      }),
      providesTags: ["reseller-profile"],
    }),
    connectAccount: builder.mutation({
      query: () => ({
        url: "/reseller-profile/create-connect-account-payout",
        method: "POST",
        body: {},
      }),
    }),
    createConnectAccount: builder.mutation({
      query: (body) => {
        return {
          url: `/reseller-profile/create-connect-account/${body.id}`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useGetOneTaskQuery,
  useGetResellerEarningsQuery,
  useConnectAccountMutation,
  useCreateConnectAccountMutation,
} = profileApi;

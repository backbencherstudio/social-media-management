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
  }),
});

export const {
  useGetAllTasksQuery,
  useGetOneTaskQuery,
  useGetResellerEarningsQuery,
} = profileApi;

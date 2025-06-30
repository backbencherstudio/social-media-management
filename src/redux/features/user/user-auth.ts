import { baseApi } from "../../api/baseApi";

const userAuth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query<any, void>({
      query: () => ({
        url: "/auth/all",
        method: "GET",
      }),
      providesTags: ["auth-all"],
    }),
    getCurrentUser: builder.query({
      query: (token: string) => ({
        url: "/auth/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["auth-all"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetCurrentUserQuery,
} = userAuth;

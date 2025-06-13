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
  }),
});

export const { useGetAllUserQuery } = userAuth;

import { baseApi } from "../../api/baseApi";

const data = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query<any[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
  }),
});

export const {useGetDataQuery} = data
import { baseApi } from "@/src/redux/api/baseApi";


const assets = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFiles: builder.query({
      query: (id: string) => ({
        url: `/assets/recent/${id}`,
        method: "GET",
      }),
      providesTags: ["assets"],
    }),
    getAssetsStats: builder.query({
      query: (id: string) => ({
        url: `/assets/stats/${id}`,
        method: "GET",
      }),
      providesTags: ["assets"],
    }),
    getFolders: builder.query({
      query: (id: string) => ({
        url: `/assets/folders/${id}`,
        method: "GET",
      }),
    }),
  }),
});


export const { useGetFilesQuery, useGetAssetsStatsQuery, useGetFoldersQuery } = assets;
import { baseApi } from "@/src/redux/api/baseApi";


const assets = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFiles: builder.query<any, void>({
      query: () => ({
        url: "/assets/recent",
        method: "GET",
      }),
      providesTags: ["assets"],
    }),
    getAssetsStats: builder.query<any, void>({
      query: () => ({
        url: "/assets/stats",
        method: "GET",
      }),
      providesTags: ["assets"],
    }),
    getFolders: builder.query<any, void>({
      query: () => ({
        url: "/assets/folders",
        method: "GET",
      }),
    }),
  }),
});


export const { useGetFilesQuery, useGetAssetsStatsQuery, useGetFoldersQuery } = assets;
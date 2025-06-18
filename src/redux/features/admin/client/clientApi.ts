// import { baseApi } from "@/src/redux/api/baseApi";

// const clientApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllClients: builder.query({
//       query: () => ({
//         url: "/clints",
//         method: "GET",
//       }),
//       providesTags: ["client"],
//     }),
//     getOneClient: builder.query({
//       query: (id) => ({
//         url: `client/${id}`,
//         method: "GET",
//       }),
//       providesTags: ["client"],
//     }),
//     updateClientStatus: builder.mutation({
//       query: (id) => ({
//         url: `/clints/toggle-status/${id}`,
//         method: "PATCH",
//       }),
//       invalidatesTags: ["client"],
//     }),
//   }),
// });

// export const { useGetAllClientsQuery, useUpdateClientStatusMutation } =
//   clientApi;

import { baseApi } from "@/src/redux/api/baseApi";

const clientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllClients: builder.query({
      query: () => ({
        url: "/clints",
        method: "GET",
      }),

      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }: { id: string }) => ({
                type: "clients",
                id,
              })),
              { type: "clients", id: "LIST" },
            ]
          : [{ type: "clients", id: "LIST" }],
    }),
    getOneClient: builder.query({
      query: (id) => ({
        url: `client/${id}`,
        method: "GET",
      }),

      providesTags: (result, error, id) => [{ type: "clients", id }],
    }),
    updateClientStatus: builder.mutation({
      query: (id) => ({
        url: `/clints/toggle-status/${id}`,
        method: "PATCH",
      }),

      invalidatesTags: (result, error, { id }) => [{ type: "clients", id }],
    }),

    // updateClientStatus: builder.mutation({
    //         query: (id) => ({
    //           url: `/clints/toggle-status/${id}`,
    //           method: "PATCH",
    //         }),
    //         invalidatesTags: (result, error, { id }) => [{ type: "clients", id }],
    //       }),
  }),
});

export const {
  useGetAllClientsQuery,
  useGetOneClientQuery,
  useUpdateClientStatusMutation,
} = clientApi;

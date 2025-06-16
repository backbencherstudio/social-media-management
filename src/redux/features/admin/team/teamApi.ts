import { baseApi } from "@/src/redux/api/baseApi";
import {
  ICreateOrUpdateTeamInput,
  ISingleTeamResponse,
  ITeamListResponse,
} from "./teamType";

const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all team members
    getTeamMembers: builder.query<ITeamListResponse, void>({
      query: () => ({
        url: "/team/getall",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "team-members" as const,
                id,
              })),
              { type: "team-members", id: "LIST" },
            ]
          : [{ type: "team-members", id: "LIST" }],
    }),
    // get single team member
    getSingleTeamMember: builder.query<ISingleTeamResponse, string>({
      query: (id) => ({
        url: `/team/get/${id}`,
      }),
      providesTags: (_result, _error, id) => [{ type: "team-members", id }],
    }),
    // add team member
    addTeamMember: builder.mutation<
      ISingleTeamResponse,
      ICreateOrUpdateTeamInput
    >({
      query: (body) => ({
        url: "/team/add",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "team-members", id: "LIST" }],
    }),
    // update team member
    updateTeamMember: builder.mutation<
      ISingleTeamResponse,
      { id: string; body: ICreateOrUpdateTeamInput }
    >({
      query: ({ id, body }) => ({
        url: `/team/edit/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "team-members", id },
        { type: "team-members", id: "LIST" },
      ],
    }),
    // delete team member
    deleteTeamMember: builder.mutation<void, string>({
      query: (id) => ({
        url: `/team/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "team-members", id },
        { type: "team-members", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetTeamMembersQuery,
  useGetSingleTeamMemberQuery,
  useAddTeamMemberMutation,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
} = teamApi;

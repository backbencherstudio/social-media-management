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
    }),
    // get single team member
    getSingleTeamMember: builder.query<ISingleTeamResponse, string>({
      query: (id) => ({
        url: `/team/get/${id}`,
      }),
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
      invalidatesTags: ["team-members"],
    }),
    // update team member
    updateTeamMember: builder.mutation<
      ISingleTeamResponse,
      { id: string; body: ICreateOrUpdateTeamInput }
    >({
      query: ({ id, body }) => ({
        url: `/team/update/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["team-members"],
    }),
    // delete team member
    deleteTeamMember: builder.mutation<void, string>({
      query: (id) => ({
        url: `/team/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["team-members"],
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

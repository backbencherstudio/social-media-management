import { baseApi } from "@/src/redux/api/baseApi";

interface UserRoleResponse {
  data: any;
  success: boolean;
  message: string;
}

const userRole = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserRole: builder.query<UserRoleResponse, void>({
      query: () => ({
        url: "/user-and-role-management/roles",
        method: "GET",
      }),
      providesTags: ["user-role-management"],
    }),
    updateUserAndRole: builder.mutation({
      query: (data) => ({
        url: "/user-and-role-management/manage-role",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user-role-management"],
    }),
  }),
});

export const { useGetUserRoleQuery, useUpdateUserAndRoleMutation } = userRole;

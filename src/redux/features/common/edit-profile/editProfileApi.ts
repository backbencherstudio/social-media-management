import { baseApi } from "@/src/redux/api/baseApi";

const editProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/update",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useEditProfileMutation } = editProfileApi;

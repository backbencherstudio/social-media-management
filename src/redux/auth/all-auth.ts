import { baseApi } from "../api/baseApi";

const auth = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginWithPassword: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth-all"],
    }),
    register: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth-all"],
    }),
    verifyRegistration: build.mutation({
      query: ({ data, token }: { data: any; token: any }) => {
        return {
          url: `/auth/verify-registration?token=${token}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["auth-all"],
    }),
    forgotPassword: build.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["auth-all"],
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginWithPasswordMutation,
  useRegisterMutation,
  useVerifyRegistrationMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = auth;

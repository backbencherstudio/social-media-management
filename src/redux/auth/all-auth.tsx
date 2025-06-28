import { baseApi } from "../api/baseApi";

const auth = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    verifyRegistration: build.mutation({
      query: ({ data, token }: { data: any; token: any }) => {
        console.log("verifyRegistration data:", data);
        console.log("verifyRegistration token:", token);
        return {
          url: `/auth/verify-registration?token=${token}`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useRegisterMutation, useVerifyRegistrationMutation } = auth;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "services",
    "blogs",
    "categorys",
    "blog-categories",
    "general-settings",
    "payment-and-transactions",
    "security-settings",
    "user-role-management",
    "team-members",
  ],
});

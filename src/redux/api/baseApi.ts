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
    "create-new-email",
    "auth-all",
    "all-sents",
    "single-sent",
    "all-inbox",
    "categories",
    "payment",
    "invoice",
    "reseller-payment",
    "release-payment",
    "all-resellers",
    "reseller-applications",     
    "clients",
    "orders",
    "team-members",
    "dashboard-data",
    
  ],
  
});

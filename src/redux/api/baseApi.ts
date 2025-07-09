import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URL,
    credentials: "include",
    prepareHeaders: async (headers) => {
      const accessToken = await getToken();

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
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
    "team-members",
    "email-and-notification-settings",
    "posts",
    "reseller-applications",
    "clients",
    "orders",
    "team-members",
    "dashboard-data",
    "reseller-profile",
    "assets",
    "allAnalyticsServices",
    "client-invoices",
    "active-services",
    "recent-activities",
    "services-we-offer",
    "all-services",
    "user-active-services",
    "user-services-we-offer",
    "user-recent-activities",
    "user-assets",
    "content-queue",
    "user-upcoming-post",
    "user-all-services",
    "user-notification",
    "all-notification"
  ],
});

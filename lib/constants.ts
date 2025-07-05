export const ROLE = {
  USER: "user",
  CLIENT: "client",
  RESELLER: "reseller",
  ADMIN: "admin",
} as const;

export type Role = (typeof ROLE)[keyof typeof ROLE]; 
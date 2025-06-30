import { clientStat } from "./_components/client-stat-cards";

export const clientStatsData: clientStat[] = [
  {
    title: "Active clients",
    count: 45,
  },
  {
    title: "Total Orders",
    count: 245,
  },
  {
    title: "Total Spent",
    count: 24.005,
  },
  
];



const companyNames = [
  "Starbucks",
  "General Electric",
  "Amazon",
  "Apple",
  "Google",
  "Microsoft",
  "Meta",
  "Netflix",
  "Tesla",
  "Adobe",
];
const companyDomains = [
  "starbucks.com",
  "ge.com",
  "amazon.com",
  "apple.com",
  "google.com",
  "microsoft.com",
  "meta.com",
  "netflix.com",
  "tesla.com",
  "adobe.com",
];

const companyAvatars = [
  "https://i.pravatar.cc/40?img=50",
  "https://i.pravatar.cc/40?img=52",
  "https://i.pravatar.cc/40?img=54",
  "https://i.pravatar.cc/40?img=56",
];

export const fakeClientsList = Array.from({ length: 100 }, (_, i) => {
  const companyIndex = i % companyNames.length;
  const name = companyNames[companyIndex];
  const domain = companyDomains[companyIndex];
  const orders = Math.floor(Math.random() * 20) + 1;
  const spent = (orders * (Math.random() * 150 + 50)).toFixed(2);
  const status = Math.random() > 0.5 ? "Active" : "Inactive"; // Randomize status
  return {
    id: i + 1,
    company: name,
    email: `contact@${domain}`,
    orders,
    spent: `$${spent}`,
    status, // Use randomized status
    avatar: companyAvatars[i % companyAvatars.length],
  };
});

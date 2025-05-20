// for stats data
export type ResellerDashboardStats = {
  activeResellers: number;
  totalTasks: number;
  commissionPaid: string;
  newResellerRequests: number;
};

export const fakeResellerStats: ResellerDashboardStats = {
  activeResellers: 65,
  totalTasks: 227,
  commissionPaid: "$45,000",
  newResellerRequests: 10,
};


// for table data

export type Reseller = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  skills: string[];
  task: number;
  earning: string;
  status: "Active" | "Deactivate";
  enabled: boolean;
};

const names = [
  "Theresa Webb",
  "Arlene McCoy",
  "Guy Hawkins",
  "Darrell Steward",
  "Cody Fisher",
  "Jenny Wilson",
  "Jacob Jones",
  "Courtney Henry",
];

const avatars = [
  "https://i.pravatar.cc/40?img=11",
  "https://i.pravatar.cc/40?img=24",
  "https://i.pravatar.cc/40?img=32",
  "https://i.pravatar.cc/40?img=44",
  "https://i.pravatar.cc/40?img=52",
  "https://i.pravatar.cc/40?img=60",
  "https://i.pravatar.cc/40?img=13",
  "https://i.pravatar.cc/40?img=7",
];

const skillPool = [
  "Social Media",
  "Content",
  "SEO",
  "Backlinks",
  "Copywrite",
  "Blog",
  "Marketing",
  "Ads",
  "Email Marketing",
  "PPC",
];

const statuses: Reseller["status"][] = ["Active", "Deactivate"];

export const fakeResellersList: Reseller[] = Array.from({ length: 80 }, (_, i) => {
  const name = names[i % names.length];
  const email = "jennings@example.com";
  const skills = [
    skillPool[(i * 2) % skillPool.length],
    skillPool[(i * 2 + 1) % skillPool.length],
  ];
  const task = Math.floor(Math.random() * 15) + 1;
  const earning = `$${(task * (Math.random() * 150 + 50)).toFixed(2)}`;
  const status = statuses[i % statuses.length];
  const enabled = status === "Active";

  return {
    id: i + 1,
    name,
    email,
    avatar: avatars[i % avatars.length],
    skills,
    task,
    earning,
    status,
    enabled,
  };
});

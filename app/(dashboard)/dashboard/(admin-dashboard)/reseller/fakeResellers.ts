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


// fakedata for applicant.ts

export type Applicant = {
  user_id: number;
  applicationId: string;
  full_name: string;
  user_email: string;
  phone_number: string;
  position: string;
  portfolio: string;
};

// ...existing code...

const applicantNames = [
  "Brooklyn Simmons",
  "Annette Black",
  "Cody Fisher",
  "Wade Warren",
  "Esther Howard",
  "Cameron Williams",
  "Leslie Alexander",
  "Ralph Edwards"
];

const positions = [
  "Marketing Coordinator",
  "Digital Marketing Specialist",
  "Content Writer",
  "SEO Specialist",
  "Social Media Manager",
  "Web Designer",
  "Email Marketing Specialist",
  "PPC Expert"
];

const portfolioSites = [
  "donware.com",
  "zoomit.com",
  "labdrill.com",
  "digitex.io",
  "webify.net",
  "contentpro.com",
  "mediacraft.org",
  "markethub.co"
];

export const applicantsList: Applicant[] = Array.from({ length: 50 }, (_, i) => {
  const name = applicantNames[i % applicantNames.length];
  const position = positions[i % positions.length];
  const portfolio = `http://www.${portfolioSites[i % portfolioSites.length]}`;
  
  return {
    user_id: i + 1,
    full_name: name,
    user_email: `${name.toLowerCase().split(' ')[0]}@example.com`,
    phone_number: `(${Math.floor(Math.random() * 900) + 100}) 555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
    position,
    portfolio,  
  };
});
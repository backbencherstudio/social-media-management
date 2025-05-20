// fakedata.ts

export type Task = {
  id: number;
  name: string;
  assignDate: string;
  status: "Pending Review" | "In Progress" | "Completed";
  deadline: string;
  role: string;
};

export const tasks: Task[] = [
  {
    id: 1,
    name: "McDonald's Social Media Post Design",
    assignDate: "November 16, 2025",
    status: "Pending Review",
    deadline: "December 31, 2025",
    role: "Account Manager",
  },
  {
    id: 2,
    name: "McDonald's SEO Blog Post",
    assignDate: "April 28, 2025",
    status: "In Progress",
    deadline: "February 29, 2025",
    role: "Copywriting",
  },
  {
    id: 3,
    name: "eBay SEO Backlink",
    assignDate: "August 7, 2025",
    status: "Pending Review",
    deadline: "August 24, 2025",
    role: "Marketing",
  },
];

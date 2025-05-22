export interface TeamMember {
  id: number;
  name: string;
  role: string;
  selected: boolean;
  email?: string;
  phone?: string;
  joinDate?: string;
  // Add other fields as needed
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Courtney Henry",
    role: "Social Media Designer",
    selected: true,
    email: "courtney.henry@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: "2023-05-12",
  },
  {
    id: 2,
    name: "Darlene Robertson",
    role: "UI/UX Designer",
    selected: false,
    email: "darlene.robertson@example.com",
    phone: "+1 (555) 654-4321",
    joinDate: "2022-11-03",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Frontend Developer",
    selected: true,
    email: "eleanor.pena@example.com",
    phone: "+1 (555) 987-6543",
    joinDate: "2023-01-18",
  },
  {
    id: 4,
    name: "Ronald Richards",
    role: "Project Manager",
    selected: false,
    email: "ronald.richards@example.com",
    phone: "+1 (555) 876-4321",
    joinDate: "2021-07-28",
  },
  {
    id: 5,
    name: "Cody Fisher",
    role: "Product Designer",
    selected: true,
    email: "cody.fisher@example.com",
    phone: "+1 (555) 321-7654",
    joinDate: "2022-04-15",
  }
];

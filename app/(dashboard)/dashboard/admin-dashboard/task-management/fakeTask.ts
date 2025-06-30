const baseAvatars = [
  "https://i.pravatar.cc/40?img=12",
  "https://i.pravatar.cc/40?img=23",
  "https://i.pravatar.cc/40?img=34",
  "https://i.pravatar.cc/40?img=45",
];

const roles = ["Designer", "Developer", "Project Manager", "QA Tester", "Content Writer"];
const statuses = ["Pending", "In Progress", "Completed", "In Review", "On Hold"];
const assignees = [
  "Alice Johnson",
  "Ethan Clark",
  "Sophia Martinez",
  "Liam Nguyen",
  "Olivia Perez",
  "Noah Kim",
  "Emma Brown",
  "Ava Smith",
  "Mason Lee",
  "Isabella Davis",
];

export const fakeTasks = [
  // Add 100 tasks for pagination
  ...Array.from({ length: 100 }, (_, i) => ({
    taskId: `#TASK-${(i + 1).toString().padStart(4, "0")}`,
    role: roles[i % roles.length],
    assignee: assignees[i % assignees.length],
    avatar: baseAvatars[i % baseAvatars.length],
    dueDate: `Feb ${Math.floor(Math.random() * 28) + 1}, 2024`,
    status: statuses[i % statuses.length] as
      | "Pending"
      | "In Progress"
      | "Completed"
      | "In Review"
      | "On Hold",
  })),
];

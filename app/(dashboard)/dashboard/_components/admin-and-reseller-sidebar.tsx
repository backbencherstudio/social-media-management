import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { RiHome5Line, RiLayoutGridLine } from "react-icons/ri";
import { PanelLeftClose, PanelLeftOpen, SettingsIcon } from "lucide-react";
import LogoIcon from "@/public/incons/logo";
import DashboardIcon from "@/public/incons/dashboard";
import AnalysisIcon from "@/public/incons/analysis-icon";
import ComposeIcon from "@/public/incons/compose";
import ScheduleIcon from "@/public/incons/schedule";
import PostIcon from "@/public/incons/post";
import AssetsIcon from "@/public/incons/assets";
import SocialInboxIcon from "@/public/incons/social-inbox";
import SocialsIcon from "@/public/incons/socials";
import SupportIcon from "@/public/incons/support";
import OrderIcon from "@/public/incons/order";
import TaskManagementIcon from "@/public/incons/task-management";
import ClientIcon from "@/public/incons/client";
import ResellerIcon from "@/public/incons/reseller";
import TeamIcon from "@/public/incons/team";
import ServicesIcon from "@/public/incons/services";
import BlogIcon from "@/public/incons/blog";
import PaymentIcon from "@/public/incons/payment";
import LiveChatIcon from "@/public/incons/live-chat";

// Define roles
const ROLE = {
  FREELANCER: "freelancer",
  ADMIN: "admin",
};

type Role = "admin" | "freelancer";

// Menu item type
interface MenuItem {
  title: string;
  icon: React.ElementType;
  href: string;
}

// Section type
interface Section {
  label: string;
  items: MenuItem[];
}

// Menu definitions
const freelancerMenu: Section[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: DashboardIcon,
        href: "/dashboard/freelancer-dashboard",
      },
      {
        title: "Analytics",
        icon: AnalysisIcon,
        href: "/dashboard/analytics",
      },
    ],
  },
  {
    label: "Content",
    items: [
      { title: "Compose", icon: ComposeIcon, href: "/dashboard/compose" },
      {
        title: "Schedule",
        icon: ScheduleIcon,
        href: "/dashboard/schedule",
      },
      { title: "Post", icon: PostIcon, href: "/dashboard/posts" },
      {
        title: "Assets",
        icon: AssetsIcon,
        href: "/dashboard/dashboard-assets",
      },
    ],
  },
  {
    label: "Activity",
    items: [
      // {
      //   title: "Automotion",
      //   icon: RiLayoutGridLine,
      //   href: "/dashboard/automation",
      // },
      {
        title: "Social Inbox",
        icon: SocialInboxIcon,
        href: "/dashboard/social-inbox",
      },
    ],
  },
  {
    label: "Configuration",
    items: [
      {
        title: "Socials",
        icon: SocialsIcon,
        href: "/dashboard/social-media",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        title: "Support",
        icon: SupportIcon,
        href: "/dashboard/help-and-support",
      },
    ],
  },
];

const adminMenu: Section[] = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
      // { title: "Reports", icon: RiLayoutGridLine, href: "/dashboard/reports" },
    ],
  },
  {
    label: "Operation",
    items: [
      { title: "Order", icon: OrderIcon, href: "/dashboard/order" },
      {
        title: "Task Management",
        icon: TaskManagementIcon,
        href: "/dashboard/task-management",
      },
      { title: "Client", icon: ClientIcon, href: "/dashboard/client" },
      {
        title: "Reseller",
        icon: ResellerIcon,
        href: "/dashboard/reseller",
      },
      { title: "Team", icon: TeamIcon, href: "/dashboard/team" },
    ],
  },
  {
    label: "Content Management",
    items: [
      {
        title: "Services",
        icon: ServicesIcon,
        href: "/dashboard/admin-services",
      },
      {
        title: "Blog",
        icon: BlogIcon,
        href: "/dashboard/blog",
      },
    ],
  },
  {
    label: "Finance",
    items: [
      {
        title: "Payment",
        icon: PaymentIcon,
        href: "/dashboard/payment",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        title: "Live Chat",
        icon: LiveChatIcon,
        href: "/dashboard/live-chat",
      },
      {
        title: "Support",
        icon: SupportIcon,
        href: "/dashboard/admin-support",
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        title: "Settings",
        icon: SettingsIcon,
        href: "/dashboard/settings",
      },
    ],
  },
];

// Helper to get menu based on role
const getMenuByRole = (role: Role): Section[] => {
  switch (role) {
    case ROLE.FREELANCER:
      return freelancerMenu;
    case ROLE.ADMIN:
      return adminMenu;
    default:
      return [];
  }
};

interface SidebarProps {
  isMobileMenuOpen: boolean;
  onMobileMenuClose: () => void;
}

const SidebarSection = ({
  label,
  items,
  isCollapsed,
}: {
  label: string;
  items: MenuItem[];
  isCollapsed: boolean;
}) => (
  <div>
    <p
      className={`${
        isCollapsed ? "hidden" : "block"
      } text-sm text-gray-500 px-6`}
    >
      {label}
    </p>
    <nav className={`flex-1 px-3 py-2 space-y-2 ${isCollapsed ? "px-2" : ""}`}>
      {items.map((item, index) => (
        <NavLink key={index} item={item} isCollapsed={isCollapsed} />
      ))}
    </nav>
  </div>
);

const NavLink = ({
  item,
  isCollapsed,
}: {
  item: MenuItem;
  isCollapsed: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  return (
    <Link
      href={item.href}
      className={`flex items-center text-[14px] transition-all duration-200 ${
        isCollapsed ? "justify-center px-0" : "px-3 gap-3"
      } p-3 rounded-lg ${
        isActive
          ? "bg-[#F5F5F7] text-black"
          : "text-[#4A4C56] hover:bg-gray-100"
      }`}
      title={isCollapsed ? item.title : ""}
    >
      <item.icon
        className={`w-5 h-5 shrink-0 ${isActive ? "" : "text-gray-500"}`}
      />
      <span
        className={`transition-all duration-300 ${
          isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
        } ${isActive ? "font-medium" : ""} whitespace-nowrap overflow-hidden`}
      >
        {item.title}
      </span>
    </Link>
  );
};

export default function AdminAndResellerSidebar({
  isMobileMenuOpen,
  onMobileMenuClose,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // const role: Role = "freelancer";
  const role: Role = "admin";

  const isFreelancer = role === ROLE.FREELANCER;
  console.log(isFreelancer);

  const menuSections = getMenuByRole(role);

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0
        ${isCollapsed ? "md:w-16" : "w-64"}
        bg-white border-r border-[#E9E9EA] overflow-hidden flex flex-col
      `}
    >
      <div className="flex items-center justify-between p-5 pb-5">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-[120px]"
          }`}
        >
          <div className="w-[120px] h-[22px] object-contain">
            <LogoIcon className="w-full h-full" />
          </div>
        </div>

        <button
          className="hidden md:block cursor-pointer shrink-0 transition-transform duration-300"
          onClick={toggleCollapse}
        >
          <div
            className={`transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="size-6 text-gray-600 hover:text-gray-900" />
            ) : (
              <PanelLeftClose className="size-6 text-gray-600 hover:text-gray-900" />
            )}
          </div>
        </button>

        <button
          className={`p-2 rounded-lg hover:bg-gray-100 md:hidden transition-opacity duration-300 ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}
          onClick={onMobileMenuClose}
        >
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      {isFreelancer && (
        <div className={`px-6 mb-6 ${isCollapsed ? "hidden" : "block"}`}>
          <p className="text-sm text-gray-500 mb-4">All Client</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-900 p-3 rounded-full bg-[#DAFF05]">
                SC
              </span>
            </div>
            <select className="bg-transparent border-none text-sm text-gray-700 focus:outline-none focus:ring-0 cursor-pointer pr-8">
              <option value="">Select Client</option>
              <option value="city-shop">City Shop</option>
              <option value="bank-asia">Bank Asia</option>
              <option value="louis-vuitton">Louis Vuitton</option>
              <option value="nintendo">Nintendo</option>
              <option value="louis-roberto">Louis Roberto</option>
              <option value="bank-of-america">Bank of America</option>
              <option value="walt-disney">Walt Disney</option>
            </select>
          </div>
        </div>
      )}
      {menuSections.map((section, idx) => (
        <SidebarSection
          key={idx}
          label={section.label}
          items={section.items}
          isCollapsed={isCollapsed}
        />
      ))}
    </aside>
  );
}

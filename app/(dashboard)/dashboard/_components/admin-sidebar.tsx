import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { PanelLeftClose, PanelLeftOpen, SettingsIcon } from "lucide-react";
import LogoIcon from "@/public/incons/logo";
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
import DashboardIcon from "@/public/incons/dashboard";

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

interface SidebarProps {
  isMobileMenuOpen: boolean;
  onMobileMenuClose: () => void;
  role: string;
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
      {label} {label === "Admin" && "Dashboard"}
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

export default function AdminSidebar({
  isMobileMenuOpen,
  onMobileMenuClose,
  role,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const adminSidebarMenu: Section[] = [
    {
      label: role,
      items: [{ title: "Dashboard", icon: DashboardIcon, href: "/dashboard/admin-dashboard" }],
    },
    {
      label: "Operation",
      items: [
        { title: "Order", icon: OrderIcon, href: "/dashboard/admin-dashboard/order" },
        {
          title: "Task Management",
          icon: TaskManagementIcon,
          href: "/dashboard/admin-dashboard/task-management",
        },
        { title: "Client", icon: ClientIcon, href: "/dashboard/admin-dashboard/client" },
        {
          title: "Reseller",
          icon: ResellerIcon,
          href: "/dashboard/admin-dashboard/reseller",
        },
        { title: "Team", icon: TeamIcon, href: "/dashboard/admin-dashboard/team" },
      ],
    },
    {
      label: "Content Management",
      items: [
        {
          title: "Services",
          icon: ServicesIcon,
          href: "/dashboard/admin-dashboard/admin-services",
        },
        {
          title: "Blog",
          icon: BlogIcon,
          href: "/dashboard/admin-dashboard/blog",
        },
      ],
    },
    {
      label: "Finance",
      items: [
        {
          title: "Payment",
          icon: PaymentIcon,
          href: "/dashboard/admin-dashboard/payment",
        },
      ],
    },
    {
      label: "Help",
      items: [
        {
          title: "Live Chat",
          icon: LiveChatIcon,
          href: "/dashboard/admin-dashboard/live-chat",
        },
        {
          title: "Support",
          icon: SupportIcon,
          href: "/dashboard/admin-dashboard/admin-support",
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          title: "Settings",
          icon: SettingsIcon,
          href: "/dashboard/admin-dashboard/settings",
        },
      ],
    },
  ];

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
          <Link href={"/"} className="w-[120px] h-[22px] object-contain">
            <LogoIcon className="w-full h-full" />
          </Link>
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

      <div className="overflow-y-auto flex-1">
        {adminSidebarMenu.map((section, idx) => (
          <SidebarSection
            key={idx}
            label={section.label}
            items={section.items}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </aside>
  );
}

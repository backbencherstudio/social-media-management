import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import LogoIcon from "@/public/incons/logo";
import AnalysisIcon from "@/public/incons/analysis-icon";
import ComposeIcon from "@/public/incons/compose";
import ScheduleIcon from "@/public/incons/schedule";
import PostIcon from "@/public/incons/post";
import AssetsIcon from "@/public/incons/assets";
import SocialsIcon from "@/public/incons/socials";
import SupportIcon from "@/public/incons/support";

import { useDispatch } from "react-redux";
import { setId } from "@/src/redux/slice/clientIdSlice";
import DashboardIcon from "@/public/incons/dashboard";
import { useGetClientListQuery } from "@/src/redux/features/reseller/dashboard/dashboard";

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
      {label} {label === "Reseller" && "Dashboard"}
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

export default function ResellerSidebar({
  isMobileMenuOpen,
  onMobileMenuClose,
  role,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Menu definitions
  const resellerSidebarMenu: Section[] = [
    {
      label: role,
      items: [
        {
          title: "Dashboard",
          icon: DashboardIcon,
          href: "/dashboard/reseller-dashboard",
        },
        {
          title: "Analytics",
          icon: AnalysisIcon,
          href: "/dashboard/reseller-dashboard/analytics",
        },
      ],
    },
    {
      label: "Content",
      items: [
        { title: "Compose", icon: ComposeIcon, href: "/dashboard/reseller-dashboard/compose" },
        {
          title: "Schedule",
          icon: ScheduleIcon,
          href: "/dashboard/reseller-dashboard/schedule",
        },
        { title: "Post", icon: PostIcon, href: "/dashboard/reseller-dashboard/posts" },
        {
          title: "Assets",
          icon: AssetsIcon,
          href: "/dashboard/reseller-dashboard/dashboard-assets",
        },
      ],
    },
    // {
    //   label: "Activity",
    //   items: [
    //     {
    //       title: "Automotion",
    //       icon: RiLayoutGridLine,
    //       href: "/dashboard/reseller-dashboard/automation",
    //     },
    //     {
    //       title: "Social Inbox",
    //       icon: SocialInboxIcon,
    //       href: "/dashboard/reseller-dashboard/social-inbox",
    //     },
    //   ],
    // },
    {
      label: "Configuration",
      items: [
        {
          title: "Socials",
          icon: SocialsIcon,
          href: "/dashboard/reseller-dashboard/social-media",
        },
      ],
    },
    {
      label: "Help",
      items: [
        {
          title: "Support",
          icon: SupportIcon,
          href: "/dashboard/reseller-dashboard/help-and-support",
        },
      ],
    },
  ];

  const { data: clientList } = useGetClientListQuery();

  const clients =
    clientList?.data?.map((client: any) => ({
      value: client.id.toString(),
      name: client.name,
    })) || [];

  // console.log(clients);

  const [selectedClientValue, setSelectedClientValue] = useState(
    clients[0]?.value || ""
  );

  const dispatch = useDispatch();

  const handleClientChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedClientValue(event.target.value);
    dispatch(setId(event.target.value));
  };

  const selectedClient = clients.find(
    (client : any) => client.value === selectedClientValue
  );

  const clientInitials = selectedClient
    ? selectedClient.name.substring(0, 2).toUpperCase()
    : "";

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

      <div className={`px-6 mb-6 ${isCollapsed ? "hidden" : "block"}`}>
        <p className="text-sm text-gray-500 mb-4">All Client</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#DAFF05] text-sm font-medium text-gray-900">
              {clientInitials || "MH"}
            </span>
          </div>
          <select
            className="bg-transparent border-none text-sm text-gray-700 focus:outline-none focus:ring-0 cursor-pointer pr-8"
            value={selectedClientValue}
            onChange={handleClientChange}
          >
            {clients.map((client: any) => (
              <option key={client.value} value={client.value}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        {resellerSidebarMenu.map((section, idx) => (
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

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { RiHome5Line, RiLayoutGridLine } from "react-icons/ri";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import LogoIcon from "@/public/incons/logo";
import { usePurchase } from "@/app/context/PurchaseContext";

// const topMenuItems = [
//   { title: "Home", icon: RiHome5Line, href: "/dashboard" },
//   { title: "Assets", icon: RiLayoutGridLine, href: "/dashboard/assets" },
//   { title: "Service", icon: RiLayoutGridLine, href: "/dashboard/service" },
//   { title: "Services", icon: RiLayoutGridLine, href: "/dashboard/services" },
//   {
//     title: "Social Media",
//     icon: RiLayoutGridLine,
//     href: "/dashboard/social-media",
//   },
// ];

const isFreelancer = true;

// Overview
const overviewtopMenuItems = [
  {
    title: "Dashboard",
    icon: RiHome5Line,
    href: "/dashboard/freelancer-dashboard",
  },
  { title: "Analytics", icon: RiLayoutGridLine, href: "/dashboard/analytics" },
];
// Content
const contentMenuItems = [
  {
    title: "Compose",
    icon: RiHome5Line,
    href: "/dashboard/compose",
  },
  { title: "Schedule", icon: RiLayoutGridLine, href: "/dashboard/schedule" },
  { title: "Post", icon: RiLayoutGridLine, href: "/dashboard/posts" },
  {
    title: "Assets",
    icon: RiLayoutGridLine,
    href: "/dashboard/dashboard-assets",
  },
];
// Activity
const activityMenuItems = [
  {
    title: "Automotion",
    icon: RiLayoutGridLine,
    href: "/dashboard/automation",
  },
  {
    title: "Social Inbox",
    icon: RiLayoutGridLine,
    href: "/dashboard/social-inbox",
  },
];
// Configuration
const configurationMenuItems = [
  { title: "Socials", icon: RiLayoutGridLine, href: "/dashboard/social-media" },
];
// Help
const helpMenuItems = [
  { title: "Support", icon: RiLayoutGridLine, href: "/dashboard/support" },
];

interface SidebarProps {
  isMobileMenuOpen: boolean;
  onMobileMenuClose: () => void;
}

export default function AdminAndResellerSidebar({
  isMobileMenuOpen,
  onMobileMenuClose,
}: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { hasPurchased } = usePurchase();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const NavLink = ({ item }: { item: (typeof overviewtopMenuItems)[0] }) => {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        className={`
          flex items-center text-[14px] transition-all duration-200
          ${isCollapsed ? "justify-center px-0" : "px-3 gap-3"}
          p-3 rounded-lg
          ${
            isActive
              ? "bg-[#F5F5F7] text-black"
              : "text-[#4A4C56] hover:bg-gray-100"
          }
        `}
        title={isCollapsed ? item.title : ""}
      >
        <item.icon
          className={`
            w-5 h-5 shrink-0
            ${isActive ? "" : "text-gray-500"}
          `}
        />
        <span
          className={`
            transition-all duration-300
            ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
            ${isActive ? "font-medium" : ""}
            whitespace-nowrap overflow-hidden
          `}
        >
          {item.title}
        </span>
      </Link>
    );
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0
        ${isCollapsed ? "md:w-16" : "w-64"} 
        bg-white border-r border-[#E9E9EA] overflow-hidden
        flex flex-col
      `}
    >
      <div className="flex items-center justify-between p-5 pb-5">
        <div
          className={`
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-[120px]"}
        `}
        >
          <div className="w-[120px] h-[22px] object-contain">
            <LogoIcon className="w-full h-full" />
          </div>
        </div>

        {/* Toggle button for large screens */}
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

        {/* Close button for mobile */}
        <button
          className={`p-2 rounded-lg hover:bg-gray-100 md:hidden
            transition-opacity duration-300
            ${isCollapsed ? "opacity-0" : "opacity-100"}
          `}
          onClick={onMobileMenuClose}
        >
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      <div>
        <div className="px-6 mb-6">
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
        {/* Top Menu Items */}
        {/* <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? 'px-2' : ''}`}>
      <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? "px-2" : ""}`}>
        {topMenuItems.map((item, index) => (
          <NavLink key={index} item={item} />
        ))} */}

        <div>
          <p className="text-sm text-gray-500 px-6">Overview</p>
          {/* Top Menu Items */}
          <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? "px-2" : ""}`}>
            {isFreelancer &&
              overviewtopMenuItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
          </nav>
        </div>

        <div>
          <p className="text-sm text-gray-500 px-6">Content</p>
          {/* Top Menu Items */}
          <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? "px-2" : ""}`}>
            {isFreelancer &&
              contentMenuItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
          </nav>
        </div>

        <div>
          <p className="text-sm text-gray-500 px-6">Activity</p>
          {/* Top Menu Items */}
          <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? "px-2" : ""}`}>
            {isFreelancer &&
              activityMenuItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
          </nav>
        </div>

        <div>
          <p className="text-sm text-gray-500 px-6">Configuration</p>
          {/* Top Menu Items */}
          <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? "px-2" : ""}`}>
            {isFreelancer &&
              configurationMenuItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
          </nav>
        </div>

        <div>
          <p className="text-sm text-gray-500 px-6">Help</p>
          {/* Top Menu Items */}
          <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? "px-2" : ""}`}>
            {isFreelancer &&
              helpMenuItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}

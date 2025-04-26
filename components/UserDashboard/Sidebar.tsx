import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { IoMdClose } from "react-icons/io";
import { RiHome5Line, RiLayoutGridLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { TbFileInvoice } from "react-icons/tb";
import Image from 'next/image';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const topMenuItems = [
  { title: "Home", icon: RiHome5Line, href: "/dashboard" },
  { title: "Services", icon: RiLayoutGridLine, href: "/dashboard/services" },
];

const bottomMenuItems = [
  {
    title: "Settings",
    subItems: [
      { title: "Profile/account", icon: BsPerson, href: "/dashboard/profile" },
      { title: "Payment", icon: HiOutlineCreditCard, href: "/dashboard/payment" },
      { title: "Invoices", icon: TbFileInvoice, href: "/dashboard/invoices" },
    ]
  },
  // { title: "Logout", icon: LogOut, href: "/logout" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const NavLink = ({ item }: { item: typeof topMenuItems[0] | typeof bottomMenuItems[0]['subItems'][0] }) => {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        className={`
          flex items-center transition-all duration-200
          ${isCollapsed ? 'justify-center px-0' : 'px-3 gap-3'}
          p-3 rounded-lg
          ${isActive ? 'bg-[#F5F5F7] text-black' : 'text-gray-600 hover:bg-gray-100'}
        `}
        title={isCollapsed ? item.title : ''}
      >
        <item.icon
          className={`
            w-5 h-5 shrink-0
            ${isActive ? '' : 'text-gray-500'}
          `}
        />
        <span
          className={`
            transition-all duration-300
            ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}
            ${isActive ? 'font-medium' : ''}
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
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
        ${isCollapsed ? 'md:w-16' : 'w-64'} 
        bg-white shadow-lg overflow-hidden
        flex flex-col
      `}
    >
      <div className="flex items-center justify-between p-5 pb-5">
        <div className={`
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-[120px]'}
        `}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className='w-full h-[22px] object-contain'
          />
        </div>

        {/* Toggle button for large screens */}
        <button
          className='hidden md:block cursor-pointer shrink-0 transition-transform duration-300'
          onClick={toggleCollapse}
        >
          <div className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
            {isCollapsed ? (
              <PanelLeftOpen className='size-6 text-gray-600 hover:text-gray-900' />
            ) : (
              <PanelLeftClose className='size-6 text-gray-600 hover:text-gray-900' />
            )}
          </div>
        </button>

        {/* Close button for mobile */}
        <button
          className={`            p-2 rounded-lg hover:bg-gray-100 md:hidden
            transition-opacity duration-300
            ${isCollapsed ? 'opacity-0' : 'opacity-100'}
          `}
          onClick={onClose}
        >
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      {/* Top Menu Items */}
      <nav className={`flex-1 p-4 space-y-2 ${isCollapsed ? 'px-2' : ''}`}>
        {topMenuItems.map((item, index) => (
          <NavLink key={index} item={item} />
        ))}
      </nav>

      {/* Bottom Menu Items */}
      <nav className={`p-4 space-y-2 ${isCollapsed ? 'px-2' : ''}`}>
        <div className="border-t border-gray-200 pt-2">
          {!isCollapsed && (
            <h3 className="text-gray-500 text-sm font-medium px-3 mb-2">Settings</h3>
          )}
          {bottomMenuItems[0].subItems.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </div>
      </nav>
    </aside>
  );
}


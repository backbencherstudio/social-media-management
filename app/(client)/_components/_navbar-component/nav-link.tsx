import Link from "next/link";

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  suffix?: string;
}

export const NavLink = ({ icon, text, className = "", suffix }: NavLinkProps) => (
  <div className={`flex items-center gap-2 hover:text-black hover:bg-[#F6F8FA] rounded-lg p-2 transition-all duration-200 ${className}`}>
    <Link href="#" className="flex items-center gap-2 w-full">
      {icon}
      <span>{text}</span>
      {suffix && <span className="text-sm ml-1">{suffix}</span>}
    </Link>
  </div>
);

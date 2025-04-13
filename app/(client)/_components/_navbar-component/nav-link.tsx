import Link from "next/link";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export const NavLink = ({ href, icon, text, className = "" }: NavLinkProps) => (
  <li className="list-none">
    <Link
      href={href}
      className={`flex items-center gap-2 hover:text-black hover:bg-[#F6F8FA] rounded-lg p-2 transition-all duration-200 ${className}`}
      onClick={(e) => {
        // Prevent the dropdown from closing immediately
        e.stopPropagation();
      }}
    >
      {icon} 
      <span className="serotiva-regular">{text}</span>
    </Link>
  </li>
);

import Link from "next/link";
import PricingIcon from "@/public/incons/pricing";
import EditIcon from "@/public/incons/edit";
import EmojiIcon from "@/public/incons/emoji";
import FileTextIcon from "@/public/incons/file-text";
import AddIcon from "@/public/incons/add-icon";
import WatchIcon from "@/public/incons/watch-icon";
import BookIcon from "@/public/incons/book-icon";

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const NavLink = ({ icon, text, className = "" }: NavLinkProps) => (
  <li className="list-none">
    <Link
      href="#"
      className={`flex items-center gap-2 hover:text-black hover:bg-[#F6F8FA] rounded-lg p-2 transition-all duration-200 ${className}`}
    >
      {icon} {text}
    </Link>
  </li>
);

const ServiceSection = () => (
  <div>
    <p className="text-gray-500 serotiva-regular text-sm">SERVICES</p>
    <ul className="mt-2 space-y-2 serotiva-regular text-lg text-[#1D1D1F]">
      <NavLink
        icon={<PricingIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Pricing"
      />
      <NavLink
        icon={<EditIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Our Work"
      />
      <NavLink
        icon={<EmojiIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Reviews"
      />
    </ul>
  </div>
);

const CompanySection = () => (
  <div>
    <p className="text-gray-500 serotiva-regular text-sm">COMPANY</p>
    <ul className="mt-2 space-y-2">
      <NavLink
        icon={<FileTextIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="About Us →"
      />
      <NavLink
        icon={<AddIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Book a Demo"
      />
    </ul>
  </div>
);

const LearnSection = () => (
  <div>
    <p className="text-gray-500 serotiva-regular text-sm">LEARN</p>
    <ul className="mt-2 space-y-2">
      <NavLink
        icon={<WatchIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Watch Demo Video"
      />
      <NavLink
        icon={<BookIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Blog"
      />
    </ul>
  </div>
);

export const AboutUsDropdownContent = () => (
  <div className="bg-white w-full p-6 rounded-xl">
    <div className="grid grid-cols-3 gap-4">
      <ServiceSection />
      <CompanySection />
      <LearnSection />
    </div>
  </div>
);

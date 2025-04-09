import MediaIcon from "@/public/incons/media-icon";
import { NavLink } from "./nav-link";
import EmailIcon from "@/public/incons/email-icon";
import WatchIcon from "@/public/incons/watch-icon";
import BookIcon from "@/public/incons/book-icon";
import LinkIcon from "@/public/incons/link-icon";
import LikeIcon from "@/public/incons/like-icon";
import StarIcon from "@/public/incons/star-icon";
import CameraIcon from "@/public/incons/camera-icon";
import AnalysisIcon from "@/public/incons/analysis-icon";
import EditIcon from "@/public/incons/edit";

export const ServicesDropdownContent = () => (
  <div className="bg-white w-full p-1 rounded-xl">
    <div className="grid grid-cols-2">
      <div className="space-y-4 list-none"> {/* Added list-none class */}
        <NavLink
          icon={<MediaIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Social Media Posts"
        />
        <NavLink
          icon={<WatchIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Short-Form Videos"
        />
        <NavLink
          icon={<EmailIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Email Design"
        />
        <NavLink
          icon={<BookIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Blog Post"
        />
        <NavLink
          icon={<LikeIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Instagram Growth"
        />
      </div>
      <div className="space-y-4 list-none"> {/* Added list-none class */}
        <NavLink
          icon={<LinkIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="SEO Backlinks"
        />
        <NavLink
          icon={<StarIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Review Management"
          className="text-gray-500"
          suffix="(Coming soon)"
        />
        <NavLink
          icon={<CameraIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="UGC Videos"
          className="text-gray-500"
          suffix="(Coming soon)"
        />
        <NavLink
          icon={<AnalysisIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Meta Ads Management"
          className="text-gray-500"
          suffix="(Coming soon)"
        />
        <NavLink
          icon={<EditIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
          text="Become a Reseller"
        />
      </div>
    </div>
  </div>
);

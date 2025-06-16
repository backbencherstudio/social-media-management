import MediaIcon from "@/public/incons/media-icon";
import { NavLink } from "./nav-link";
import EmailIcon from "@/public/incons/email-icon";
import WatchIcon from "@/public/incons/watch-icon";
import BookIcon from "@/public/incons/book-icon";
import LinkIcon from "@/public/incons/link-icon";
import StarIcon from "@/public/incons/star-icon";
import AnalysisIcon from "@/public/incons/analysis-icon";
import UGCVideosIcon from "@/public/incons/ugc-videos";
import InstagramGrowthIcon from "@/public/incons/instagram-growth";

export const ServicesDropdownContent = () => (
  <div className="bg-white w-full p-6 rounded-xl">
    <div className="grid grid-cols-3 gap-4">
      <div>
        <p className="text-gray-500 serotiva-regular text-sm">SOCIAL MEDIA</p>
        <ul className="mt-2 space-y-2">
          <NavLink
            href="/services/social-media-posts"
            icon={<MediaIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
            text="Social Media Posts"
          />
          <NavLink
            href="/services/short-video"
            icon={<WatchIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
            text="Short-Form Videos"
          />
          <NavLink
            href="/services/email-design"
            icon={<EmailIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
            text="Email Design"
          />
        </ul>
      </div>

      <div>
        <p className="text-gray-500 serotiva-regular text-sm">CONTENT</p>
        <ul className="mt-2 space-y-2">
          <NavLink
            href="/services/seo-blogs"
            icon={<BookIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
            text="Blog Post"
          />
          <NavLink
            href="/services/instagram-growth"
            icon={
              <InstagramGrowthIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />
            }
            text="Instagram Growth"
          />
          <NavLink
            href="/services/seo-backlinks"
            icon={<LinkIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
            text="SEO Backlinks"
          />
        </ul>
      </div>

      <div>
        <p className="text-gray-500 serotiva-regular text-sm truncate">COMING SOON</p>
        <ul className="mt-2 space-y-2">
          <NavLink
            href="/services/review-management"
            icon={<StarIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded flex-shrink-0" />}
            text="Review Management"
            className="whitespace-nowrap overflow-hidden text-ellipsis"
          />
          <NavLink
            href="/services/ugc-videos"
            icon={
              <UGCVideosIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded flex-shrink-0" />
            }
            text="UGC Videos"
            className="whitespace-nowrap overflow-hidden text-ellipsis"
          />
          <NavLink
            href="/services/meta-ads"
            icon={<AnalysisIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded flex-shrink-0" />}
            text="Meta Ads Management"
            className="whitespace-nowrap overflow-hidden text-ellipsis"
          />
        </ul>
      </div>
    </div>
  </div>
);

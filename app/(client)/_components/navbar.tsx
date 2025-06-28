"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

// Custom Components

// Assets
import PricingIcon from "@/public/incons/pricing";
import EditIcon from "@/public/incons/edit";
import EmojiIcon from "@/public/incons/emoji";
import FileTextIcon from "@/public/incons/file-text";
import AddIcon from "@/public/incons/add-icon";
import WatchIcon from "@/public/incons/watch-icon";
import BookIcon from "@/public/incons/book-icon";
import MediaIcon from "@/public/incons/media-icon";
import EmailIcon from "@/public/incons/email-icon";
import LinkIcon from "@/public/incons/link-icon";
import StarIcon from "@/public/incons/star-icon";
import CameraIcon from "@/public/incons/camera-icon";
import AnalysisIcon from "@/public/incons/analysis-icon";

// Navigation Menu Items Components
const AboutUsDropdownContent = () => (
  <div className="bg-white w-full p-6 rounded-xl">
    <div className="grid grid-cols-3 gap-4">
      <ServiceSection />
      <CompanySection />
      <LearnSection />
    </div>
  </div>
);

// about part start
const ServiceSection = () => (
  <div>
    <p className="text-gray-500 serotiva-regular text-sm">SERVICES</p>
    <ul className="mt-2 space-y-2 serotiva-regular text-lg text-[#1D1D1F]">
      <NavLink
        icon={<PricingIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Pricing"
        href="/pricing-and-package"
      />
      <NavLink
        icon={<EditIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Our Work"
        href="/our-work"
      />
      <NavLink
        icon={<EmojiIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Reviews"
        href="/reviews"
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
        text="About Us"
        href="/about"
      />
      <NavLink
        icon={<AddIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Get Started"
        href="/get-started"
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
        href="/demo"
      />
      <NavLink
        icon={<BookIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Blog"
        href="/blog"
      />
    </ul>
  </div>
);
// about part end

// Update NavLink component to accept href prop
const NavLink = ({ icon, text, className = "", href }) => (
  <li className="list-none">
    <Link
      href={href}
      className={`flex items-center gap-2 hover:text-black hover:bg-[#F6F8FA] rounded-lg p-2 transition-all duration-200 ${className}`}
    >
      {icon} {text}
    </Link>
  </li>
);

// Mobile Navigation Components
const MobileAboutUsDropdown = ({ isOpen, onToggle }) => (
  <div>
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full serotiva-regular text-left"
    >
      About us
      <ChevronDown
        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>

    {/* mobile device */}
    {isOpen && (
      <div className="mt-3 ml-4 space-y-4">
        <MobileSection title="SERVICES">
          <MobileNavLink
            href="/pricing-and-package"
            icon={<PricingIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Pricing"
          />
          <MobileNavLink
            href="/our-work"
            icon={<EditIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Our Work"
          />
          <MobileNavLink
            href="/reviews"
            icon={<EmojiIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Reviews"
          />
        </MobileSection>

        <MobileSection title="COMPANY">
          <MobileNavLink
            href="/about"
            icon={<FileTextIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="About Us →"
          />
          <MobileNavLink
            href="/get-started"
            icon={<AddIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Get Started"
          />
        </MobileSection>

        <MobileSection title="LEARN">
          <MobileNavLink
            href="/video"
            icon={<WatchIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Watch Demo Video"
          />
          <MobileNavLink
            href="/blog"
            icon={<BookIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Blog"
          />
        </MobileSection>
      </div>
    )}
  </div>
);

const MobileSection = ({ title, children }) => (
  <div>
    <p className="text-gray-500 serotiva-regular text-sm mb-2">{title}</p>
    <div className="space-y-3">{children}</div>
  </div>
);

const MobileNavLink = ({ href, icon, text }) => (
  <Link
    href={href}
    className="flex items-center gap-2 hover:text-black transition"
  >
    {icon}
    <span className="serotiva-regular">{text}</span>
  </Link>
);

// Main Navbar Component
import { ServicesDropdownContent } from "./_navbar-component/services-dropdown";
import LogoIcon from "@/public/incons/logo";
import { BsArrowUpRightCircle } from "react-icons/bs";
import InstagramGrowthIcon from "@/public/incons/instagram-growth";
import { useGetCurrentUserQuery } from "@/src/redux/features/user/user-auth";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";

// services dropdown mobile
const MobileServicesDropdown = ({ isOpen, onToggle }) => (
  <div>
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full serotiva-regular text-left"
    >
      Services
      <ChevronDown
        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>

    {isOpen && (
      <div className="mt-3 ml-4 space-y-4">
        <MobileSection title="SOCIAL MEDIA">
          <MobileNavLink
            href="/services/social-media-posts"
            icon={<MediaIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Social Media Posts"
          />
          <MobileNavLink
            href="/services/short-videos"
            icon={<WatchIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Short-Form Videos"
          />
          <MobileNavLink
            href="/services/email-design"
            icon={<EmailIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Email Design"
          />
        </MobileSection>
        <MobileSection title="CONTENT">
          <MobileNavLink
            href="/services/blog-post"
            icon={<BookIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Blog Post"
          />
          <MobileNavLink
            href="/services/instagram-growth"
            icon={
              <InstagramGrowthIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
            }
            text="Instagram Growth"
          />
          <MobileNavLink
            href="/services/seo-backlinks"
            icon={<LinkIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="SEO Backlinks"
          />
        </MobileSection>
        <MobileSection title="COMING SOON">
          <MobileNavLink
            href="/services/review-management"
            icon={<StarIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Review Management"
          />
          <MobileNavLink
            href="/services/ugc-videos"
            icon={<CameraIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="UGC Videos"
          />
          <MobileNavLink
            href="/services/meta-ads"
            icon={<AnalysisIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Meta Ads Management"
          />
        </MobileSection>
      </div>
    )}
  </div>
);

// Update the Navbar component to include state for Services dropdown
export function Navbar() {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [token, setToken] = useState("");
  const { data: user } = useGetCurrentUserQuery(token);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token);
    };
    fetchToken();
  }, []);

  return (
    <header className="w-full shadow bg-[#FFF]">
      <div className="container px-4 2xl:px-0 py-[18px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <LogoIcon />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="relative hidden lg:block">
          <NavigationMenuList className="hidden md:flex space-x-6 text-base text-gray-700">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:text-blue-500 cursor-pointer serotiva-regular">
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out absolute left-0 top-0 w-[700px]">
                <AboutUsDropdownContent />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:text-blue-500 serotiva-regular cursor-pointer">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out absolute left-0 top-0 w-[700px]"
                onClick={(e) => e.stopPropagation()}
              >
                <ServicesDropdownContent />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="examples"
                className="hover:text-blue-500 transition serotiva-regular"
              >
                Examples
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/pricing-and-package"
                className="hover:text-blue-500 transition serotiva-regular"
              >
                Pricing
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white p-5 pt-10"
          >
            <nav className="flex flex-col gap-4">
              <div className="flex flex-col space-y-3 text-base">
                <MobileAboutUsDropdown
                  isOpen={isAboutMenuOpen}
                  onToggle={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                />
                <MobileServicesDropdown
                  isOpen={isServicesMenuOpen}
                  onToggle={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                />
                <Link href="examples" className="serotiva-regular">
                  Examples
                </Link>
                <Link href="/pricing-and-package" className="serotiva-regular">
                  Pricing
                </Link>
              </div>

              <div className="flex flex-col space-y-3 mt-4">
                {user?.data?.email ? (
                  <Link href="/dashboard" className="serotiva-regular">
                    Dashboard
                  </Link>
                ) : (
                  <Link href="/auth/login" className="serotiva-regular">
                    Log in
                  </Link>
                )}
                {/* <Link href="/auth/login" className="serotiva-regular">
                  Log in
                </Link> */}
                <Link href="get-startd" className="serotiva-regular">
                  Get Started
                </Link>
                <Link
                  href="book-demo"
                  className="flex items-center py-1 px-4 rounded-md bg-black hover:bg-gray-800 text-white serotiva-regular"
                >
                  Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 text-base text-gray-700">
          {user?.data?.email ? (
            <Link href="/dashboard" className="hover:text-blue-500 transition serotiva-regular">
              Dashboard
            </Link>
          ) : (
            <Link href="/auth/login" className="hover:text-blue-500 transition serotiva-regular">
              Log in
            </Link>
          )}
          <Link href="/" className="hover:text-blue-500 serotiva-regular">
            Get Started
          </Link>
          <Link
            href="book-demo"
            className="flex items-center py-1 px-4 rounded-md bg-black hover:bg-gray-800 text-white serotiva-regular"
          >
            Book a Demo <BsArrowUpRightCircle className="ml-2 w-5 h-5 " />
          </Link>
        </div>
      </div>
    </header>
  );
}

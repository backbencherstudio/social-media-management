"use client";

import { useState } from "react";
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
import CustomImage from "@/components/reusable/CustomImage";

// Assets
import logo from "@/public/logo.png";
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
import LikeIcon from "@/public/incons/like-icon";
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

const ServiceSection = () => (
  <div>
    <p className="text-gray-500 serotiva-regular text-sm">SERVICES</p>
    <ul className="mt-2 space-y-2 serotiva-regular text-lg text-[#1D1D1F]">
      <NavLink
        icon={<PricingIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" />}
        text="Pricing"
        href="/pricing"
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

// Update NavLink component to accept href prop
const NavLink = ({ icon, text, className = "", href = "#" }) => (
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

    {isOpen && (
      <div className="mt-3 ml-4 space-y-4">
        <MobileSection title="SERVICES">
          <MobileNavLink
            icon={<PricingIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Pricing"
          />
          <MobileNavLink
            icon={<EditIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Our Work"
          />
          <MobileNavLink
            icon={<EmojiIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Reviews"
          />
        </MobileSection>

        <MobileSection title="COMPANY">
          <MobileNavLink
            icon={<FileTextIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="About Us →"
          />
          <MobileNavLink
            icon={<AddIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Get Started"
          />
        </MobileSection>

        <MobileSection title="LEARN">
          <MobileNavLink
            icon={<WatchIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Watch Demo Video"
          />
          <MobileNavLink
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

const MobileNavLink = ({ icon, text }) => (
  <Link
    href="#"
    className="flex items-center gap-2 hover:text-black transition"
  >
    {icon}
    <span className="serotiva-regular">{text}</span>
  </Link>
);

// Main Navbar Component
import { ServicesDropdownContent } from "./_navbar-component/services-dropdown";
import LogoIcon from "@/public/incons/logo";

// Add this new component for Mobile Services Dropdown
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
            icon={<MediaIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Social Media Posts"
          />
          <MobileNavLink
            icon={<WatchIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Short-Form Videos"
          />
          <MobileNavLink
            icon={<EmailIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Email Design"
          />
        </MobileSection>

        <MobileSection title="CONTENT">
          <MobileNavLink
            icon={<BookIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Blog Post"
          />
          <MobileNavLink
            icon={<LikeIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Instagram Growth"
          />
          <MobileNavLink
            icon={<LinkIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="SEO Backlinks"
          />
        </MobileSection>

        <MobileSection title="COMING SOON">
          <MobileNavLink
            icon={<StarIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="Review Management"
          />
          <MobileNavLink
            icon={<CameraIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />}
            text="UGC Videos"
          />
          <MobileNavLink
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

  return (
    <header className="w-full shadow bg-[#FFF]">
      <div className="container px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {/* <CustomImage
            src={logo.src}
            alt="Company Logo"
            width={120}
            height={40}
            layout="fixed"
          /> */}
          <LogoIcon/>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="relative hidden lg:block">
          <NavigationMenuList className="hidden md:flex space-x-6 text-sm text-gray-700">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent cursor-pointer serotiva-regular">
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out absolute left-0 top-0 w-[700px]">
                <AboutUsDropdownContent />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent serotiva-regular">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out absolute left-0 top-0 w-[700px]">
                <ServicesDropdownContent />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#"
                className="hover:text-black transition serotiva-regular"
              >
                Examples
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#"
                className="hover:text-black transition serotiva-regular"
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
                <Link href="#" className="serotiva-regular">
                  Examples
                </Link>
                <Link href="#" className="serotiva-regular">
                  Pricing
                </Link>
              </div>

              <div className="flex flex-col space-y-3 mt-4">
                <Link href="/auth/login" className="serotiva-regular">
                  Log in
                </Link>
                <Link href="#" className="serotiva-regular">
                  Get Started
                </Link>
                <Button className="bg-black hover:bg-gray-800 text-white serotiva-regular">
                Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700">
          <Link
            href="/auth/login"
            className="hover:text-black transition serotiva-regular"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="hover:text-black transition serotiva-regular"
          >
            Get Starded
          </Link>
          <Button className="bg-black hover:bg-gray-800 text-white serotiva-regular">
          Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

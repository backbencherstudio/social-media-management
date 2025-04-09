"use client";

// Add these imports
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/public/logo.png";
import CustomImage from "@/components/reusable/CustomImage";
import {
  PenTool,
  Smile,
  Calendar,
  FileText,
  BookOpen,
  PlusCircle,
  ArrowRight,
} from "lucide-react";
// Add this import at the top with other imports
import PricingIcon from "@/public/incons/pricing";
import EditIcon from "@/public/incons/edit";
import EmojiIcon from "@/public/incons/emoji";
import FileTextIcon from "@/public/incons/file-text";
import AddIcon from "@/public/incons/add-icon";
import WatchIcon from "@/public/incons/watch-icon";
import BookIcon from "@/public/incons/book-icon";

// Add this import at the top
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  return (
    <header className="w-full shadow bg-[#FFF]">
      <div className="container px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <CustomImage
            src={logo.src}
            alt="Company Logo"
            width={120}
            height={40}
            layout="fixed"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="relative hidden lg:block">
          <NavigationMenuList className="hidden md:flex space-x-6 text-sm text-gray-700">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent cursor-pointer serotiva-regular">
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out absolute left-0 top-0 w-[700px]">
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {/* SERVICES */}
                    <div>
                      <p className="text-gray-500 serotiva-regular text-sm">
                        SERVICES
                      </p>
                      <ul className="mt-2 space-y-2 serotiva-regular text-lg text-[#1D1D1F]">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <PricingIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded"/>{" "}
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <EditIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" /> Our Work
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <EmojiIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" /> Reviews
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                      <p className="text-gray-500 serotiva-regular text-sm">
                        COMPANY
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <FileTextIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded"/> About Us →
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <AddIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" /> Book a Demo
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* LEARN */}
                    <div>
                      <p className="text-gray-500 serotiva-regular text-sm">LEARN</p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <WatchIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" /> Watch Demo Video
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover-text-black transition"
                          >
                            <BookIcon className="w-8 h-8 bg-[#F6F8FA] p-2 rounded" /> Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent serotiva-regular">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white  p-4 rounded-md">
                <div className="text-sm">What we offer...</div>
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
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-5 pt-10">
            <nav className="flex flex-col gap-4">
              <div className="flex flex-col space-y-3 text-base">
                {/* About Us Section with Dropdown */}
                <div>
                  <button
                    onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                    className="flex items-center justify-between w-full serotiva-regular text-left"
                  >
                    About us
                    <ChevronDown className={`w-4 h-4 transition-transform ${isAboutMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isAboutMenuOpen && (
                    <div className="mt-3 ml-4 space-y-4">
                      {/* SERVICES */}
                      <div>
                        <p className="text-gray-500 serotiva-regular text-sm mb-2">SERVICES</p>
                        <div className="space-y-3">
                          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                            <PricingIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
                            <span className="serotiva-regular">Pricing</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                            <EditIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
                            <span className="serotiva-regular">Our Work</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                            <EmojiIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
                            <span className="serotiva-regular">Reviews</span>
                          </Link>
                        </div>
                      </div>

                      {/* COMPANY */}
                      <div>
                        <p className="text-gray-500 serotiva-regular text-sm mb-2">COMPANY</p>
                        <div className="space-y-3">
                          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                            <FileTextIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
                            <span className="serotiva-regular">About Us →</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                            <AddIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
                            <span className="serotiva-regular">Book a Demo</span>
                          </Link>
                        </div>
                      </div>

                      {/* LEARN */}
                      <div>
                        <p className="text-gray-500 serotiva-regular text-sm mb-2">LEARN</p>
                        <div className="space-y-3">
                          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                            <WatchIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
                            <span className="serotiva-regular">Watch Demo Video</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                            <BookIcon className="w-6 h-6 bg-[#F6F8FA] p-1 rounded" />
                            <span className="serotiva-regular">Blog</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Rest of mobile menu items */}
                <Link href="#" className="serotiva-regular">
                  Services
                </Link>
                <Link href="#" className="serotiva-regular">
                  Examples
                </Link>
                <Link href="#" className="serotiva-regular">
                  Pricing
                </Link>
              </div>
              
              <div className="flex flex-col space-y-3 mt-4">
                <Link href="#" className="serotiva-regular">
                  Log in
                </Link>
                <Link href="#" className="serotiva-regular">
                  Book a Demo
                </Link>
                <Button className="bg-black hover:bg-gray-800 text-white serotiva-regular w-full">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700">
          <Link href="#" className="hover:text-black transition serotiva-regular">
            Log in
          </Link>
          <Link href="#" className="hover:text-black transition serotiva-regular">
            Book a Demo
          </Link>
          <Button className="bg-black hover:bg-gray-800 text-white serotiva-regular">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

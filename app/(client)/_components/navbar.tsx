"use client";

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
  MapPin,
  PenTool,
  Smile,
  Calendar,
  FileText,
  BookOpen,
  PlusCircle,
  ArrowRight,
} from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b">
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

        {/* Navigation */}
        <NavigationMenu className="relative">
          <NavigationMenuList className="hidden md:flex space-x-6 text-sm text-gray-700">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent cursor-pointer">
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out absolute left-0 top-0 w-[700px]">
                <div className="bg-white w-full shadow-lg p-6 rounded-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {/* SERVICES */}
                    <div>
                      <p className="text-gray-500">SERVICES</p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <MapPin className="w-4 h-4" /> Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <PenTool className="w-4 h-4" /> Our Work
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <Smile className="w-4 h-4" /> Reviews
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                      <p className="text-gray-500">COMPANY</p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <FileText className="w-4 h-4" /> About Us →
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <PlusCircle className="w-4 h-4" /> Book a Demo
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* LEARN */}
                    <div>
                      <p className="text-gray-500">LEARN</p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover:text-black transition"
                          >
                            <Calendar className="w-4 h-4" /> Watch Demo Video
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 hover-text-black transition"
                          >
                            <BookOpen className="w-4 h-4" /> Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow p-4 rounded-md">
                <div className="text-sm">What we offer...</div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" className="hover:text-black transition">
                Examples
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" className="hover:text-black transition">
                Pricing
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <Link href="#" className="hover:text-black transition">
            Log in
          </Link>
          <Link href="#" className="hover:text-black transition">
            Book a Demo
          </Link>
          <Button className="bg-black hover:bg-gray-800 text-white">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

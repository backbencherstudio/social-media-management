"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import LogoIcon from "@/public/incons/logo";
import ScheduleButton from "./schedule-button";

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F9] py-12 lg:py-[100px] text-gray-700">
      <div className="container px-4 2xl:px-0">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 gap-6 lg:gap-4">
          <div>
            <LogoIcon />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <h4 className="text-[#1D1D1F] text-2xl font-bold whitespace-nowrap">Ready to give us a try?</h4>
            <ScheduleButton
              text="Book a Demo"
              className="bg-black text-white hover:bg-gray-800"
            />
          </div>
        </div>

        {/* Description and Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-t border-gray-200">
          {/* Company Description */}
          <div className="lg:pr-12 col-span-1 sm:col-span-2 lg:col-span-1">
            <p className="text-gray-600 text-sm">
              TagGrowth is a flexible subscription-based service enabled by technology to deliver compelling creative at scale.
            </p>
          </div>

          {/* TagGrowth Links */}
          <div>
            <h4 className="text-[#1B1D28] text-lg font-semibold mb-4">TagGrowth</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-black">About us</Link></li>
              <li><Link href="/pricing" className="hover:text-black">Pricing</Link></li>
              <li><Link href="/examples" className="hover:text-black">Examples</Link></li>
              <li><Link href="/book-demo" className="hover:text-black">Book a Demo</Link></li>
              <li><Link href="/demo-video" className="hover:text-black">Watch Demo Video</Link></li>
              <li><Link href="/sitemap" className="hover:text-black">Site Map</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1B1D28] text-lg ">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/social-media" className="hover:text-black">Social Media Management</Link></li>
              <li><Link href="/services/videos" className="hover:text-black">Short-Form Videos</Link></li>
              <li><Link href="/services/email" className="hover:text-black">Email Design</Link></li>
              <li><Link href="/services/seo" className="hover:text-black">SEO Blog posts</Link></li>
              <li><Link href="/services/reseller" className="hover:text-black">Become a Reseller</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1B1D28] text-lg ">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/signup" className="hover:text-black">Sign Up</Link></li>
              <li><Link href="/login" className="hover:text-black">Log In</Link></li>
              <li><Link href="/help" className="hover:text-black">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-black">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-6 border-t border-gray-200 text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-4 order-1 lg:order-none">
            <Link href="#" className="hover:text-black">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-black">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-black">
              <Linkedin size={20} />
            </Link>
          </div>

          <div className="order-3 lg:order-none">&copy; TagGrowth. All rights reserved.</div>

          <div className="flex flex-wrap justify-center items-center gap-4 order-2 lg:order-none">
            <Link href="/terms" className="hover:text-black whitespace-nowrap">Terms & Conditions</Link>
            <span className="hidden lg:inline">|</span>
            <Link href="/privacy" className="hover:text-black whitespace-nowrap">Privacy Policy</Link>
            <span className="hidden lg:inline">|</span>
            <Link href="/refund" className="hover:text-black whitespace-nowrap">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

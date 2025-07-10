import FacebookIcon from "@/public/incons/facebook";
import InstagramIcon from "@/public/incons/instagram";
import TiktokIcon from "@/public/incons/landin-page/ToktokIcon";
import YoutubeIcon from "@/public/incons/landin-page/youtubeIcon";
import LinkedInIcon from "@/public/incons/linkedIn";
import PinterestIcon from "@/public/incons/pinterest-icon";
import { Service } from "@/types/services";
import { Mail, FileText, ExternalLink } from "lucide-react";


export const serviceOptions: Service[] = [
  {
    id: "social-media",
    name: "Social Media Posts",
    description:
      "Static social media content created & posted monthly to your channels.",
    icon: <Mail className="text-white" size={20} />,
    startingPrice: 99,
    endingPrice: 359,
    selectLabel: "Post quantity",
    plans: [
      { label: "10 posts - $99/mo", basePrice: 99 },
      { label: "15 posts - $149/mo", basePrice: 149 },
      { label: "20 posts - $189/mo", basePrice: 189 },
      { label: "25 posts - $239/mo", basePrice: 239 },
      { label: "30 posts - $279/mo", basePrice: 279 },
      { label: "35 posts - $319/mo", basePrice: 319 },
      { label: "40 posts - $359/mo", basePrice: 359 },
    ],
    channels: [
      {
        id: "facebook",
        name: "Facebook",
        icon: <FacebookIcon />,
        price: "$0.00",
      },
      {
        id: "instagram",
        name: "Instagram",
        icon: <InstagramIcon />,
        price: "$0.00",
      },
      {
        id: "linkedin",
        name: "Linkedin",
        icon: <LinkedInIcon />,
        price: "$0.00",
      },
      {
        id: "pinterest",
        name: "Pinterest",
        icon: <PinterestIcon />,
        price: "$0.00",
      },
      {
        id: "youtube",
        name: "Youtube",
        icon: <YoutubeIcon />,
        price: "$0.00",
      },
      { id: "tiktok", name: "Tiktok", icon: <TiktokIcon />, price: "$0.00" },
    ],
  },
  {
    id: "instagram stories",
    name: "Instagram Stories",
    description: "",
    icon: <Mail className="text-white" size={20} />,
    startingPrice: 49,
    endingPrice: 129,
    selectLabel: "Stories quantity",
    plans: [
      { label: "10x Instagram Stories - $49/mo", basePrice: 49 },
      { label: "20x Instagram Stories - $89/mo", basePrice: 89 },
      { label: "30x Instagram Stories - $129/mo", basePrice: 129 },
    ],
    channels: [],
  },
  {
    id: "carousel posts",
    name: "Carousel Posts",
    description: "",
    icon: <Mail className="text-white" size={20} />,
    startingPrice: 10,
    endingPrice: 150,
    selectLabel: "Carousel quantity",
    plans: [
      { label: "2x Carousel Posta - $10/mo", basePrice: 10 },
      { label: "5x Carousel Posta - $25/mo", basePrice: 25 },
      { label: "10x Carousel Posta - $99/mo", basePrice: 50 },
      { label: "15x Carousel Posta - $75/mo", basePrice: 75 },
      { label: "30x Carousel Posta - $150/mo", basePrice: 150 },
    ],
    channels: [],
  },
  {
    id: "Short-Form Videos",
    name: "Short-Form Videos",
    description: "Engaging 20-60 second videos for TikTok, Reels, and Shorts.",
    icon: <Mail className="text-white" size={20} />,
    startingPrice: 99,
    endingPrice: 829,
    selectLabel: "Video quantity",
    plans: [
      { label: "4 videos - $99/mo", basePrice: 99 },
      { label: "8 videos - $189/mo", basePrice: 189 },
      { label: "12 videos - $269/mo", basePrice: 269 },
      { label: "16 posts - $349/mo", basePrice: 349 },
      { label: "20 posts - $429/mo", basePrice: 429 },
      { label: "30 posts - $629/mo", basePrice: 629 },
      { label: "40 posts - $829/mo", basePrice: 829 },
    ],
    channels: [
      {
        id: "facebooks",
        name: "Facebook",
        icon: <FacebookIcon />,
        price: "$0.00",
      },
      {
        id: "instagrams",
        name: "Instagram",
        icon: <InstagramIcon />,
        price: "$0.00",
      },
      {
        id: "linkedins",
        name: "Linkedin",
        icon: <LinkedInIcon />,
        price: "$0.00",
      },
      {
        id: "pinterests",
        name: "Pinterest",
        icon: <PinterestIcon />,
        price: "$0.00",
      },
      {
        id: "youtubes",
        name: "Youtube",
        icon: <YoutubeIcon />,
        price: "$0.00",
      },
      { id: "tiktok", name: "Tiktok", icon: <TiktokIcon />, price: "$0.00" },
    ],
  },
  {
    id: "email-design",
    name: "Email Design",
    description:
      "Emails designed & implemented for your campaigns & flows. Works with any email platform.",
    icon: <Mail className="text-white" size={20} />,
    startingPrice: 149,
    endingPrice: 669,
    selectLabel: "Email quantity",
    plans: [
      { label: "2 emails - $149/mo", basePrice: 149 },
      { label: "4 emails - $289/mo", basePrice: 289 },
      { label: "8 emails - $429/mo", basePrice: 429 },
      { label: "10 emails - $549/mo", basePrice: 549 },
      { label: "12 emails - $669/mo", basePrice: 669 },
    ],
    channels: [],
  },
  {
    id: "seo-blog-posts",
    name: "SEO Blog Posts",
    description:
      "SEO-optimized, 1000-word blog posts to increase rankings on Google.",
    icon: <FileText className="text-white" size={20} />,
    startingPrice: 99,
    endingPrice: 379,
    selectLabel: "Select plan",
    plans: [
      { label: "2 Blog Posts - $99/mo", basePrice: 99 },
      { label: "4 Blog Posts - $179/mo", basePrice: 179 },
      { label: "6 Blog Posts - $249/mo", basePrice: 249 },
      { label: "8 Blog Posts - $319/mo", basePrice: 319 },
      { label: "10 Blog Posts - $379/mo", basePrice: 379 },
    ],
    channels: [],
  },
  {
    id: "seo-backlinks",
    name: "SEO Backlinks",
    description:
      "High-quality DA30+ backlinks to boost your website's search engine rankings.",
    icon: <ExternalLink className="text-white" size={20} />,
    startingPrice: 249,
    endingPrice: 1399,
    selectLabel: "Select plan",
    plans: [
      { label: "3 backlinks - $99/mo", basePrice: 249 },
      { label: "6 backlinks - $99/mo", basePrice: 479 },
      { label: "12 backlinks - $99/mo", basePrice: 899 },
      { label: "20 backlinks - $99/mo", basePrice: 1399 },
    ],
    channels: [],
  },
];

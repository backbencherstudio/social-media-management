import React from 'react'
import Heading from '../../_components/heading-text'
import ParagraphText from '../../_components/paragraph-text'
import SocialCard from './social-card'
import FacebookIcon from "@/public/incons/landin-page/facebook";
import InstaIcon from '@/public/incons/landin-page/insta-icon';
import LinkdinIcon from '@/public/incons/landin-page/LinkdinIcon';
import YoutubeIcon from '@/public/incons/landin-page/youtubeIcon';
import TiktokIcon from '@/public/incons/landin-page/ToktokIcon';
import PinterestIcon from '@/public/incons/pinterest-icon';
import GoogleBusinessIcon from '@/public/incons/google-business-icon';

const socialChannels = [
  {
    icon: <FacebookIcon className="w-6 h-6" />,
    platform: "Facebook",
    count: 10
  },
  {
    icon: <InstaIcon className="w-6 h-6" />,
    platform: "Instagram",
    count: 10
  },
  {
    icon: <LinkdinIcon className="w-6 h-6" />,
    platform: "Linkedin",
    count: 10
  },
  {
    icon: <YoutubeIcon className="w-6 h-6" />,
    platform: "Youtube",
    count: 10
  },
  {
    icon: <TiktokIcon className="w-6 h-6" />,
    platform: "Tiktok",
    count: 10
  },
  {
    icon: <PinterestIcon className="w-6 h-6" />,
    platform: "Pinterest",
    count: 10
  },
  {
    icon: <GoogleBusinessIcon className="w-6 h-6" />,
    platform: "Google my Business",
    count: 10
  }
];

export default function SocialChannel() {
  return (
    <div className='container mx-auto text-center py-20'>
      <Heading text="Social channels" className='text-[42px]'/>
      <ParagraphText 
        paraText="We support scheduling & posting to these social media platforms" 
        className='text-base mt-4 mb-12'
      />
      
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {socialChannels.slice(0, 4).map((channel, index) => (
            <SocialCard
              key={index}
              icon={channel.icon}
              platform={channel.platform}
              count={channel.count}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {socialChannels.slice(4).map((channel, index) => (
            <SocialCard
              key={index + 4}
              icon={channel.icon}
              platform={channel.platform}
              count={channel.count}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

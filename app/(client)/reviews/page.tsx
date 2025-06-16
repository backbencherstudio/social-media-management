import React from "react";
import Heading from "../_components/heading-text";
import Video from "./_components/video";
import ReviewCard from "./_components/review-card";
import profileOne from "@/public/img/pricing/profileOne.png";
import profileTwo from "@/public/img/pricing/profileTwo.png";
import profileThree from "@/public/img/pricing/profileThree.png";
import profileFour from "@/public/img/pricing/profileFour.png";

export default function Reviews() {
  
  const reviews = [
    {
      id: 1,
      image: profileOne,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    },
    {
      id: 2,
      image: profileTwo,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time! ",
    },
    {
      id: 3,
      image: profileFour,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!. The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    },
    {
      id: 4,
      image: profileThree,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    },
    {
      id: 5,
      image: profileOne,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!, The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time! The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    },
    {
      id: 6,
      image: profileOne,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!, The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time! The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    },
    {
      id: 7,
      image: profileThree,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    },
    {
      id: 8,
      image: profileOne,
      name: "Stephen K.",
      position: "Founder & CEO",
      quote:
        "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!, The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time! The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time! equesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!, The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time! The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    },
  ];

  return (
    <div className="container px-2">
      <div className="mt-[148px] mb-[48px]">
        <Heading
          text="Hands down the best social media service. It's like Hootsuite, but they create amazing content for us and post to our socials after we approve"
          className="text-lg md:text-[40px] text-center"
        />

        <Video />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="break-inside-avoid">
              <ReviewCard {...review} image={review.image.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

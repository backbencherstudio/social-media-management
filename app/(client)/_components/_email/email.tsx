"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import emailOne from "@/public/email/one.png";
import emailTwo from "@/public/email/two.png";
import emailThree from "@/public/email/three.png";
import CustomImage from "@/components/reusable/CustomImage";

export default function Email() {
  return (
    <div className="container mx-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        <div className="relative">
          <CustomImage
            src={emailOne.src}
            alt="Discount Offer"
            width={0}
            height={0}
            className="w-full h-auto max-h-full object-contain"
          />
        </div>
        <div className="relative">
          <CustomImage
            src={emailTwo.src}
            alt="Product Launch"
            width={0}
            height={0}
            className="w-full h-auto max-h-full object-contain"
          />
        </div>
        <div className="relative">
          <CustomImage
            src={emailThree.src}
            alt="Special Deal"
            width={0}
            height={0}
            className="w-full h-auto max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

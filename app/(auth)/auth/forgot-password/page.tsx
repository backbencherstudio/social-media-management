"use client";

import CustomImage from "@/components/reusable/CustomImage";
import React, { FormEvent, useState } from "react";
import loginImg from "@/public/login.png";
import LogoIcon from "@/public/incons/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heading from "@/app/(client)/_components/heading-text";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", { email });
  };

  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="w-full flex h-[90vh] shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center">
          <div className="max-w-[400px] mx-auto w-full">
            {/* Logo */}
            <LogoIcon />

            {/* Welcome Text */}
            <div className="mt-8">
              <Heading text="Account recovery" className="text-[32px] font-bold"/>
              <p className="text-gray-600 mt-2">
                We're excited to see you again! Please log in to continue.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter work email"
                  className="h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 h-12"
              >
                Send recovery link
              </Button>
            </form>
            <div>
              <Link
                href="/auth/login"
                className="text-[#1877F2] flex justify-end mt-4 hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-[60%] bg-gray-100">
          <CustomImage
            src={loginImg.src}
            alt="login"
            className="w-full h-[90vh] object-cover"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}

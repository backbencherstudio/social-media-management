"use client";

import CustomImage from "@/components/reusable/CustomImage";
import React, { FormEvent, useState } from "react";
import loginImg from "@/public/login.png";
import LogoIcon from "@/public/incons/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/app/(client)/_components/heading-text";

export default function SetNewPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="w-full flex h-[90vh] shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center">
          <div className="max-w-[400px] mx-auto w-full">
            {/* Logo */}
            <LogoIcon />

            {/* Title */}
            <div className="mt-8">
              {/* <h1 className="text-[32px] font-bold"></h1> */}
              <Heading text="Account recovery"  className="font-bold text-[32px]"/>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="space-y-4">
                <div>
                  <Input
                    type="password"
                    name="newPassword"
                    placeholder="Choose a new password"
                    className="h-12"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="h-12"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-gray-800 h-12 mt-4"
              >
                Save changes
              </Button>
            </form>
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

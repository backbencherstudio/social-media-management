"use client";

import CustomImage from "@/components/reusable/CustomImage";
import React, { FormEvent, useState } from "react";
import loginImg from "@/public/login.png";
import LogoIcon from "@/public/incons/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heading from "@/app/(client)/_components/heading-text";
import { useLoginWithPasswordMutation } from "@/src/redux/auth/all-auth";
import { toast } from "sonner";
import SetCookies from "../_components/set-and-get-token";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginWithPassword() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginWithPassword, { isLoading }] = useLoginWithPasswordMutation();
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirectPath')
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginWithPassword(formData);
    if (res?.data?.success) {
      SetCookies(res);
      toast.success("Login successful");
      router.push(redirect || '/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.type]: e.target.value
    });
  };

  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="w-full flex h-[90vh] rounded-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center">
          <div className="max-w-[400px] mx-auto w-full">
            {/* Logo */}
            <LogoIcon />

            {/* Welcome Text */}
            <div className="mt-8">
              <Heading text="Welcome back" className="text-[32px] font-bold"/>
              <p className="text-gray-600 mt-2">
                We're excited to see you again! Please log in to continue.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter work email"
                    className="h-12"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-12"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 h-12 mt-4 cursor-pointer"
              >
                 {isLoading ? "Logging..." : "Login"}
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

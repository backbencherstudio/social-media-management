"use client";


import React, { FormEvent, useState } from "react";
import loginImg from "@/public/login.png";
import LogoIcon from "@/public/incons/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/app/(client)/_components/heading-text";
import CustomImage from "@/components/reusable/CustomImage";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyRegistrationMutation } from "@/src/redux/auth/all-auth";
import { toast } from "sonner";

export default function VerifyRegistration() {
  const [verifyRegistration, { isLoading }] = useVerifyRegistrationMutation();
  const router = useRouter();
  // const query = useSearchParams();  // Get the query parameters from the URL
  const [password, setpassword] = useState("");

  // Handle form submission to verify registration
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Extract the token from the query parameters
    // const res = await verifyRegistration({
    //   data: { password },
    //   token: query?.get("token"),  // Retrieve the token from the query
    // });

    // Handle success
    // if (res?.data?.success) {
    //   toast.success("Registration verified successfully");
    //   router.push("/auth/login-with-password"); // Redirect to login page after successful verification
    // }
  };

  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="w-full flex h-[90vh] rounded-lg overflow-hidden">
        {/* Left Side - Registration Form */}
        <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center">
          <div className="max-w-[400px] mx-auto w-full">
            {/* Logo */}
            <LogoIcon /> {/* Assuming you have a LogoIcon component */}

            {/* Welcome Text */}
            <div className="mt-8">
              <Heading text="Welcome back" className="text-[32px] font-bold" /> {/* Heading component */}
              <p className="text-gray-600 mt-2">
                We're excited to see you again! Please log in to continue.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter Your Password"
                  className="h-12 focus-visible:ring-0"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)} // Handling password input
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 h-12 mt-4"
              >
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-[60%] bg-gray-100">
          <CustomImage
            src={loginImg.src} // Assuming you have an image source
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

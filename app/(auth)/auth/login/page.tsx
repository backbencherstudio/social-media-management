'use client'

import CustomImage from '@/components/reusable/CustomImage'
import React from 'react'
import loginImg from '@/public/login.png'
import LogoIcon from '@/public/incons/logo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Login() {
  return (
    <div className=" flex">
      <div className=" mx-auto flex h-[600px]">  {/* Added fixed height to parent container */}
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center">
          <div className="max-w-[400px] mx-auto w-full">
            {/* Logo */}
            <LogoIcon />

            {/* Welcome Text */}
            <div className="mt-12">
              <h1 className="text-[32px] font-bold">Welcome back</h1>
              <p className="text-gray-600 mt-2">We're excited to see you again! Please log in to continue.</p>
            </div>

            {/* Login Form */}
            <form className="mt-8 space-y-6">
              <div>
                <Input 
                  type="email" 
                  placeholder="Enter work email"
                  className="h-12"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-gray-800 h-12"
              >
                Login
              </Button>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-[60%] bg-gray-100 h-full"> {/* Added h-full */}
          <CustomImage 
            src={loginImg.src} 
            alt="login" 
            className="w-full h-full object-cover"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}

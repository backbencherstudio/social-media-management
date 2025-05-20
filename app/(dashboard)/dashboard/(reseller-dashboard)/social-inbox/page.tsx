import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import SupportChat from "../help-and-support/_components/support-chat";
import FacebookInfo from "./_components/facebook-info";

export default function SocialInbox() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="p-4 lg:p-6 col-span-1 lg:col-span-8">
        <Tabs
          defaultValue="General Settings"
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-4 lg:gap-6"
        >
          {/* Tabs List on the Left */}
          <div className="bg-white h-auto lg:h-[754px] rounded-lg shadow-sm">
            <TabsList className="flex flex-row lg:flex-col gap-2 w-full h-fit p-3 lg:p-4 overflow-x-auto lg:overflow-x-visible">
              <TabsTrigger
                value="General Settings"
                className="justify-start w-full min-w-[120px] lg:min-w-0 data-[state=active]:bg-gray-100 data-[state=active]:text-black transition-colors rounded-md px-3 lg:px-4 py-2 text-sm lg:text-base flex items-center gap-2"
              >
                <FaFacebook className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Facebook</span>
              </TabsTrigger>
              <TabsTrigger
                value="User & Role Management"
                className="justify-start w-full min-w-[120px] lg:min-w-0 data-[state=active]:bg-gray-100 data-[state=active]:text-black transition-colors rounded-md px-3 lg:px-4 py-2 text-sm lg:text-base flex items-center gap-2"
              >
                <BsTwitterX className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Twitter</span>
              </TabsTrigger>
              <TabsTrigger
                value="Payment & Transactions"
                className="justify-start w-full min-w-[120px] lg:min-w-0 data-[state=active]:bg-gray-100 data-[state=active]:text-black transition-colors rounded-md px-3 lg:px-4 py-2 text-sm lg:text-base flex items-center gap-2"
              >
                <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Instagram</span>
              </TabsTrigger>
              <TabsTrigger
                value="Email & Notification Settings"
                className="justify-start w-full min-w-[120px] lg:min-w-0 data-[state=active]:bg-gray-100 data-[state=active]:text-black transition-colors rounded-md px-3 lg:px-4 py-2 text-sm lg:text-base flex items-center gap-2"
              >
                <FaLinkedinIn className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>LinkedIn</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tabs Content on the Right */}
          <div className="space-y-4">
            <TabsContent value="General Settings">
              <FacebookInfo />
            </TabsContent>

            <TabsContent value="User & Role Management">
              {/* <InviteTeamMembers /> */}2
            </TabsContent>

            <TabsContent value="Payment & Transactions">
              {/* <PaymentAndTransactions /> */}3
            </TabsContent>

            <TabsContent value="Email & Notification Settings">
              {/* <EmailAndNotificationSettings /> */}4
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <div className="p-4 lg:pt-6 col-span-1 lg:col-span-4">
        <SupportChat height={"h-[754px]"} />
      </div>
    </div>
  );
}

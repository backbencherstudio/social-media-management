// app/settings/page.tsx or wherever you want
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import GeneralSettings from "./_components/general-settings";
import InviteTeamMembers from "./_components/invite-team-members";
import PaymentAndTransactions from "./_components/payment-and-transactions";
import EmailAndNotificationSettings from "./_components/email-and-notification-settings";
import SecuritySettings from "./_components/security-settings";

export default function Settings() {

  return (
    <div className="p-6">
      <Tabs
        defaultValue="General Settings"
        className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6"
      >
        {/* Tabs List on the Left */}
        <TabsList className="flex flex-col gap-2 w-full h-fit rounded-lg p-4 bg-white">
          <TabsTrigger
            value="General Settings"
            className="justify-start w-full data-[state=active]:bg-gray-100 data-[state=active]:text-black  transition-colors rounded-md px-4 py-2"
          >
            General Settings
          </TabsTrigger>
          <TabsTrigger
            value="User & Role Management"
            className="justify-start w-full data-[state=active]:bg-gray-100 data-[state=active]:text-black  transition-colors rounded-md px-4 py-2"
          >
            User & Role Management
          </TabsTrigger>
          <TabsTrigger
            value="Payment & Transactions"
            className="justify-start w-full data-[state=active]:bg-gray-100 data-[state=active]:text-black  transition-colors rounded-md px-4 py-2"
          >
            Payment & Transactions
          </TabsTrigger>
          <TabsTrigger
            value="Email & Notification Settings"
            className="justify-start w-full data-[state=active]:bg-gray-100 data-[state=active]:text-black  transition-colors rounded-md px-4 py-2"
          >
            Email & Notification Settings
          </TabsTrigger>
          <TabsTrigger
            value="Security Settings"
            className="justify-start w-full data-[state=active]:bg-gray-100 data-[state=active]:text-black  transition-colors rounded-md px-4 py-2"
          >
            Security Settings
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content on the Right */}
        <div className="space-y-4">
          <TabsContent value="General Settings">
            <GeneralSettings />
          </TabsContent>

          <TabsContent value="User & Role Management">
            <InviteTeamMembers />
          </TabsContent>

          <TabsContent value="Payment & Transactions">
            <PaymentAndTransactions />
          </TabsContent>

          <TabsContent value="Email & Notification Settings">
            <EmailAndNotificationSettings />
          </TabsContent>

          <TabsContent value="Security Settings">
            <SecuritySettings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

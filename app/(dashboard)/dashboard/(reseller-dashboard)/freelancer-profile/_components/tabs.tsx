import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AllTask from './all-task'

export default function ProfileTabs() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <Tabs defaultValue="MyTasks" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 relative">
          <TabsTrigger 
            value="MyTasks" 
            className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform data-[state=active]:after:scale-x-100"
          >
            My Tasks
          </TabsTrigger>
          <TabsTrigger 
            value="Account Settings"
            className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform data-[state=active]:after:scale-x-100"
          >
            Account Settings
          </TabsTrigger>
          <TabsTrigger 
            value="Earnings"
            className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform data-[state=active]:after:scale-x-100"
          >
            Earnings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="MyTasks" className="space-y-4">
          <AllTask />
        </TabsContent>

        <TabsContent value="Account Settings" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">My Work</h3>
            <p className="text-gray-600">Account Settings content goes here...</p>
          </div>
        </TabsContent>

        <TabsContent value="Earnings" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Client Earnings</h3>
            <p className="text-gray-600">Earnings content goes here...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

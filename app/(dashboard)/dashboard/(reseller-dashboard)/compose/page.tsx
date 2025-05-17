"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateSchedulePost from "./_components/create-schedule-post";
import SendDesignFile from "./_components/send-design-file";

const Compose = () => {
  return (
    <div>
      <Tabs defaultValue="CreateSchedulePost" className="w-full">
        <TabsList className="bg-white">
          <TabsTrigger
            value="CreateSchedulePost"
            className="data-[state=active]:bg-black data-[state=active]:text-white px-8 py-5"
          >
            Create Schedule Post
          </TabsTrigger>
          <TabsTrigger
            value="SendDesignFile"
            className="data-[state=active]:bg-black data-[state=active]:text-white px-8 py-5"
          >
            Send Design file
          </TabsTrigger>
        </TabsList>
        {/* CreateSchedulePost */}
        <TabsContent value="CreateSchedulePost">
          <CreateSchedulePost />
        </TabsContent>
        {/* SendDesignFile */}
        <TabsContent value="SendDesignFile">
          <SendDesignFile />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Compose;

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Preview from "./_components/preview";
import Platforms from "./_components/platforms";
import Content from "./_components/content";
import Media from "./_components/media";
import HashtagsAndMentions from "./_components/hashtags-and-mentions";
import Schedule from "./_components/schedule";
import { Button } from "@/components/ui/button";

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
        <TabsContent value="CreateSchedulePost">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mt-6">
            <div className="col-span-1 lg:col-span-8 space-y-5">
              <Platforms />
              <Content />
              <Media />
              <HashtagsAndMentions />
              <Schedule />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <Preview />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="SendDesignFile">
          <div className="space-y-6">
            <Content />
            <Media />
            <Button className="bg-black text-white px-8 py-6">Send File</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Compose;

"use client";

import { useUserNotificationQuery } from "@/src/redux/features/user/user-notification/userNotificationApi";
import React, { useEffect, useState } from "react";
import useSocket from "./useSoket";
import { NotificationItem } from "./_components/NotificationItem";

// Mock data
// const notifications = [
//   {
//     id: "1",
//     created_at: "2025-06-29T06:23:26.804Z",
//     receiver: { name: "Jacob Jones" },
//     notification_event: {
//       text: "Order Completed! Your social media management order is now complete. Check your dashboard for details.",
//     },
//     sender: {
//       avatar_url:
//         "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
//     },
//   },
//   {
//     id: "2",
//     created_at: "2025-06-30T09:57:13.563Z",
//     receiver: { name: "Leslie Alexander" },
//     notification_event: {
//       text: "Review Your Order! Your social media content is ready for review. Please check and provide feedback.",
//     },
//     sender: {
//       avatar_url:
//         "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
//     },
//   },
//   {
//     id: "3",
//     created_at: "2025-07-01T05:20:51.484Z",
//     receiver: { name: "Guy Hawkins" },
//     notification_event: {
//       text: "Post Published! Your scheduled post is now live on social media. Check it out!",
//     },
//     sender: {
//       avatar_url:
//         "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
//     },
//   },
//   {
//     id: "4",
//     created_at: "2025-07-01T05:20:51.484Z",
//     receiver: { name: "Kathryn Murphy" },
//     notification_event: {
//       text: "Post Scheduled! Your content has been scheduled for posting on 21 Jan. Stay tuned!",
//     },
//     sender: {
//       avatar_url:
//         "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
//     },
//   },
//   {
//     id: "5",
//     created_at: "2025-07-01T05:20:51.484Z",
//     receiver: { name: "Floyd Miles" },
//     notification_event: {
//       text: "Your Order is Done! We've successfully managed and executed your social media request.",
//     },
//     sender: {
//       avatar_url:
//         "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
//     },
//   },
//   {
//     id: "6",
//     created_at: "2025-07-01T05:20:51.484Z",
//     receiver: { name: "Savannah Nguyen" },
//     notification_event: {
//       text: "Time to review! Your scheduled posts are awaiting approval. Review now to proceed.",
//     },
//     sender: {
//       avatar_url:
//         "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
//     },
//   },
//   {
//     id: "7",
//     created_at: "2025-07-01T05:20:51.484Z",
//     receiver: { name: "Wade Warren" },
//     notification_event: {
//       text: "Your Content is Live! Your post has been successfully published. View it now!",
//     },
//     sender: {
//       avatar_url:
//         "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
//     },
//   },
// ];

// Define Notification type
export interface Notification {
  id: string;
  created_at: string;
  receiver: { name: string };
  notification_event: { text: string };
  sender: { avatar_url: string };
}

// Main Notifications List Component
const NotificationsList = () => {
  const { data } = useUserNotificationQuery(undefined);
  const prevNotifications: Notification[] = data?.data || [];

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const isFirstLoad = React.useRef(true);
  const socket = useSocket();

  useEffect(() => {
    if (isFirstLoad.current && prevNotifications.length) {
      setNotifications(prevNotifications);
      isFirstLoad.current = false;
    }
  }, [prevNotifications]);

  useEffect(() => {
    if (socket) {
      socket.on("newNotification", (newNotification: Notification) => {
        setNotifications((prevNotifications) => [
          newNotification,
          ...prevNotifications,
        ]);
      });
    }

    return () => {
      if (socket) {
        socket.off("newNotification");
      }
    };
  }, [socket]);

  return (
    <div className="max-w-4xl mx-auto ">
      <h1 className="text-xl">Notification</h1>
      {notifications?.length === 0 && (
        <p className="text-center text-gray-600">There is no notification !</p>
      )}
      <div>
        {notifications.map((notification: Notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
      {/* <div className="px-6 py-4 border-t border-gray-100">
        <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium py-2 text-center transition-colors duration-150">
          Show More →
        </button>
      </div> */}
    </div>
  );
};

export default NotificationsList;

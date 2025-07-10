"use client";
import React from "react";
import NotificationList from "../../_components/notification/notification";
import { useAllNotificationQuery } from "@/src/redux/features/common/get-notification/getNotificationApi";

export default function Notification() {
  const { data, isLoading, isError } = useAllNotificationQuery(undefined);

  const notifications = data?.data;

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <NotificationList notifications={notifications} />
    </>
  );
}

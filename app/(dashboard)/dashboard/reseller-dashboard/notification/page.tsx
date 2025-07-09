"use client";
import React from "react";
import NotificationList from "../../_components/notification/notification";
import { useAllNotificationQuery } from "@/src/redux/features/common/get-notification/getNotificationApi";

const fakeData = [
  {
    id: "cmca2udl10002re6c9whyevad",
    sender_id: "cmb4pc8f70003uoh4qkmtcc1x",
    receiver_id: "cmc0017yi0000ws5cqy5qybiy",
    entity_id: "TASK_sa3qxlbvcth70qvtmrqf9sgx",
    created_at: "2025-06-24T05:20:36.421Z",
    sender: {
      id: "cmb4pc8f70003uoh4qkmtcc1x",
      name: "Tohidul Alam",
      email: "tohidulalam9674@gmail.com",
      avatar: null,
    },
    receiver: {
      id: "cmc0017yi0000ws5cqy5qybiy",
      name: null,
      email: "nirob427417@gmail.com",
      avatar: null,
    },
    notification_event: {
      id: "cmca2udku0000re6cdctxyfg9",
      type: "post",
      text: "You have been assigned to this task",
    },
  },
  {
    id: "cmca4rux50003retsn756bt0j",
    sender_id: "cmb4pc8f70003uoh4qkmtcc1x",
    receiver_id: "cmc0017yi0000ws5cqy5qybiy",
    entity_id: "TASK_pt0dl4lfl0b25bcj3msemu3d",
    created_at: "2025-06-24T06:14:38.154Z",
    sender: {
      id: "cmb4pc8f70003uoh4qkmtcc1x",
      name: "Tohidul Alam",
      email: "tohidulalam9674@gmail.com",
      avatar: null,
    },
    receiver: {
      id: "cmc0017yi0000ws5cqy5qybiy",
      name: null,
      email: "nirob427417@gmail.com",
      avatar: null,
    },
    notification_event: {
      id: "cmca4ruwq0001retsvot8its4",
      type: "post",
      text: "You have been assigned to this task",
    },
  },
];

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

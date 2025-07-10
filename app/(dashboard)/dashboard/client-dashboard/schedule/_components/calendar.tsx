"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { DatePickerDemo } from "./calenderComponent";
import { useGetScheduleCalendarQuery } from "@/src/redux/features/reseller/schedule/schedule";
import { DateHelper } from "@/helper/date.helper";
import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";
import { useGetUserAllUpcomingPostQuery } from "@/src/redux/features/user/schedule/userSchedule";
import DateRangePicker from "./schedule-date-picker";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-96">
      Loading calendar....
    </div>
  ),
});

type EventType = {
  id: string;
  name: string;
  avatar: string | null;
  timeFrom: string;
  timeTo: string;
  subtitle: string | null;
  date: string;
  type: string;
  time: string;
};

const eventColors = {
  instagram: "bg-pink-100 text-pink-600",
  facebook: "bg-blue-100 text-blue-600",
  linkedin: "bg-sky-100 text-sky-600",
  twitter: "bg-gray-200 text-gray-800",
};

const eventIcons = {
  instagram: <FaInstagram className="inline mr-1" />,
  facebook: <FaFacebook className="inline mr-1" />,
  linkedin: <FaLinkedin className="inline mr-1" />,
  twitter: <FaTwitter className="inline mr-1" />,
};

export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<EventType[]>([]);
  const [currentView, setCurrentView] = useState("dayGridMonth");
  const [currentDate, setCurrentDate] = useState(new Date());
  const clientId = useSelector((state: RootState) => state.clientId.id);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(2024, 9, 15),
    new Date(2024, 9, 22),
  ]);
  const [startDate, endDate] = dateRange;

  const { data: scheduleCalendar } = useGetUserAllUpcomingPostQuery(undefined);

  console.log(scheduleCalendar?.data);

  const calendarRef = useRef<any>(null);

  const openModal = (event: EventClickArg) => {
    const clickedDate = event.event.start?.toISOString().split("T")[0];
    if (clickedDate) {
      const matching = scheduleCalendar?.data?.filter(
        (e) => e.date === clickedDate
      );
      setSelectedEvents(matching);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const modal = document.getElementById("modal");
    if (modal && !modal.contains(event.target as Node)) closeModal();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const formatEventsForCalendar = () =>
    scheduleCalendar?.data?.map((e: any) => {
      const channels = e.post_channels.map(
        (channel: any) => channel.channel.name
      );
      return {
        id: e.id,
        title: channels.join(", "),
        start: e.created_at,
        extendedProps: {
          ...e,
          time: DateHelper.format(e.created_at, "h:mm A"),
          type: channels[0]?.toLowerCase(),
        },
      };
    });

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    calendarRef.current?.getApi()?.changeView(view);
  };

  const handlePrev = () => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.prev();
      setCurrentDate(new Date(calendarApi.getDate()));
    }
  };

  const handleToday = () => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.next();
      setCurrentDate(calendarApi.getDate());
    }
  };

  function renderEventContent(eventInfo: any) {
    const type = eventInfo.event.extendedProps.type;
    const colorClass = eventColors[type] || "bg-gray-100 text-gray-700";
    const icon = eventIcons[type] || null;
    return (
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded ${colorClass} text-xs overflow-hidden`}
      >
        {icon}
        <span>{eventInfo.event.title}</span>
        <span className="ml-auto">{eventInfo.event.extendedProps.time}</span>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 w-full">
        <div className="text-lg font-medium">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handlePrev}
            className="border rounded-lg px-3 py-1 text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none"
          >
            {"<"}
          </button>
          <button
            onClick={handleToday}
            className="border rounded-lg px-3 py-1 text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none"
          >
            {">"}
          </button>
          <select
            value={currentView}
            onChange={(e) => handleViewChange(e.target.value)}
            className="border rounded-lg px-3 py-1 text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none"
          >
            <option value="dayGridMonth">Month</option>
            <option value="timeGridWeek">Week</option>
            <option value="timeGridDay">Day</option>
          </select>

          {/* <DatePickerDemo />
           */}
          {/* Date picker */}
          <div className=" relative z-5">
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              setDateRange={setDateRange}
            />
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="overflow-x-auto">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={currentView}
          editable={false}
          selectable={true}
          events={formatEventsForCalendar()}
          headerToolbar={false}
          height="auto"
          aspectRatio={2.5}
          eventClick={openModal}
          eventContent={renderEventContent}
          dayMaxEventRows={3}
          fixedWeekCount={false}
        />
      </div>

      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div
            id="modal"
            className="bg-white w-full max-w-xl rounded-xl shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Appointments
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
              {selectedEvents.map((e) => (
                <div
                  key={e.id}
                  className="rounded-lg border p-4 bg-gray-50 shadow-sm space-y-1"
                >
                  <p className="font-medium text-gray-800">{e.name}</p>
                  <p className="text-sm text-gray-600">
                    {e.timeFrom} - {e.timeTo}
                  </p>
                  <p className="text-sm text-muted-foreground">{e.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

// Custom event rendering
// function renderEventContent(eventInfo: any) {
//   const type = eventInfo.event.extendedProps.type;
//   const colorClass = eventColors[type] || "bg-gray-100 text-gray-700";
//   const icon = eventIcons[type] || null;
//   return (
//     <div
//       className={`flex items-center gap-1 px-2 py-1 rounded ${colorClass} text-xs overflow-hidden`}
//     >
//       {icon}
//       <span>{eventInfo.event.title}</span>
//       <span className="ml-auto">{eventInfo.event.extendedProps.time}</span>
//     </div>
//   );
// }

"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { EventClickArg } from "@fullcalendar/core";
import { User, X } from "lucide-react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-96">
      Loading calendar...
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
};

export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<EventType[]>([]);
  const [currentView, setCurrentView] = useState("dayGridMonth");

  // ✅ Fix useRef typing for getApi
  const calendarRef = useRef<null | { getApi: () => any }>(null);

  const events: EventType[] = [
    {
      id: "1",
      name: "John Doe",
      avatar: null,
      timeFrom: "09:00",
      timeTo: "10:00",
      subtitle: "Breathing & Mindfulness",
      date: "2025-05-20",
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: null,
      timeFrom: "11:00",
      timeTo: "12:00",
      subtitle: "Meditation Session",
      date: "2025-05-20",
    },
    {
      id: "3",
      name: "Bob Lee",
      avatar: "User",
      timeFrom: "14:00",
      timeTo: "15:00",
      subtitle: "Wellbeing Discussion",
      date: "2025-05-20",
    },
    {
      id: "4",
      name: "John",
      avatar: "User",
      timeFrom: "15:00",
      timeTo: "16:00",
      subtitle: "Stretch & Walk",
      date: "2025-05-20",
    },
    {
      id: "5",
      name: "Daisy",
      avatar: "User",
      timeFrom: "16:00",
      timeTo: "17:00",
      subtitle: "Nutrition Tips",
      date: "2025-05-22",
    },
  ];

  const openModal = (event: EventClickArg) => {
    const clickedDate = event.event.start?.toISOString().split("T")[0];
    if (clickedDate) {
      const matching = events.filter((e) => e.date === clickedDate);
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
    events.map((e) => ({
      id: e.id,
      title: e.name,
      start: e.date,
      extendedProps: e,
    }));

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    calendarRef.current?.getApi()?.changeView(view);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <FullCalendar
        // ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        editable={false}
        selectable={true}
        events={formatEventsForCalendar()}
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,timeGridWeek,dayGridDay",
        }}
        dayMaxEvents={2} // ✅ show max 2 events per day with "+n more"
        height="auto"
        aspectRatio={2.5}
        eventClick={openModal}
        eventContent={(info) => {
          const { name, timeFrom, timeTo } = info.event.extendedProps;
          return (
            <div className="p-1 space-y-2 text-xs text-center bg-muted rounded">
              <div className="flex justify-between text-[10px]">
                <User className="w-3 h-3" />
                <span>
                  {timeFrom} - {timeTo}
                </span>
              </div>
              <strong className="block text-start">{name}</strong>
            </div>
          );
        }}
      />

      {/* ✅ Modal to show tasks of selected day */}
      {isModalOpen && (
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
      )}
    </div>
  );
}

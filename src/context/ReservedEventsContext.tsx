"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { CalendarEvent } from "@/components/SidebarCalendarEvents";

// Contextの型
interface ReservedEventsContextType {
  reservedEvents: CalendarEvent[];
  addReservedEvent: (event: CalendarEvent) => void;
  removeReservedEvent: (id: number) => void;
}

const ReservedEventsContext = createContext<ReservedEventsContextType | undefined>(undefined);

const STORAGE_KEY = "reservedEvents";

export function ReservedEventsProvider({ children }: { children: ReactNode }) {
  const [reservedEvents, setReservedEvents] = useState<CalendarEvent[]>([]);

  // 初回マウント時にlocalStorageから読み込み
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setReservedEvents(JSON.parse(stored));
      } catch {}
    }
  }, []);

  // 予約イベントが変わるたびにlocalStorageに保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservedEvents));
  }, [reservedEvents]);

  const addReservedEvent = (event: CalendarEvent) => {
    setReservedEvents((prev) => {
      // 同じIDのイベントは重複追加しない
      if (prev.some((e) => e.id === event.id)) return prev;
      return [...prev, event];
    });
  };

  const removeReservedEvent = (id: number) => {
    setReservedEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <ReservedEventsContext.Provider value={{ reservedEvents, addReservedEvent, removeReservedEvent }}>
      {children}
    </ReservedEventsContext.Provider>
  );
}

export function useReservedEvents() {
  const ctx = useContext(ReservedEventsContext);
  if (!ctx) throw new Error("useReservedEvents must be used within ReservedEventsProvider");
  return ctx;
} 
"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useReservedEvents } from "@/context/ReservedEventsContext";
import { XCircle } from "lucide-react";
import Image from "next/image";

// 予約イベントの型定義
export type CalendarEvent = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export function SidebarCalendarEvents() {
  const { reservedEvents, removeReservedEvent } = useReservedEvents();
  return (
    <div className="relative h-full">
      {/* サイドバー背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/student_sample1.jpg"
          alt="学生集合写真"
          fill
          className="object-cover opacity-60 blur-sm rounded-2xl"
          style={{ zIndex: 0 }}
        />
      </div>
      {/* サイドバーの内容 */}
      <div className="relative z-10">
        <h2 className="text-lg font-bold mb-4 text-gray-700">参加予定イベント</h2>
        <div className="space-y-4">
          {reservedEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden relative">
              <CardHeader className="p-0">
                <Image src={event.image} alt={event.title} width={400} height={160} className="w-full h-28 object-cover" />
                <button
                  className="absolute top-2 right-2 bg-white/80 rounded-full p-1 hover:bg-red-100 transition-colors"
                  title="予約キャンセル"
                  onClick={() => removeReservedEvent(event.id)}
                >
                  <XCircle className="h-5 w-5 text-red-500" />
                </button>
              </CardHeader>
              <CardContent className="py-2 px-3">
                <div className="font-semibold text-base text-gray-800">{event.title}</div>
                <div className="text-xs text-gray-500 mt-1">{event.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const calendarEvents = [
  {
    id: 1,
    title: "研究発表会2024",
    date: "2024/07/10 13:00",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "就活セミナー（IT業界）",
    date: "2024/07/15 15:00",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
];

export function SidebarCalendarEvents() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-700">参加予定イベント</h2>
      <div className="space-y-4">
        {calendarEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image src={event.image} alt={event.title} width={400} height={160} className="w-full h-28 object-cover" />
            </CardHeader>
            <CardContent className="py-2 px-3">
              <div className="font-semibold text-base text-gray-800">{event.title}</div>
              <div className="text-xs text-gray-500 mt-1">{event.date}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const pickupEvents = [
  {
    id: 1,
    title: "AI研究最前線セミナー",
    date: "2024/08/01 17:00",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "AI分野の最新動向を学べる特別セミナー。学生・研究者必見！",
  },
  {
    id: 2,
    title: "就活グループディスカッション体験会",
    date: "2024/08/10 14:00",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    description: "実践形式でGDを体験。就活仲間と交流しよう！",
  },
];

export function SidebarPickupEvents() {
  return (
    <div className="relative h-full">
      {/* サイドバー背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/student_sample2.jpg"
          alt="学生集合写真"
          fill
          className="object-cover opacity-60 blur-sm rounded-2xl"
          style={{ zIndex: 0 }}
        />
      </div>
      {/* サイドバーの内容 */}
      <div className="relative z-10">
        <h2 className="text-lg font-bold mb-4 text-gray-700">ピックアップイベント</h2>
        <div className="space-y-4">
          {pickupEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image src={event.image} alt={event.title} width={400} height={160} className="w-full h-28 object-cover" />
              </CardHeader>
              <CardContent className="py-2 px-3">
                <div className="font-semibold text-base text-gray-800">{event.title}</div>
                <div className="text-xs text-gray-500 mt-1">{event.date}</div>
                <div className="text-xs text-gray-600 mt-2">{event.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 
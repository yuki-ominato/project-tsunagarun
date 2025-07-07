import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Briefcase, Users, Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    title: "企業説明会",
    date: "2024年7月20日 14:00〜 @C棟ホール",
    description: "様々な企業の説明を聞けるイベントです。",
    badge: "企業",
    icon: <Briefcase className="text-teal-500" />,
  },
  {
    title: "OB・OG座談会",
    date: "2024年8月12日 16:00〜 @D棟会議室",
    description: "先輩たちの就活体験談を聞ける座談会です。",
    badge: "交流",
    icon: <Users className="text-pink-400" />,
  },
];

export default function Theme2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-0">
      <Card className="w-full max-w-lg shadow-xl mb-8 border-2 border-teal-100">
        <CardHeader className="flex flex-row items-center gap-3 pt-8 pb-4">
          <Briefcase className="h-8 w-8 text-teal-500" />
          <CardTitle className="text-xl font-bold text-teal-700">就活イベント</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {events.map((event, idx) => (
              <Card key={idx} className="p-0 shadow hover:scale-[1.02] transition-transform border border-gray-100 relative">
                <div className="flex items-center gap-4 p-4">
                  <Avatar className="w-12 h-12 bg-teal-50">
                    <AvatarFallback className="text-2xl">{event.icon}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-lg text-gray-800">{event.title}</span>
                      <Badge className="bg-teal-500 text-white animate-pulse">{event.badge}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <Calendar className="h-4 w-4" /> {event.date}
                    </div>
                    <div className="text-sm text-gray-700 mt-2">{event.description}</div>
                  </div>
                  <Button size="sm" className="ml-2 bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-1">
                    詳細 <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      <Link href="/home" className="w-full flex justify-center mb-8">
        <Button variant="ghost" className="text-teal-700 hover:bg-teal-50 flex items-center gap-2">
          ホームに戻る
        </Button>
      </Link>
    </div>
  );
}

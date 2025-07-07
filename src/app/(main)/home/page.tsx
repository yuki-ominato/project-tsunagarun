"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const themes = [
  { key: "research", label: "研究", emoji: "🧪", badge: "人気" },
  { key: "job", label: "就活", emoji: "💼", badge: "注目" },
  { key: "game", label: "ゲーム", emoji: "🎮" },
  { key: "travel", label: "旅行", emoji: "🧳" },
  { key: "gourmet", label: "グルメ", emoji: "🍣" },
  { key: "fashion", label: "ファッション", emoji: "👠" },
  { key: "sports", label: "スポーツ", emoji: "⚽" },
  { key: "anime", label: "アニメ", emoji: "🎬" },
  { key: "camera", label: "カメラ", emoji: "📷" },
  { key: "music", label: "音楽", emoji: "🎵" },
  { key: "outdoor", label: "アウトドア", emoji: "⛺" },
  { key: "action", label: "アクション映画", emoji: "🎬" },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-0">
      <div className="w-full max-w-2xl mx-auto pt-16">
        <h1 className="text-3xl font-extrabold text-teal-700 text-center mb-2 tracking-tight drop-shadow">興味テーマを選択</h1>
        <p className="text-center text-gray-600 mb-8">気になるテーマを選んで、同じ興味を持つ仲間とつながろう！</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
          {themes.map((theme) => (
            <Card
              key={theme.key}
              className="group cursor-pointer transition-transform hover:scale-105 shadow-md hover:shadow-xl border-2 border-transparent hover:border-teal-300 bg-white relative"
              onClick={() => router.push(`/theme/${theme.key}`)}
            >
              <CardContent className="flex flex-col items-center py-6">
                <Avatar className="w-14 h-14 mb-2 bg-teal-50 group-hover:bg-teal-100 transition-colors">
                  <AvatarFallback className="text-2xl">{theme.emoji}</AvatarFallback>
                </Avatar>
                <span className="font-bold text-base text-gray-800 mb-1">{theme.label}</span>
                {theme.badge && (
                  <Badge className="absolute top-2 right-2 bg-pink-400 text-white animate-pulse">{theme.badge}</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          className="w-full h-12 text-lg mt-2 border border-teal-200 text-teal-700 bg-white hover:bg-teal-50 shadow transition-colors flex items-center justify-center gap-2"
          variant="ghost"
          onClick={() => router.push("/mypage")}
        >
          <User className="mr-1 h-5 w-5" />マイページへ
        </Button>
      </div>
    </div>
  );
}

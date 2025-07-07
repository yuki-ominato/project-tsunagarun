"use client";
import { useParams } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Users, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const eventData: Record<string, { title: string; desc: string; img: string; date: string; people: number; }[]> = {
  research: [
    { title: "新しい研究発表会に行きませんか", desc: "最先端の研究成果を発表！", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", date: "2024/07/10 13:00", people: 32 },
    { title: "ラボツアーで研究体験", desc: "研究室を見学できます。", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", date: "2024/08/05 15:00", people: 18 },
  ],
  job: [
    { title: "インターンフェアで企業研究", desc: "人気企業が多数参加！", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", date: "2024/07/20 14:00", people: 45 },
    { title: "OB・OG座談会", desc: "先輩の就活体験談を聞こう。", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", date: "2024/08/12 16:00", people: 27 },
  ],
  game: [
    { title: "eスポーツ大会", desc: "みんなで対戦しよう！", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80", date: "2024/09/01 18:00", people: 60 },
    { title: "ボードゲーム交流会", desc: "初心者歓迎！", img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", date: "2024/09/10 13:00", people: 22 },
  ],
  travel: [
    { title: "日帰りバスツアー", desc: "みんなで小旅行！", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", date: "2024/08/15 08:00", people: 40 },
    { title: "海外旅行説明会", desc: "海外の魅力を知ろう。", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", date: "2024/09/05 19:00", people: 15 },
  ],
  gourmet: [
    { title: "グルメフェス", desc: "美味しい料理が大集合！", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", date: "2024/08/20 11:00", people: 55 },
    { title: "スイーツパーティー", desc: "甘いもの好き集まれ！", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", date: "2024/09/02 15:00", people: 30 },
  ],
};

const badges = [
  { label: "おすすめ", color: "bg-pink-500" },
  { label: "人気", color: "bg-teal-500" },
  { label: "残席わずか", color: "bg-yellow-400 text-gray-900" },
  { label: "初参加歓迎", color: "bg-blue-400" },
];

export default function ThemePage() {
  const params = useParams();
  const themeParam = (params as { theme?: string | string[] }).theme;
  const theme = Array.isArray(themeParam) ? themeParam[0] : themeParam ?? "";
  const events = eventData[theme] || [];
  const [toast, setToast] = useState<string | null>(null);

  function handleReserve(title: string) {
    setToast(`${title} の予約が完了しました！`);
    setTimeout(() => setToast(null), 2000);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-0">
      <div className="w-full max-w-2xl mx-auto pt-12">
        <h1 className="text-2xl font-extrabold text-teal-700 text-center mb-6 tracking-tight drop-shadow">開催予定イベント</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {events.map((ev, idx) => {
            const badge = badges[idx % badges.length];
            return (
              <Card
                key={idx}
                className="group relative overflow-hidden shadow-xl border-2 border-teal-100 hover:scale-105 transition-transform duration-300 bg-white"
              >
                <div className="relative h-40 w-full">
                  <Image src={ev.img} alt={ev.title} width={400} height={160} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute left-3 bottom-3">
                    <h2 className="text-lg font-bold text-white drop-shadow-lg flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
                      {ev.title}
                    </h2>
                  </div>
                  <Badge className={`absolute top-3 right-3 ${badge.color} text-white shadow-lg animate-bounce`}>{badge.label}</Badge>
                </div>
                <CardContent className="pt-4 pb-2 px-4">
                  <div className="text-gray-700 text-sm mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-teal-500" /> {ev.date}
                  </div>
                  <div className="text-gray-600 text-xs mb-3">{ev.desc}</div>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="w-8 h-8 bg-teal-50">
                      <AvatarFallback className="text-base"><Star className="text-yellow-400" /></AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Users className="h-4 w-4" /> {ev.people}人参加予定</span>
                  </div>
                </CardContent>
                <CardFooter className="px-4 pb-4">
                  <Button
                    className="w-full h-10 text-base bg-pink-500 hover:bg-pink-600 shadow-lg flex items-center gap-2"
                    onClick={() => handleReserve(ev.title)}
                  >
                    <CheckCircle2 className="h-5 w-5" /> このイベントを予約する
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <Button className="w-full h-12 text-lg bg-teal-500 hover:bg-teal-600 shadow mb-2">次へ</Button>
        <a href="/home" className="block w-full">
          <Button variant="outline" className="w-full">ホームに戻る</Button>
        </a>
      </div>
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white border border-teal-300 shadow-lg rounded-xl px-6 py-3 flex items-center gap-2 z-50 animate-fade-in">
          <CheckCircle2 className="text-teal-500 h-6 w-6" />
          <span className="font-bold text-teal-700">{toast}</span>
        </div>
      )}
    </div>
  );
}

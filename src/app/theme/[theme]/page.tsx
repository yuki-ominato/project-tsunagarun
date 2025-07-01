"use client";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const eventData: Record<string, { title: string; desc: string; img: string }[]> = {
  research: [
    { title: "新しい研究発表会に行きませんか", desc: "最先端の研究成果を発表！", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
    { title: "ラボツアーで研究体験", desc: "研究室を見学できます。", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  ],
  job: [
    { title: "インターンフェアで企業研究", desc: "人気企業が多数参加！", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { title: "OB・OG座談会", desc: "先輩の就活体験談を聞こう。", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  ],
  game: [
    { title: "eスポーツ大会", desc: "みんなで対戦しよう！", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80" },
    { title: "ボードゲーム交流会", desc: "初心者歓迎！", img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" },
  ],
  travel: [
    { title: "日帰りバスツアー", desc: "みんなで小旅行！", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
    { title: "海外旅行説明会", desc: "海外の魅力を知ろう。", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" },
  ],
  gourmet: [
    { title: "グルメフェス", desc: "美味しい料理が大集合！", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    { title: "スイーツパーティー", desc: "甘いもの好き集まれ！", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
  ],
  // 他テーマも同様に追加可能
};

export default function ThemePage() {
  const params = useParams();
  const themeParam = (params as { theme?: string | string[] }).theme;
  const theme = Array.isArray(themeParam) ? themeParam[0] : themeParam ?? "";
  const events = eventData[theme] || [];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-lg font-bold mb-2 mt-4 text-center">開催予定イベント</div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl border overflow-hidden shadow-sm transition-colors cursor-pointer`}
            >
              <img src={ev.img} alt={ev.title} className="w-full h-24 object-cover" />
              <div className="p-2">
                <div className="font-semibold text-xs mb-1">{ev.title}</div>
                <div className="text-xs text-gray-500 mb-2">{ev.desc}</div>
                <Button
                  className="w-full h-8 text-xs bg-blue-500 hover:bg-blue-600 transition-colors mb-1"
                  onClick={() => alert(`${ev.title} の予約が完了しました！`)}
                >
                  このイベントを予約する
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full h-12 text-lg bg-pink-500 hover:bg-pink-600 transition-colors mb-2">次へ</Button>
        <a href="/home" className="block w-full">
          <Button variant="outline" className="w-full">ホームに戻る</Button>
        </a>
      </div>
    </div>
  );
}

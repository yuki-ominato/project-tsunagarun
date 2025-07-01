"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const themes = [
  { key: "research", label: "研究", emoji: "🧪" },
  { key: "job", label: "就活", emoji: "💼" },
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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-lg font-bold mb-2 mt-4 text-center">興味</div>
        <div className="text-sm text-center mb-4 text-gray-600">興味があるテーマを選択してください</div>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {themes.map((theme) => (
            <button
              key={theme.key}
              type="button"
              onClick={() => router.push(`/theme/${theme.key}`)}
              className="flex flex-col items-center justify-center rounded-xl border p-3 h-24 transition-colors relative bg-white hover:bg-pink-100 border-gray-200"
            >
              <span className="text-2xl mb-1">{theme.emoji}</span>
              <span className="text-xs font-medium">{theme.label}</span>
            </button>
          ))}
        </div>
        <Button className="w-full h-12 text-lg bg-pink-500 hover:bg-pink-600 transition-colors">次へ</Button>
      </div>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Theme1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-4">
      <Card className="w-full max-w-lg shadow-lg mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-teal-600">研究イベント</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded bg-white">
              <h2 className="font-semibold text-lg">研究発表会</h2>
              <p className="text-sm text-gray-600">2024年7月10日 13:00〜 @A棟ホール</p>
              <p className="mt-2">学内外の研究発表を聞けるイベントです。</p>
              <Button className="mt-2 bg-teal-500 hover:bg-teal-600 transition-colors">詳細を見る</Button>
            </div>
            <div className="p-4 border rounded bg-white">
              <h2 className="font-semibold text-lg">ラボ見学ツアー</h2>
              <p className="text-sm text-gray-600">2024年8月5日 15:00〜 @B棟集合</p>
              <p className="mt-2">研究室を見学できるツアーです。</p>
              <Button className="mt-2 bg-teal-500 hover:bg-teal-600 transition-colors">詳細を見る</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Link href="/home" className="underline hover:text-teal-600">ホームに戻る</Link>
    </div>
  );
}

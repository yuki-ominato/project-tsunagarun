"use client";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-teal-600">新規登録</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="名前" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
            <input type="date" placeholder="生年月日" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
            <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400">
              <option value="">性別を選択</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
            </select>
            <input type="text" placeholder="学籍番号" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
            <input type="email" placeholder="学校メールアドレス" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
            <Button type="submit" className="w-full h-12 text-lg bg-teal-500 hover:bg-teal-600 transition-colors">
              登録
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 text-xs">
          <Link href="/" className="underline hover:text-teal-600">ホームへ戻る</Link>
          <Link href="/login" className="underline hover:text-teal-600">ログイン画面へ</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

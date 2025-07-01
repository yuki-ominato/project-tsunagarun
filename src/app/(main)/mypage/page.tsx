import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MyPage() {
  // ダミーユーザーデータ
  const user = {
    name: "山田 太郎",
    email: "taro.yamada@school.ac.jp",
    birthday: "2000-01-01",
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-teal-600">マイページ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-left space-y-2">
            <div><span className="font-semibold">ユーザー名：</span>{user.name}</div>
            <div><span className="font-semibold">メールアドレス：</span>{user.email}</div>
            <div><span className="font-semibold">生年月日：</span>{user.birthday}</div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full bg-teal-500 hover:bg-teal-600 transition-colors">登録情報変更</Button>
          <Button variant="outline" className="w-full hover:bg-red-100 hover:text-red-600 transition-colors">ログアウト</Button>
          <Link href="/home" className="underline hover:text-teal-600 mt-2">ホームに戻る</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

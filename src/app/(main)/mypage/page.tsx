import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { LogOut, Pencil, User } from "lucide-react";

export default function MyPage() {
  // ダミーユーザーデータ
  const user = {
    name: "山田 太郎",
    email: "taro.yamada@school.ac.jp",
    birthday: "2000-01-01",
    status: "学生",
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-0">
      <Card className="w-full max-w-md shadow-xl border-2 border-teal-100">
        <CardHeader className="flex flex-col items-center gap-2 pt-8 pb-4">
          <Avatar className="w-20 h-20 mb-2 bg-teal-50">
            <AvatarFallback className="text-3xl">{user.name[0]}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-teal-700">{user.name}</CardTitle>
          <Badge className="bg-teal-500 text-white px-3 py-1 rounded-full">{user.status}</Badge>
        </CardHeader>
        <CardContent className="space-y-4 px-8">
          <div className="flex flex-col gap-2 text-gray-700">
            <div><span className="font-semibold text-gray-900">メールアドレス：</span>{user.email}</div>
            <div><span className="font-semibold text-gray-900">生年月日：</span>{user.birthday}</div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 px-8 pb-8 pt-4">
          <Button className="w-full bg-teal-500 hover:bg-teal-600 transition-colors flex items-center gap-2 text-lg">
            <Pencil className="h-5 w-5" /> 登録情報変更
          </Button>
          <Button variant="outline" className="w-full hover:bg-red-100 hover:text-red-600 transition-colors flex items-center gap-2 text-lg">
            <LogOut className="h-5 w-5" /> ログアウト
          </Button>
          <Link href="/home" className="w-full flex justify-center mt-2">
            <Button variant="ghost" className="text-teal-700 hover:bg-teal-50 flex items-center gap-2">
              <User className="h-5 w-5" /> ホームに戻る
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

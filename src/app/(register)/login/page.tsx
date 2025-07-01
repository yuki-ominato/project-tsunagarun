import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-teal-600">ログイン</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <input type="email" placeholder="メールアドレス" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
            <input type="password" placeholder="パスワード" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />  
            <Link href="/home" className="underline hover:text-teal-600">
                <Button className="w-full h-12 text-lg bg-teal-500 hover:bg-teal-600 transition-colors">ログイン</Button>
            </Link>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-xs">
          <Link href="/" className="underline hover:text-teal-600">戻る</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200 p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-4xl font-bold text-teal-600">つながるん</h1>
          <CardDescription className="pt-2">
            新しいつながり、ここから始まる
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <Link href="/signup" className="block">
            <Button className="w-full h-12 text-lg" size="lg">
              <HeartHandshake className="mr-2 h-5 w-5" />
              新規登録
            </Button>
          </Link>
          <Link href="/login" className="block">
            <Button variant="outline" className="w-full h-12 text-lg" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              ログイン
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="flex justify-center text-xs">
          <p className="text-muted-foreground">
            <Link href="#" className="underline hover:text-teal-600">
              利用規約
            </Link>
            と
            <Link href="#" className="underline hover:text-teal-600">
              プライバシーポリシー
            </Link>
            に同意して続行
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

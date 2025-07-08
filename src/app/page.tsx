import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, HeartHandshake, Users, Sparkles, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden">
      {/* 背景画像（全画面） */}
      <Image
        src="/student_sample1.jpg"
        alt="学生集合写真"
        fill
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        priority
      />
      <div className="w-full pt-16 relative z-10 rounded-2xl shadow-xl backdrop-blur-md">
        {/* ヒーローセクション */}
        <section className="w-full flex flex-col items-center justify-center pt-20 pb-10">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="w-96 h-96 shadow-xl ring-teal-300 animate-bounce-slow">
                <AvatarImage src="/logo.png" alt="つながるん" />
                <AvatarFallback>つな</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-lg text-white font-medium text-center max-w-xl drop-shadow">
              <Sparkles className="inline-block mr-2 text-white animate-pulse" />
              新しいつながり、ここから始まる。<br />
              学生同士が気軽につながり、交流できるマッチングプラットフォーム。<br />
              サークル・イベント・趣味など、同じ興味を持つ仲間と出会おう！
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/signup">
                <Button className="h-12 px-8 text-lg shadow-lg" size="lg">
                  <HeartHandshake className="mr-2 h-5 w-5" />
                  新規登録
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="h-12 px-8 text-lg border-teal-400 shadow" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  ログイン
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 px-4">
          <Card className="shadow-md hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center gap-2">
              <Users className="text-teal-500" />
              <span className="font-bold text-lg">多様な出会い</span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                垣根なくつながる。<br />
                新しい価値観やチャンスが広がります。
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center gap-2">
              <Sparkles className="text-teal-500" />
              <span className="font-bold text-lg">イベントで交流</span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                オフラインの多彩なイベントで<br />
                気軽に交流・マッチングが可能です。
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center gap-2">
              <Star className="text-teal-500" />
              <span className="font-bold text-lg">安心・安全</span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                本人確認搭載！<br />
                安心して使える仕組みを用意しています。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 使い方セクション */}
        <section className="w-full max-w-3xl mx-auto pb-16 px-4">
          <Card className="shadow-lg">
            <CardHeader>
              <h2 className="text-2xl font-bold text-teal-700">使い方はとても簡単！</h2>
              <CardDescription>3ステップで新しい出会いを体験しよう</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>無料登録してプロフィールを作成</li>
                <li>イベントやグループに参加して交流</li>
                <li>気の合う友人を見つけよう</li>
              </ol>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="/signup">
                <Button variant="default" className="flex items-center gap-2">
                  まずは無料で始める <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        {/* 利用規約・プライバシー */}
        <footer className="w-full flex justify-center pb-6 text-xs text-muted-foreground">
          <p>
            <Link href="#" className="underline hover:text-teal-600">利用規約</Link>
            と
            <Link href="#" className="underline hover:text-teal-600">プライバシーポリシー</Link>
            に同意して続行
          </p>
        </footer>
      </div>
    </div>
  );
}

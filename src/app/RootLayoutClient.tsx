"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReservedEventsProvider } from "@/context/ReservedEventsContext";
import { SidebarCalendarEvents } from "@/components/SidebarCalendarEvents";
import { SidebarPickupEvents } from "@/components/SidebarPickupEvents";
import { SidebarReviews } from "@/components/SidebarReviews";
import Image from "next/image";
import { useState } from "react";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = pathname === "/" || pathname === "/login" || pathname === "/signup";
  const [drawerOpen, setDrawerOpen] = useState(false);

  // 例: トップ画面だけmaxWidthを1200px、それ以外は800px
  const mainMaxWidth = pathname === "/" ? 1200 : 600;

  return (
    <ReservedEventsProvider>
      {/* サイドバー表示時のみ左右画像を配置 */}
      {!hideSidebar && (
        <>
          <div className="hidden md:block fixed left-0 top-0 bottom-0 w-64 z-0 pointer-events-none">
            <Image src="/student_sample1.jpg" alt="学生集合写真" width={320} height={800} className="h-full w-full object-cover opacity-60 blur-sm rounded-r-3xl" />
          </div>
          <div className="hidden md:block fixed right-0 top-0 bottom-0 w-64 z-0 pointer-events-none">
            <Image src="/student_sample2.jpg" alt="学生集合写真" width={320} height={800} className="h-full w-full object-cover opacity-60 blur-sm rounded-l-3xl" />
          </div>
        </>
      )}
      {/* モバイル用ドロワーメニュー（サイドバー表示時のみ） */}
      {!hideSidebar && (
        <>
          {/* メニューボタン（モバイルのみ表示） */}
          <button
            className="md:hidden fixed top-4 left-4 z-50 bg-teal-500 text-white p-3 rounded-full shadow-lg"
            onClick={() => setDrawerOpen(true)}
            aria-label="メニューを開く"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          {/* ドロワー本体 */}
          {drawerOpen && (
            <div className="md:hidden fixed inset-0 z-50 flex">
              {/* オーバーレイ */}
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setDrawerOpen(false)} />
              {/* ドロワー */}
              <div className="relative bg-white w-4/5 max-w-xs h-full shadow-xl p-4 z-50 animate-slide-in-left">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="閉じる"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
                <SidebarCalendarEvents />
                <div className="mt-8">
                  <SidebarPickupEvents />
                </div>
                <div className="mt-8">
                  <SidebarReviews />
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {hideSidebar ? (
        <main
          className="main-content"
          style={{ margin: "0 auto", maxWidth: mainMaxWidth }}
        >
          {children}
        </main>
      ) : (
        <div className="layout relative z-10">
          {/* PC用サイドバー */}
          <aside className="sidebar-left scrollable-sidebar hidden md:block">
            <SidebarCalendarEvents />
          </aside>
          <main className="main-content scrollable-main">
            {children}
          </main>
          <aside className="sidebar-right space-y-8 scrollable-sidebar hidden md:block">
            <SidebarPickupEvents />
            <SidebarReviews />
          </aside>
        </div>
      )}
    </ReservedEventsProvider>
  );
} 
"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReservedEventsProvider } from "@/context/ReservedEventsContext";
import { SidebarCalendarEvents } from "@/components/SidebarCalendarEvents";
import { SidebarPickupEvents } from "@/components/SidebarPickupEvents";
import { SidebarReviews } from "@/components/SidebarReviews";
import Image from "next/image";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = pathname === "/" || pathname === "/login" || pathname === "/signup";

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
      {hideSidebar ? (
        <main
          className="main-content"
          style={{ margin: "0 auto", maxWidth: mainMaxWidth }}
        >
          {children}
        </main>
      ) : (
        <div className="layout relative z-10">
          <aside className="sidebar-left scrollable-sidebar">
            <SidebarCalendarEvents />
          </aside>
          <main className="main-content scrollable-main">
            {children}
          </main>
          <aside className="sidebar-right space-y-8 scrollable-sidebar">
            <SidebarPickupEvents />
            <SidebarReviews />
          </aside>
        </div>
      )}
    </ReservedEventsProvider>
  );
} 
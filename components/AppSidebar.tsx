"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const pathname = usePathname() || "/";

  const links = [
    { href: "/features/trainingprograms", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", text: "Training Programs" },
    { href: "/features/dietprograms", icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4", text: "Diet recommendation" },
    { href: "/features/rituals", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", text: "Rituals" },
    { href: "/features/sleepanalysis", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", text: "Sleep analysis" },
    { href: "/features/menswellness", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", text: "Men's wellness" },
    { href: "/features/posedetection", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", text: "Posture detection" },
    { href: "/features/library", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", text: "Exercise Library" },
  ];

  // Determine active link. Default to diet recommendations when on /features index.
  const normalizedPath = pathname.replace(/\/+$/, "");
  const defaultHref = "/features/dietprograms";

  const activeHref = links.find((l) => normalizedPath === l.href || normalizedPath.startsWith(l.href))
    ? links.find((l) => normalizedPath === l.href || normalizedPath.startsWith(l.href))!.href
    : (normalizedPath === "/features" || normalizedPath === "/features/")
    ? defaultHref
    : null;

  return (
    <aside className="hidden lg:flex w-72 flex-col justify-between fixed left-0 top-0 bottom-0 bg-slate-50/70 backdrop-blur-2xl border-r border-slate-200/50 p-6 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="flex flex-col gap-10 pt-2">
        <div className="px-2">
          <Link href="/" className="flex flex-col">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">VitaForge</h2>
            <span className="text-[11px] font-bold text-[#604F9E] tracking-[1.2px] opacity-80 uppercase mt-0.5">AI Performance</span>
          </Link>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <SidebarLink key={l.href} href={l.href} icon={l.icon} text={l.text} active={activeHref === l.href || (activeHref === null && l.href === defaultHref)} />
          ))}
        </nav>
      </div>

      <div className="bg-purple-50/80 rounded-[16px] p-5 flex flex-col gap-2 border border-purple-100 shadow-sm mt-8">
        <h4 className="text-[14px] font-bold text-[#4C1D95]">Upgrade to Pro</h4>
        <p className="text-[12px] text-[#6D28D9]/80 font-medium leading-[18px] mb-2">Unlock advanced AI metrics and personalized plans.</p>
        <button className="w-full py-2.5 bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] rounded-[8px] text-white text-[11px] font-bold uppercase tracking-[0.6px] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
          Get Access
        </button>
      </div>
    </aside>
  );
}

function SidebarLink({ href, icon, text, active = false }: { href: string; icon: string; text: string; active?: boolean }) {
  if (active) {
    return (
      <Link href={href} className="flex items-center gap-3 px-3.5 py-3 rounded-[12px] bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] text-white shadow-[0_10px_15px_-3px_rgba(139,92,246,0.2)] transition-all">
        <svg className="w-5 h-5 opacity-100 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
        <span className="text-[14px] font-semibold tracking-[-0.2px]">{text}</span>
      </Link>
    );
  }
  return (
    <Link href={href} className="flex items-center gap-3 px-3.5 py-3 rounded-[12px] text-[#64748B] hover:bg-slate-100 hover:text-slate-800 transition-colors">
      <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
      </svg>
      <span className="text-[14px] font-medium tracking-[-0.2px]">{text}</span>
    </Link>
  );
}

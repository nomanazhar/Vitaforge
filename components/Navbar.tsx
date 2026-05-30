"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-[65px] flex items-center justify-between px-5 md:px-10 glass-panel z-50">
      <div className="text-2xl font-black text-gradient-primary cursor-pointer tracking-tighter hover:scale-[1.02] transition-transform">
        VitaForge
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-[15px] font-medium transition-colors hover:text-violet-600 ${pathname === item.href ? "text-violet-600 font-semibold" : "text-slate-500"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <button className="group flex items-center gap-3 bg-white/90 border border-violet-600/20 pl-5 pr-1.5 py-1.5 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(124,58,237,0.15)] hover:bg-white">
          <span className="text-[13px] font-bold text-slate-900 tracking-wider uppercase">
            Start Journey
          </span>
          <div className="w-8 h-8 bg-[#5b47a6] rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </button>

        <div className="flex items-center gap-4 text-slate-500">
          <Link
            href="/notifications"
            className="p-2 rounded-full hover:text-violet-600 hover:bg-violet-600/5 transition-colors"
            aria-label="Notifications"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </Link>
          <Link
            href="/profile"
            className="p-2 rounded-full hover:text-violet-600 hover:bg-violet-600/5 transition-colors"
            aria-label="Profile"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

// app/page.tsx
// Main landing page — public, visible to ALL users (no auth required).
// This is the entry point of VitaForge.
// TODO: Build out the full marketing/landing page here.

import Link from "next/link";

export const metadata = {
  title: "VitaForge — AI-Powered Fitness Coaching",
  description:
    "Your personalised fitness and diet coaching platform powered by AI. Track workouts, diet, and progress.",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">VitaForge</h1>
      <p className="text-lg text-zinc-400 max-w-md mb-10">
        AI-powered fitness &amp; diet coaching. Track your workouts, stay on
        your diet, and reach your goals.
      </p>
      <div className="flex gap-4">
        <Link
          href="/signup"
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 rounded-xl border border-white/10 text-zinc-300 font-semibold hover:bg-white/5 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}


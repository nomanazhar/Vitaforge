// app/(auth)/login/page.tsx
// Login page — renders the LoginForm component.
// TODO: Add OAuth providers (Google, etc.).

import { LoginForm } from "@/components/forms/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Sign In · VitaForge",
  description: "Sign in to your VitaForge account to access your personalized fitness and diet plans.",
};

export default function LoginPage() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-xl font-semibold text-white mb-6">Welcome back</h2>
      <LoginForm />
      <p className="text-sm text-zinc-400 text-center mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          Create one
        </Link>
      </p>
    </div>
  );
}

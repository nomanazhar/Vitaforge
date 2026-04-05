// app/(auth)/signup/page.tsx
// Signup page — renders the SignupForm component.

import { SignupForm } from "@/components/forms/SignupForm";
import Link from "next/link";

export const metadata = {
  title: "Create Account · VitaForge",
  description: "Create your VitaForge account and start your AI-powered fitness journey.",
};

export default function SignupPage() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-xl font-semibold text-white mb-6">Create your account</h2>
      <SignupForm />
      <p className="text-sm text-zinc-400 text-center mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
}

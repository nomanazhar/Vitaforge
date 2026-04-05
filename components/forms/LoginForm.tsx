// components/forms/LoginForm.tsx
// Login form UI — calls Supabase auth from the form action or a server action.
// TODO: Wire up form submission with Supabase signInWithPassword.

"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4" id="login-form">
      <Input id="login-email" type="email" label="Email" placeholder="you@example.com" required />
      <Input id="login-password" type="password" label="Password" placeholder="••••••••" required />
      <Button type="submit" id="login-submit-btn" className="w-full mt-2">
        Sign In
      </Button>
    </form>
  );
}

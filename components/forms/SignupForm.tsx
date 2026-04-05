// components/forms/SignupForm.tsx
// Signup form UI. TODO: Wire up with Supabase signUp.

"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function SignupForm() {
  return (
    <form className="flex flex-col gap-4" id="signup-form">
      <Input id="signup-name" type="text" label="Display Name" placeholder="Your name" required />
      <Input id="signup-email" type="email" label="Email" placeholder="you@example.com" required />
      <Input id="signup-password" type="password" label="Password" placeholder="Min 8 characters" required />
      <Button type="submit" id="signup-submit-btn" className="w-full mt-2">
        Create Account
      </Button>
    </form>
  );
}

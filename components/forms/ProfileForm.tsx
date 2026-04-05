// components/forms/ProfileForm.tsx
// User profile editor — collects fitness goal, activity level, and body stats.
// TODO: Implement full form with validation and Supabase save.

"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ProfileForm() {
  return (
    <form className="flex flex-col gap-4" id="profile-form">
      <Input id="profile-height" type="number" label="Height (cm)" placeholder="175" required />
      <Input id="profile-weight" type="number" label="Weight (kg)" placeholder="75" required />
      <Input id="profile-age" type="number" label="Age" placeholder="25" required />
      {/* TODO: Replace with Select components for goal and activity level */}
      <Button type="submit" id="profile-save-btn" className="w-full mt-2">
        Save Profile
      </Button>
    </form>
  );
}

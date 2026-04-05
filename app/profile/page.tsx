// app/profile/page.tsx
// User profile page — view and edit fitness goals and body stats.

import { ProfileForm } from "@/components/forms/ProfileForm";

export const metadata = {
  title: "My Profile · VitaForge",
  description: "Update your fitness goals, body stats, and activity level.",
};

export default function ProfilePage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">My Profile</h1>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <ProfileForm />
      </div>
    </main>
  );
}

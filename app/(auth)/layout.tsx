// app/(auth)/layout.tsx
// Auth layout — clean centered layout without the main app sidebar/nav.

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md">
        {/* VitaForge logo / brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">VitaForge</h1>
          <p className="text-sm text-zinc-400 mt-1">AI-powered fitness coaching</p>
        </div>
        {children}
      </div>
    </div>
  );
}

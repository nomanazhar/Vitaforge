// app/camera/page.tsx
// Camera / pose detection page.
// MUST be a client component — uses browser APIs (webcam, canvas, WebAssembly).

"use client";

import { useRef } from "react";
import { CameraFeed } from "@/components/camera/CameraFeed";
import { PoseOverlay } from "@/components/camera/PoseOverlay";
import { FeedbackPanel } from "@/components/camera/FeedbackPanel";
import { usePoseDetection } from "@/hooks/usePoseDetection";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { landmarks, isReady } = usePoseDetection(videoRef);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Pose Detection</h1>
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900 aspect-video mb-4">
        <CameraFeed
          onVideoReady={(el) => {
            // Attach the element to our ref for pose detection
            (videoRef as React.MutableRefObject<HTMLVideoElement>).current = el;
          }}
          className="w-full h-full object-cover"
        />
        {isReady && (
          <PoseOverlay
            landmarks={landmarks}
            width={640}
            height={480}
          />
        )}
      </div>
      <FeedbackPanel feedback={null} isReady={isReady} />
    </main>
  );
}

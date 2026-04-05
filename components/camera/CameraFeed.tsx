// components/camera/CameraFeed.tsx
// Renders the webcam video feed for pose detection.
// This component is client-only and marked with 'use client'.
// Do NOT import in server components.

"use client";

import { useEffect, useRef } from "react";

interface CameraFeedProps {
  onVideoReady?: (videoEl: HTMLVideoElement) => void;
  className?: string;
}

export function CameraFeed({ onVideoReady, className = "" }: CameraFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then((s) => {
        stream = s;
        if (videoRef.current) {
          videoRef.current.srcObject = s;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            if (videoRef.current) onVideoReady?.(videoRef.current);
          };
        }
      })
      .catch((err) => console.error("Camera access denied:", err));

    return () => stream?.getTracks().forEach((t) => t.stop());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      className={`rounded-2xl w-full object-cover ${className}`}
    />
  );
}

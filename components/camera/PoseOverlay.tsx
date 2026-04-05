// components/camera/PoseOverlay.tsx
// Canvas overlay for drawing pose landmarks on top of the camera feed.
// TODO: Implement skeleton drawing using detected landmarks.

"use client";

import { useRef, useEffect } from "react";
import type { Landmark } from "@/lib/cv/angles";

interface PoseOverlayProps {
  landmarks: Landmark[][] | null;
  width: number;
  height: number;
}

export function PoseOverlay({ landmarks, width, height }: PoseOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    if (!landmarks) return;

    // TODO: Draw skeleton connections and landmark points
    ctx.fillStyle = "#6366f1";
    for (const pose of landmarks) {
      for (const point of pose) {
        ctx.beginPath();
        ctx.arc(point.x * width, point.y * height, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [landmarks, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

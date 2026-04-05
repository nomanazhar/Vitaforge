// hooks/usePoseDetection.ts
// Hook for MediaPipe pose detection — client-side only.
// Initializes the detector and runs the detection loop on the video stream.
// Do NOT use this hook in server components.

"use client";

import { useEffect, useRef, useState } from "react";
import { initPoseDetector, detectPose } from "@/lib/cv/pose";
import { calculateAngle, type Landmark } from "@/lib/cv/angles";

export interface PoseResult {
  landmarks: Landmark[][] | null;
  isReady: boolean;
  error: string | null;
}

/**
 * Hook to run MediaPipe pose detection on a video element.
 *
 * @param videoRef - Ref to the HTMLVideoElement to run detection on
 * @returns PoseResult with landmarks, readiness state, and any error
 */
export function usePoseDetection(
  videoRef: React.RefObject<HTMLVideoElement | null>
): PoseResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detectorRef = useRef<any>(null);
  const animationRef = useRef<number>(0);
  const [landmarks, setLandmarks] = useState<Landmark[][] | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function setup() {
      try {
        detectorRef.current = await initPoseDetector();
        if (active) setIsReady(true);
      } catch (err) {
        if (active) setError(String(err));
      }
    }

    setup();

    return () => {
      active = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isReady || !videoRef.current) return;

    function loop() {
      detectPose(detectorRef.current, videoRef.current!).then((result) => {
        if (result?.landmarks) setLandmarks(result.landmarks);
      });
      animationRef.current = requestAnimationFrame(loop);
    }

    loop();

    return () => cancelAnimationFrame(animationRef.current);
  }, [isReady, videoRef]);

  return { landmarks, isReady, error };
}

// Re-export for convenience
export { calculateAngle };

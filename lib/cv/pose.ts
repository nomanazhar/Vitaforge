// lib/cv/pose.ts
// Pose detection initializer using MediaPipe Tasks Vision.
// Runs entirely on the client (browser WebAssembly).
// Do NOT import this file in server components or API routes.

// TODO: Import and configure PoseLandmarker from @mediapipe/tasks-vision
// Docs: https://developers.google.com/mediapipe/solutions/vision/pose_landmarker/web_js

export interface PoseDetectorConfig {
  /** Path or URL to the MediaPipe WASM assets */
  wasmFilesPath?: string;
  /** Model asset path (lite, full, or heavy) */
  modelAssetPath?: string;
  /** Number of poses to detect simultaneously */
  numPoses?: number;
  /** Minimum confidence threshold (0–1) */
  minPoseDetectionConfidence?: number;
}

/**
 * Initialize the MediaPipe PoseLandmarker model.
 * Must be called once before calling detectPose().
 * Should be called inside a useEffect in the camera component.
 *
 * @param config - Optional configuration overrides
 * @returns The initialized PoseLandmarker instance (typed as any until @mediapipe types stabilize)
 */
export async function initPoseDetector(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config?: PoseDetectorConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  // TODO: Implement PoseLandmarker initialization
  // Example:
  // const { PoseLandmarker, FilesetResolver } = await import("@mediapipe/tasks-vision");
  // const vision = await FilesetResolver.forVisionTasks("/mediapipe/wasm");
  // return await PoseLandmarker.createFromOptions(vision, { ... });

  console.warn("initPoseDetector: not yet implemented");
  return null;
}

/**
 * Run pose detection on a video frame.
 * Call this in a requestAnimationFrame loop inside the camera component.
 *
 * @param detector - The initialized PoseLandmarker instance
 * @param videoElement - The HTMLVideoElement to detect poses on
 * @returns Landmark array or null
 */
export async function detectPose(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detector: any,
  videoElement: HTMLVideoElement
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any | null> {
  if (!detector || !videoElement) return null;

  // TODO: Call detector.detectForVideo(videoElement, performance.now())
  return null;
}

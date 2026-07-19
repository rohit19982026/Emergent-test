import { create } from "zustand";

type SceneState = {
  progress: number; // 0 = cloud, 1 = mark, 2 = network
  reducedMotion: boolean;
  setProgress: (value: number) => void;
  setReducedMotion: (value: boolean) => void;
};

// Plain imperative store: GSAP's ScrollTrigger writes to this at scroll-rate
// via getState().setProgress(v) (no React subscription -> no re-renders at
// 60fps), and the R3F useFrame loop reads getState().progress imperatively
// each frame to push into the shader uniform. React itself never
// re-renders for either side of this.
export const useSceneStore = create<SceneState>((set) => ({
  progress: 0,
  reducedMotion: false,
  setProgress: (value) => set({ progress: value }),
  setReducedMotion: (value) => set({ reducedMotion: value }),
}));

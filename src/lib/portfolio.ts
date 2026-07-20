// Real work samples. Add new pieces here — the Portfolio section renders
// whatever's in this array, so dropping in a new entry is the whole job.
export type WorkItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  type: "video" | "image";
  src: string;
  aspect: "16/9" | "9/16" | "4/5" | "1/1";
};

export const work: WorkItem[] = [
  {
    id: "thalvax-sleep-tvc",
    title: "Thalvax — Sleep",
    category: "Video Editing",
    description: "Short-form TV commercial edit.",
    type: "video",
    src: "/work/thalvax-sleep-tvc.mp4",
    aspect: "16/9",
  },
];

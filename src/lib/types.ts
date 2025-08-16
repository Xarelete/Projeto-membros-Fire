import { LucideIcon } from "lucide-react";

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  videoId: string;
  description: string;
  resources: { label: string; url: string; icon: any }[];
  preview?: boolean; // Can this lesson be previewed when course is locked?
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  bannerUrl: string;
  category: string;
  purchased: boolean;
  checkoutUrl?: string;
  modules: Module[];
};

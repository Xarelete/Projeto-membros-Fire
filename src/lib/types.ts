export type Lesson = {
  id: string;
  title: string;
  duration: string;
  videoId: string;
  description: string;
  resources: { label: string; url: string; icon: any }[];
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

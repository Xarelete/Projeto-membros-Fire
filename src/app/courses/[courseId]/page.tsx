'use client';

import { useState, useEffect, use, useMemo } from 'react';
import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import { type Lesson, type Module } from '@/lib/types';
import { useProgress } from '@/hooks/use-progress';
import { CourseSidebar } from '@/components/course-sidebar';
import { LessonContent } from '@/components/lesson-content';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoPlayer } from '@/components/video-player';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const [course, setCourse] = useState<(typeof courses)[0] | undefined>(undefined);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('content');

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      if (foundCourse.modules.length > 0) {
        const firstModule = foundCourse.modules[0];
        setActiveModule(firstModule);
        if (firstModule.lessons.length > 0) {
          setActiveLesson(firstModule.lessons[0]);
        }
      }
    }
    setIsLoading(false);
  }, [courseId]);
  
  const { completedLessons, toggleLessonCompleted } = useProgress(courseId, course);

  const allLessons = useMemo(() => {
    return course?.modules.flatMap(module => module.lessons) || [];
  }, [course]);

  const activeLessonIndex = useMemo(() => {
    if (!activeLesson) return -1;
    return allLessons.findIndex(l => l.id === activeLesson.id);
  }, [activeLesson, allLessons]);

  const previousLesson = activeLessonIndex > 0 ? allLessons[activeLessonIndex - 1] : null;
  const nextLesson = activeLessonIndex < allLessons.length - 1 ? allLessons[activeLessonIndex + 1] : null;

  const goToLesson = (lesson: Lesson | null) => {
    if (lesson && course) {
      const moduleForLesson = course.modules.find(m => m.lessons.some(l => l.id === lesson.id));
      setActiveLesson(lesson);
      if (moduleForLesson) {
        setActiveModule(moduleForLesson);
      }
      setActiveTab('content');
    }
  };

  const handleLessonClick = (lesson: Lesson) => {
      goToLesson(lesson);
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 md:p-8">
        <div className="space-y-4">
            <Skeleton className="w-full aspect-video rounded-xl" />
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-8 w-96" />
            <Skeleton className="w-full h-64 rounded-xl" />
        </div>
      </div>
    );
  }

  if (!course || !course.purchased) {
    notFound();
  }

  if (!activeLesson || !activeModule) {
    return (
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-center">
            <h2 className="text-2xl font-headline font-bold">Welcome to {course.title}</h2>
            <p className="text-muted-foreground mt-2">This course doesn't have any lessons yet.</p>
        </div>
      </div>
    );
  }

  const isCompleted = completedLessons.has(activeLesson.id);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="relative mb-6">
        <VideoPlayer videoId={activeLesson.videoId} title={activeLesson.title} />
        <Button 
            onClick={() => goToLesson(previousLesson)} 
            disabled={!previousLesson}
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 hover:text-white disabled:hidden"
        >
            <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button 
            onClick={() => goToLesson(nextLesson)} 
            disabled={!nextLesson}
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 hover:text-white disabled:hidden"
        >
            <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase text-muted-foreground tracking-wider">{activeModule.title}</h2>
        <h1 className="text-2xl md:text-3xl font-headline font-bold mt-1">{activeLesson.title}</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="lessons">Aulas</TabsTrigger>
              <TabsTrigger value="content">Conteúdo</TabsTrigger>
            </TabsList>
            <div className='flex items-center gap-4'>
                <Button variant="ghost" size="icon">
                    <Star className="h-5 w-5" />
                    <span className="sr-only">Favorite</span>
                </Button>
                <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`completed-${activeLesson.id}`}
                      checked={isCompleted}
                      onCheckedChange={() => toggleLessonCompleted(activeLesson.id)}
                    />
                    <Label htmlFor={`completed-${activeLesson.id}`} className="text-sm font-medium leading-none cursor-pointer">
                      Mark as Completed
                    </Label>
                </div>
            </div>
        </div>
        <TabsContent value="content" className="mt-4">
            <LessonContent
                lesson={activeLesson}
            />
        </TabsContent>
        <TabsContent value="lessons" className="mt-4">
          <div className="max-w-3xl">
            <CourseSidebar
              courseId={course.id}
              modules={course.modules}
              activeLessonId={activeLesson.id}
              onLessonClick={handleLessonClick}
              completedLessons={completedLessons}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

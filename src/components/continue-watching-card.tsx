'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/lib/data';
import { type Lesson, type Course } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from './ui/progress';
import { PlayCircle } from 'lucide-react';
import { useProgress } from '@/hooks/use-progress';

export function ContinueWatchingCard() {
  const [lastWatched, setLastWatched] = useState<{ course?: Course; lesson?: Lesson }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const item = localStorage.getItem('lastWatchedLesson');
    if (item) {
      try {
        const { courseId, lessonId } = JSON.parse(item);
        const course = courses.find(c => c.id === courseId);
        if (course) {
          const lesson = course.modules.flatMap(m => m.lessons).find(l => l.id === lessonId);
          if (lesson) {
            setLastWatched({ course, lesson });
          }
        }
      } catch (error) {
        console.error("Failed to parse last watched lesson:", error);
      }
    }
    setIsLoading(false);
  }, []);

  const { progressPercentage } = useProgress(lastWatched.course?.id || '', lastWatched.course);

  if (isLoading) {
    return <Skeleton className="w-full h-[150px] md:w-1/2 rounded-2xl" />;
  }

  if (!lastWatched.course || !lastWatched.lesson) {
    return null; // Don't show the card if there's no last watched lesson
  }
  
  const { course, lesson } = lastWatched;
  const href = `/courses/${course.id}/lessons/${lesson.id}`;

  return (
    <Link href={href} className="block md:w-1/2 group">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
            <Image
              src={`https://img.youtube.com/vi/${lesson.videoId}/hqdefault.jpg`}
              alt={lesson.title}
              data-ai-hint="lesson thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="h-16 w-16 text-white/80" />
            </div>

            <div className="absolute bottom-0 left-0 p-4 w-full">
                <p className="text-white font-bold text-lg drop-shadow-md">{lesson.title}</p>
                <div className="mt-2">
                    <Progress value={progressPercentage} className="h-1.5" />
                </div>
            </div>
        </div>
    </Link>
  );
}

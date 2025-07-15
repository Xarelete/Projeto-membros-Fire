'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import { type Lesson } from '@/lib/types';
import { useProgress } from '@/hooks/use-progress';
import { CourseLayout } from '@/components/course-layout';
import { CourseSidebar } from '@/components/course-sidebar';
import { LessonContent } from '@/components/lesson-content';
import { Skeleton } from '@/components/ui/skeleton';

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const [course, setCourse] = useState<(typeof courses)[0] | undefined>(undefined);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      if (foundCourse.modules.length > 0 && foundCourse.modules[0].lessons.length > 0) {
        setActiveLesson(foundCourse.modules[0].lessons[0]);
      }
    }
    setIsLoading(false);
  }, [courseId]);
  
  const { completedLessons, toggleLessonCompleted } = useProgress(courseId, course);

  if (isLoading) {
    return (
      <CourseLayout
        sidebar={<Skeleton className="w-full md:w-80 lg:w-96 h-full" />}
      >
        <div className="p-8 space-y-8">
            <Skeleton className="w-full aspect-video rounded-xl" />
            <Skeleton className="w-full h-64 rounded-xl" />
        </div>
      </CourseLayout>
    );
  }

  if (!course || !course.purchased) {
    notFound();
  }

  if (!activeLesson) {
    return (
      <CourseLayout
        sidebar={
          <CourseSidebar
            courseId={course.id}
            modules={course.modules}
            activeLessonId={null}
            onLessonClick={setActiveLesson}
            completedLessons={completedLessons}
          />
        }
      >
        <div className="flex-1 flex items-center justify-center p-8 text-center">
            <div>
                <h2 className="text-2xl font-headline font-bold">Welcome to {course.title}</h2>
                <p className="text-muted-foreground mt-2">Select a lesson from the sidebar to get started.</p>
            </div>
        </div>
      </CourseLayout>
    );
  }

  return (
    <CourseLayout
      sidebar={
        <CourseSidebar
          courseId={course.id}
          modules={course.modules}
          activeLessonId={activeLesson.id}
          onLessonClick={setActiveLesson}
          completedLessons={completedLessons}
        />
      }
    >
      <LessonContent
        lesson={activeLesson}
        isCompleted={completedLessons.has(activeLesson.id)}
        onToggleCompleted={toggleLessonCompleted}
      />
    </CourseLayout>
  );
}

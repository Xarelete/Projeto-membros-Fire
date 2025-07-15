'use client';

import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/use-progress';
import { type Course } from '@/lib/types';
import { useEffect, useState } from 'react';

type CourseProgressProps = {
  course: Course;
};

export function CourseProgress({ course }: CourseProgressProps) {
  const { progressPercentage, isClient } = useProgress(course.id, course);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isClient) {
    return (
      <div className="mt-4">
        <Progress value={0} className="w-full" />
        <p className="mt-2 text-xs text-muted-foreground">
          Loading progress...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <Progress value={progressPercentage} className="w-full" />
      <p className="mt-2 text-xs text-muted-foreground">
        {Math.round(progressPercentage)}% Complete
      </p>
    </div>
  );
}

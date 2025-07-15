'use client';

import { useState, useEffect, useCallback } from 'react';
import { type Course } from '@/lib/types';

// Helper function to safely access localStorage
const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(key);
};

const setStorageItem = (key: string, value: string) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, value);
};

export function useProgress(courseId: string, course: Course | undefined) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedProgress = getStorageItem(`progress_${courseId}`);
    if (storedProgress) {
      setCompletedLessons(new Set(JSON.parse(storedProgress)));
    }
  }, [courseId]);

  const toggleLessonCompleted = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      const newProgress = new Set(prev);
      if (newProgress.has(lessonId)) {
        newProgress.delete(lessonId);
      } else {
        newProgress.add(lessonId);
      }
      setStorageItem(`progress_${courseId}`, JSON.stringify(Array.from(newProgress)));
      return newProgress;
    });
  }, [courseId]);

  const totalLessons = course?.modules.reduce((acc, module) => acc + module.lessons.length, 0) || 0;
  
  const progressPercentage = totalLessons > 0 ? (completedLessons.size / totalLessons) * 100 : 0;

  return { 
    completedLessons: isClient ? completedLessons : new Set(),
    toggleLessonCompleted,
    progressPercentage,
    totalLessons,
    isClient,
  };
}

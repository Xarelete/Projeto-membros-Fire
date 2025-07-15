'use client';

import { type Lesson } from '@/lib/types';
import { VideoPlayer } from './video-player';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import Link from 'next/link';
import { Label } from './ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type LessonContentProps = {
  lesson: Lesson;
  isCompleted: boolean;
  onToggleCompleted: (lessonId: string) => void;
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
  onGoToLesson: (lesson: Lesson | null) => void;
};

export function LessonContent({ 
  lesson, 
  isCompleted, 
  onToggleCompleted,
  previousLesson,
  nextLesson,
  onGoToLesson,
}: LessonContentProps) {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto">
      <VideoPlayer videoId={lesson.videoId} title={lesson.title} />
      <Card className="mt-8 shadow-lg">
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle className="font-headline text-2xl">{lesson.title}</CardTitle>
          <div className="flex items-center space-x-3 shrink-0">
            <Checkbox
              id={`completed-${lesson.id}`}
              checked={isCompleted}
              onCheckedChange={() => onToggleCompleted(lesson.id)}
            />
            <Label htmlFor={`completed-${lesson.id}`} className="text-sm font-medium leading-none cursor-pointer">
              Mark as Completed
            </Label>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className="prose prose-sm dark:prose-invert max-w-none font-body space-y-4"
            dangerouslySetInnerHTML={{ __html: lesson.description }}
          />

          {lesson.resources.length > 0 && (
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-headline text-lg font-semibold mb-3">
                Lesson Resources
              </h3>
              <div className="flex flex-wrap gap-3">
                {lesson.resources.map((resource, index) => (
                  <Button key={index} variant="outline" asChild>
                    <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                      <resource.icon className="mr-2 h-4 w-4" />
                      {resource.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
            <Button 
                onClick={() => onGoToLesson(previousLesson)} 
                disabled={!previousLesson}
                variant="outline"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
            </Button>
            <Button 
                onClick={() => onGoToLesson(nextLesson)} 
                disabled={!nextLesson}
            >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

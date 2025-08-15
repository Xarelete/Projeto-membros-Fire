'use client';

import { type Lesson } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

type LessonContentProps = {
  lesson: Lesson;
};

export function LessonContent({ 
  lesson, 
}: LessonContentProps) {
  return (
    <Card className="shadow-lg">
        <CardContent className="p-6">
          <div
            className="prose prose-sm dark:prose-invert max-w-none font-body space-y-4"
            dangerouslySetInnerHTML={{ __html: lesson.description }}
          />

          {lesson.resources.length > 0 && (
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-headline text-lg font-semibold mb-3">
                Recursos da Aula
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
    </Card>
  );
}

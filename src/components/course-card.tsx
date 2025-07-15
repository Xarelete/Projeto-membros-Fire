import Link from 'next/link';
import Image from 'next/image';
import { type Course } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, PlayCircle } from 'lucide-react';
import { CourseProgress } from './course-progress';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const { id, title, description, bannerUrl, category, purchased, checkoutUrl } = course;
  const isLocked = !purchased;

  return (
    <Card className="flex flex-col overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0 relative">
        <Link href={!isLocked ? `/courses/${id}` : '#'} aria-disabled={isLocked} tabIndex={isLocked ? -1 : 0}>
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={bannerUrl}
              alt={title}
              data-ai-hint="online course"
              fill
              className={`object-cover transition-transform duration-500 hover:scale-105 ${isLocked ? 'grayscale' : ''}`}
            />
            {isLocked && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Lock className="h-12 w-12 text-white" />
              </div>
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <Badge variant="secondary" className="w-fit mb-2">{category}</Badge>
        <CardTitle className="font-headline text-xl mb-2 flex-grow">
            <Link href={!isLocked ? `/courses/${id}` : '#'} className="hover:text-primary transition-colors duration-300" aria-disabled={isLocked} tabIndex={isLocked ? -1 : 0}>
                {title}
            </Link>
        </CardTitle>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          {isLocked ? (
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            </Button>
          ) : (
            <>
              <CourseProgress course={course} />
              <Button asChild className="w-full mt-4">
                <Link href={`/courses/${id}`}>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Start Learning
                </Link>
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

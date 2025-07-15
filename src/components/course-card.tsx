import Link from 'next/link';
import Image from 'next/image';
import { type Course } from '@/lib/types';
import { Lock, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const { id, title, bannerUrl, purchased } = course;
  const isLocked = !purchased;

  return (
    <Link 
      href={!isLocked ? `/courses/${id}` : '#'} 
      aria-disabled={isLocked} 
      tabIndex={isLocked ? -1 : 0}
      className={cn(
        "block relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isLocked && 'pointer-events-none'
      )}
    >
      <Image
        src={bannerUrl}
        alt={title}
        data-ai-hint="online course vertical"
        fill
        className={cn(
          "object-cover",
          isLocked && 'grayscale'
        )}
      />
      {isLocked && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <Lock className="h-10 w-10 text-white" />
        </div>
      )}
      {!isLocked && (
         <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <PlayCircle className="h-12 w-12 text-white" />
         </div>
      )}
    </Link>
  );
}

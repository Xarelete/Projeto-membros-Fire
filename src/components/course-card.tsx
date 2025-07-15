import Link from 'next/link';
import Image from 'next/image';
import { type Course } from '@/lib/types';
import { Lock, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const { id, title, bannerUrl, purchased } = course;
  
  // All courses now link to the preview page.
  const isLocked = false; 

  return (
    <Link 
      href={`/courses/${id}`} 
      className={cn(
        "group block relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-amber-500"
      )}
    >
      <Image
        src={bannerUrl}
        alt={title}
        data-ai-hint="online course vertical"
        fill
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-105",
          !purchased && 'grayscale'
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300" />
      
      <div className="absolute top-3 right-3">
        {!purchased && (
          <Badge variant="destructive" className="bg-red-500/80 backdrop-blur-sm border-none text-white shadow-lg">
            <Lock className="h-3 w-3 mr-1" />
            Locked
          </Badge>
        )}
      </div>

      <div className='absolute bottom-0 left-0 p-4 w-full'>
        <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">{title}</h3>
      </div>
      
       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayCircle className="h-16 w-16 text-white/80 transform transition-transform group-hover:scale-110" />
       </div>
    </Link>
  );
}

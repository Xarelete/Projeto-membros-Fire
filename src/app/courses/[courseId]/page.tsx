'use client';

import { useState, useEffect, use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { courses } from '@/lib/data';
import { type Lesson, type Module } from '@/lib/types';
import { useProgress } from '@/hooks/use-progress';
import { CourseSidebar } from '@/components/course-sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, PlayCircle, Star } from 'lucide-react';
import { CourseProgress } from '@/components/course-progress';
import { useAuth } from '@/components/providers';
import Link from 'next/link';

export default function CoursePreviewPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const [course, setCourse] = useState<(typeof courses)[0] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === courseId);
    setCourse(foundCourse);
    setIsLoading(false);
  }, [courseId]);

  const { completedLessons } = useProgress(courseId, course);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-4">
                <Skeleton className="w-full aspect-video rounded-xl" />
                <Skeleton className="h-12 w-64" />
                <Skeleton className="h-8 w-96" />
            </div>
            <div className="lg:w-1/3 space-y-4">
                 <Skeleton className="w-full h-96 rounded-xl" />
            </div>
        </div>
      </div>
    );
  }

  if (!course) {
    notFound();
  }
  
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);

  const handlePrimaryAction = () => {
    if (!isAuthenticated) {
        router.push('/login');
        return;
    }
    if (course.purchased) {
        const firstLesson = course.modules?.[0]?.lessons?.[0];
        if (firstLesson) {
            router.push(`/courses/${course.id}/lessons/${firstLesson.id}`);
        }
    } else if (course.checkoutUrl) {
        window.location.href = course.checkoutUrl;
    }
  }

  const handleLessonClick = (lesson: Lesson) => {
    if (isAuthenticated && course.purchased) {
        router.push(`/courses/${course.id}/lessons/${lesson.id}`);
    } else {
        router.push('/login');
    }
  }

  const isLockedForUser = !isAuthenticated || !course.purchased;

  return (
    <div className="container mx-auto py-8">
        <div className="relative mb-8 h-80 md:h-[450px] w-full overflow-hidden rounded-3xl shadow-2xl flex items-end">
          <Image
            src={course.purchased ? course.bannerUrl.replace('225x400', '1200x400') : "https://placehold.co/1200x400.png"}
            alt={`${course.title} Banner`}
            data-ai-hint="online course abstract"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="relative p-8 md:p-12 text-white">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
              {course.title}
            </h1>
            <div className='flex items-center gap-4'>
                <p className="font-semibold">{course.modules.length} Módulos</p>
                <span className="text-white/50">&bull;</span>
                <p className="font-semibold">{totalLessons} Lecciones</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-6'>
                <h2 className='font-headline text-3xl font-bold'>Módulos 👇</h2>
                <CourseSidebar 
                    courseId={course.id}
                    modules={course.modules}
                    activeLessonId={null} // No active lesson on preview page
                    onLessonClick={handleLessonClick}
                    completedLessons={completedLessons}
                    isLocked={isLockedForUser}
                />
            </div>
            <div className='lg:col-span-1'>
                <div className='sticky top-24 bg-card p-6 rounded-2xl border shadow-lg'>
                    { !isAuthenticated ? (
                       <Button asChild size="lg" className="w-full group bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
                           <Link href="/login">
                                Inicia sesión para acceder <Lock className="ml-2 h-5 w-5" />
                           </Link>
                       </Button>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <Button 
                                size="lg" 
                                className="w-full group bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
                                onClick={handlePrimaryAction}
                            >
                                {course.purchased ? (
                                    <>
                                        Comenzar Curso <PlayCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </>
                                ) : (
                                    <>
                                        Comprar Ahora <Lock className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                            {!course.purchased && (
                                <Button asChild variant="outline" size="lg" className="w-full">
                                    <Link href="/">
                                        <ArrowLeft className="mr-2 h-5 w-5" />
                                        Volver a Inicio
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}

                    {isAuthenticated && course.purchased && <CourseProgress course={course} />}
                </div>
            </div>
        </div>
    </div>
  );
}

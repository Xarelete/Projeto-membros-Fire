'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  const coursesByCategory = courses.reduce((acc, course) => {
    const category = course.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  const featuredCourse = courses.find(c => c.id === 'nextjs-fundamentals');

  return (
    <div className="container mx-auto px-4 py-8">
      {featuredCourse && (
        <div className="relative mb-12 h-80 md:h-96 w-full overflow-hidden rounded-3xl shadow-2xl group">
          <Image
            src={featuredCourse.bannerUrl.replace('225x400', '1200x400')}
            alt="Featured Course Banner"
            data-ai-hint="online course abstract"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
              {featuredCourse.title}
            </h1>
            <p className="text-base md:text-lg max-w-2xl font-body drop-shadow-md mb-6">
              {featuredCourse.description}
            </p>
            <Button asChild className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Link href={`/courses/${featuredCourse.id}`}>
                Start Learning
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      )}

      <section id="courses" className="space-y-16">
        {Object.entries(coursesByCategory).map(([category, categoryCourses]) => (
          <div key={category}>
            <h2 className="font-headline text-3xl font-bold mb-6">{category}</h2>
            <Carousel
              opts={{
                align: 'start',
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {categoryCourses.map((course) => (
                  <CarouselItem key={course.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4">
                    <CourseCard course={course} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex bg-background/50 backdrop-blur-sm" />
              <CarouselNext className="hidden md:flex bg-background/50 backdrop-blur-sm" />
            </Carousel>
          </div>
        ))}
      </section>
    </div>
  );
}

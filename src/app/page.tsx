'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data';
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-12 h-60 md:h-80 w-full overflow-hidden rounded-3xl shadow-2xl group">
        <Image
          src="https://i.imgur.com/LXmHUxY.png"
          alt="Banner"
          data-ai-hint="youtubers futuristic"
          fill
          className="object-cover"
        />
      </div>

      <section id="courses" className="space-y-16">
        {Object.entries(coursesByCategory).map(([category, categoryCourses]) => (
          <div key={category}>
            <h2 className="font-headline text-3xl font-bold mb-6">{category} 👇</h2>
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

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-12 h-64 md:h-80 w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="https://placehold.co/1200x400.png"
          alt="Featured Course Banner"
          data-ai-hint="online course abstract"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
          <h1 className="font-headline text-3xl md:text-5xl font-bold mb-2 drop-shadow-md">
            Unlock Your Potential
          </h1>
          <p className="text-base md:text-xl max-w-2xl font-body drop-shadow-sm">
            Discover a wide range of courses designed to boost your skills and career.
          </p>
          <Button asChild className="mt-4 group bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#courses">
              Browse Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <section id="courses">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

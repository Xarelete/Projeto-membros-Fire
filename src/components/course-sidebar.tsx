import { type Module, type Lesson } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type CourseSidebarProps = {
  courseId: string;
  modules: Module[];
  activeLessonId: string | null;
  onLessonClick: (lesson: Lesson) => void;
  completedLessons: Set<string>;
};

export function CourseSidebar({
  courseId,
  modules,
  activeLessonId,
  onLessonClick,
  completedLessons,
}: CourseSidebarProps) {
  return (
    <aside className="w-full md:w-80 lg:w-96 flex-shrink-0 border-r bg-card/50">
      <div className="h-full p-4 flex flex-col">
        <div className="mb-4">
          <Button variant="outline" asChild className="w-full">
            <Link href="/">← Back to Courses</Link>
          </Button>
        </div>
        <div className="overflow-y-auto flex-1 -mr-4 pr-4">
          <Accordion type="single" collapsible defaultValue={`module-${modules[0]?.id}`} className="w-full">
            {modules.map((module) => (
              <AccordionItem key={module.id} value={`module-${module.id}`}>
                <AccordionTrigger className="font-headline hover:no-underline">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1">
                    {module.lessons.map((lesson) => {
                      const isCompleted = completedLessons.has(lesson.id);
                      const isActive = activeLessonId === lesson.id;
                      const Icon = isCompleted ? CheckCircle : Circle;

                      return (
                        <li key={lesson.id}>
                          <button
                            onClick={() => onLessonClick(lesson)}
                            className={cn(
                              'w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors duration-200',
                              isActive
                                ? 'bg-primary/10 text-primary font-semibold'
                                : 'hover:bg-muted/50',
                            )}
                          >
                            {isActive ? (
                               <Play className="h-5 w-5 text-primary shrink-0" />
                            ) : (
                               <Icon
                                className={cn(
                                  'h-5 w-5 shrink-0',
                                  isCompleted ? 'text-green-500' : 'text-muted-foreground'
                                )}
                              />
                            )}
                            <span className="flex-1 text-sm">{lesson.title}</span>
                            <span className="text-xs text-muted-foreground">
                              {lesson.duration}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </aside>
  );
}

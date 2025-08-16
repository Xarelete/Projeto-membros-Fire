import { type Module, type Lesson } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle, Circle, Lock, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type CourseSidebarProps = {
  courseId: string;
  modules: Module[];
  activeLessonId: string | null;
  onLessonClick: (lesson: Lesson) => void;
  completedLessons: Set<string>;
  isLocked?: boolean;
};

export function CourseSidebar({
  modules,
  activeLessonId,
  onLessonClick,
  completedLessons,
  isLocked = false,
}: CourseSidebarProps) {
  
  const defaultOpenModule = modules.find(m => m.lessons.some(l => l.id === activeLessonId))?.id;

  return (
      <Accordion type="single" collapsible defaultValue={defaultOpenModule ? `module-${defaultOpenModule}`: undefined} className="w-full">
        {modules.map((module) => (
          <AccordionItem key={module.id} value={`module-${module.id}`} className="border rounded-2xl overflow-hidden mb-4 shadow-sm bg-card">
            <AccordionTrigger className="font-headline text-lg hover:no-underline p-4">
              <div className='flex items-center gap-2'>
                {module.isLocked && <Lock className='h-5 w-5 text-amber-500' />}
                {module.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1 p-2">
                {module.lessons.map((lesson) => {
                  const isCompleted = completedLessons.has(lesson.id);
                  const isActive = activeLessonId === lesson.id;
                  const isLessonLocked = isLocked || module.isLocked;
                  
                  let Icon = Circle;
                  if (isLessonLocked) Icon = Lock;
                  else if (isCompleted) Icon = CheckCircle;
                  
                  return (
                    <li key={lesson.id}>
                      <button
                        onClick={() => onLessonClick(lesson)}
                        disabled={isLessonLocked && !lesson.preview}
                        className={cn(
                          'w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors duration-200',
                          isActive
                            ? 'bg-primary/10 text-primary font-semibold'
                            : 'hover:bg-muted/50',
                          isLessonLocked && !lesson.preview && 'opacity-50 cursor-not-allowed'
                        )}
                      >
                         {isActive ? (
                           <Play className="h-5 w-5 text-primary shrink-0" />
                        ) : (
                           <Icon
                            className={cn(
                              'h-5 w-5 shrink-0',
                              isCompleted ? 'text-green-500' : 'text-muted-foreground',
                              isLessonLocked && 'text-amber-500'
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
  );
}

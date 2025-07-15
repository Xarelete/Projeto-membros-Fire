import { type Course } from './types';
import { Book, Download, Group, Video } from 'lucide-react';

export const courses: Course[] = [
  {
    id: 'nextjs-fundamentals',
    title: 'Next.js Fundamentals',
    description: 'Master the basics of Next.js and build powerful, server-rendered React applications.',
    bannerUrl: 'https://placehold.co/225x400.png',
    category: 'My Courses',
    purchased: true,
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Next.js',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'What is Next.js?',
            duration: '10:45',
            videoId: 'dQw4w9WgXcQ',
            description: `
              <p>In this introductory lesson, we'll explore the core concepts of Next.js and understand why it's a popular choice for building modern web applications. We'll cover:</p>
              <ul>
                <li>Server-Side Rendering (SSR) vs. Static Site Generation (SSG)</li>
                <li>The benefits of file-system based routing.</li>
                <li>Key features that set Next.js apart.</li>
              </ul>
            `,
            resources: [
              { label: 'Official Docs', url: '#', icon: Book },
              { label: 'Community Chat', url: '#', icon: Group },
            ],
          },
          {
            id: 'lesson-1-2',
            title: 'Setting up your first project',
            duration: '15:20',
            videoId: 'dQw4w9WgXcQ',
            description: `
              <p>Let's get our hands dirty! This lesson walks you through the process of creating a new Next.js project from scratch.</p>
              <p>You'll learn how to use <code>create-next-app</code> and understand the basic project structure that gets generated.</p>
            `,
            resources: [
              { label: 'Starter Code', url: '#', icon: Download },
            ],
          },
        ],
      },
      {
        id: 'module-2',
        title: 'Routing and Pages',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'File-based Routing',
            duration: '12:30',
            videoId: 'dQw4w9WgXcQ',
            description: '<p>Dive deep into the intuitive routing system of Next.js. Create new pages and routes simply by adding files to the `pages` directory. We will also explore dynamic routing to create pages from data.</p>',
            resources: [
                { label: 'Routing Docs', url: '#', icon: Book },
            ],
          },
          {
            id: 'lesson-2-2',
            title: 'Linking and Navigation',
            duration: '8:55',
            videoId: 'dQw4w9WgXcQ',
            description: '<p>Learn how to navigate between pages using the Next.js Link component for client-side navigation, ensuring a fast, single-page app-like experience.</p>',
            resources: [],
          },
        ],
      },
    ],
  },
  {
    id: 'tailwind-for-designers',
    title: 'Tailwind CSS for Designers',
    description: 'Learn how to design and build beautiful, modern websites without ever leaving your HTML.',
    bannerUrl: 'https://placehold.co/225x400.png',
    category: 'My Courses',
    purchased: true,
    modules: [
        {
          id: 'module-1',
          title: 'Getting Started with Tailwind',
          lessons: [
            {
              id: 'lesson-1-1',
              title: 'Utility-First Fundamentals',
              duration: '18:30',
              videoId: 'dQw4w9WgXcQ',
              description: '<p>Understand the core philosophy of Tailwind CSS and how the utility-first approach can dramatically speed up your development workflow.</p>',
              resources: [
                { label: 'Tailwind Docs', url: '#', icon: Book },
                { label: 'Project Files', url: '#', icon: Download },
              ],
            },
          ]
        }
    ]
  },
  {
    id: 'firebase-masterclass',
    title: 'Firebase Masterclass',
    description: 'Build full-stack applications using the power of Firebase for auth, database, and hosting.',
    bannerUrl: 'https://placehold.co/225x400.png',
    category: 'Accelerate Virality',
    purchased: false,
    checkoutUrl: '#',
    modules: [],
  },
    {
    id: 'viral-content-strategy',
    title: 'Viral Content Strategy',
    description: 'Discover the secrets to creating content that people love to share.',
    bannerUrl: 'https://placehold.co/225x400.png',
    category: 'Accelerate Virality',
    purchased: true,
    modules: [],
  },
  {
    id: 'social-media-growth',
    title: 'Social Media Growth Hacking',
    description: 'Advanced techniques to grow your social media presence exponentially.',
    bannerUrl: 'https://placehold.co/225x400.png',
    category: 'Accelerate Virality',
    purchased: false,
    checkoutUrl: '#',
    modules: [],
  },
  {
    id: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    description: 'Take your React skills to the next level with advanced patterns and techniques.',
    bannerUrl: 'https://placehold.co/225x400.png',
    category: 'Próximo Nível',
    purchased: false,
    checkoutUrl: '#',
    modules: [],
  },
  {
    id: 'devops-for-developers',
    title: 'DevOps for Developers',
    description: 'Learn the fundamentals of DevOps to streamline your development and deployment workflows.',
    bannerUrl: 'https://placehold.co/225x400.png',
    category: 'Próximo Nível',
    purchased: false,
    checkoutUrl: '#',
    modules: [],
  },
];

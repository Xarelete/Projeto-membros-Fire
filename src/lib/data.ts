import { type Course } from './types';
import { Book, Download, Group, Video } from 'lucide-react';

export const courses: Course[] = [
  {
    id: 'veolab-academy',
    title: 'Veolab Academy',
    description: '',
    bannerUrl: 'https://i.imgur.com/xhVrV2g.png',
    category: 'MIS CURSOS',
    purchased: true,
    modules: [
      {
        id: 'module-1',
        title: 'Módulo 1',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Lección 1: Cómo crear tu primer vídeo con el generador de indicaciones',
            duration: '10:45',
            videoId: '6ZmYa_KnPzg',
            description: ``,
            resources: [],
          },
           {
            id: 'lesson-1-2',
            title: 'Lección 2: Uso del generador de scripts virales',
            duration: '12:30',
            videoId: 'wtAsS5r2A9E',
            description: ``,
            resources: [],
          },
           {
            id: 'lesson-1-3',
            title: 'Lección 3 - Ejemplos de vídeos virales',
            duration: '8:55',
            videoId: 'GK3v3JumvpA',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-2',
        title: 'Módulo 2',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Lección 1',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: '',
            resources: [],
          },
          {
            id: 'lesson-2-2',
            title: 'Lección 2',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: '',
            resources: [],
          },
          {
            id: 'lesson-2-3',
            title: 'Lección 3',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-3',
        title: 'Módulo 3',
        lessons: [
            {
            id: 'lesson-3-1',
            title: 'Lección 1',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ]
      },
      {
        id: 'module-4',
        title: 'Módulo 4',
        lessons: [
            {
            id: 'lesson-4-1',
            title: 'Lección 1',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ]
      },
       {
        id: 'module-5',
        title: 'Módulo 5',
        lessons: [
            {
            id: 'lesson-5-1',
            title: 'Lección 1',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
           {
            id: 'lesson-5-2',
            title: 'Lección 2',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ]
      },
       {
        id: 'module-6',
        title: 'Módulo 6',
        lessons: [
            {
            id: 'lesson-6-1',
            title: 'Lección 1',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
           {
            id: 'lesson-6-2',
            title: 'Lección 2',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ]
      },
      {
        id: 'module-7',
        title: 'Módulo 7',
        lessons: [
            {
            id: 'lesson-7-1',
            title: 'Lección 1',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
           {
            id: 'lesson-7-2',
            title: 'Lección 2',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-7-3',
            title: 'Lección 3',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ]
      }
    ],
  },
  {
    id: 'plano-rapido',
    title: 'Plano Rápido',
    description: '',
    bannerUrl: 'https://i.imgur.com/Fp4tHPW.png',
    category: 'MIS CURSOS',
    purchased: true,
    modules: [
        {
          id: 'module-1',
          title: 'Módulo 1',
          lessons: [
            {
              id: 'lesson-1-1',
              title: 'Lección 1',
              duration: '18:30',
              videoId: 'dQw4w9WgXcQ',
              description: '',
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
    id: 'trend-dos-bebes',
    title: 'Trend de los bebés',
    description: '',
    bannerUrl: 'https://i.imgur.com/cFmyne3.png',
    category: 'MIS CURSOS',
    purchased: true,
    modules: [],
  },
  {
    id: 'pack-de-templates',
    title: 'Pack de plantillas',
    description: '',
    bannerUrl: 'https://i.imgur.com/oskQRSx.png',
    category: 'ACELERAR VIRALIZACIÓN',
    purchased: true,
    checkoutUrl: '#',
    modules: [],
  },
    {
    id: 'perfis-para-modelar',
    title: '10 perfiles para modelar',
    description: '',
    bannerUrl: 'https://i.imgur.com/OYJyVIN.png',
    category: 'ACELERAR VIRALIZACIÓN',
    purchased: true,
    modules: [],
  },
  {
    id: 'veolab-empresarial',
    title: 'Veolab Empresarial',
    description: '',
    bannerUrl: 'https://i.imgur.com/1sphFox.png',
    category: 'SIGUIENTE NIVEL',
    purchased: false,
    checkoutUrl: '#',
    modules: [],
  },
];

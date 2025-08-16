import { type Course } from './types';
import { Book, Download, Group, Video, MessageCircle } from 'lucide-react';

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
        title: 'Módulo 1 - Creación de Cuenta',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Lección 1 - Creando Cuenta',
            duration: '10:45',
            videoId: '6ZmYa_KnPzg',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-2',
        title: 'Módulo 2 - Creando Vídeos Virales',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Lección 1 - Creando tus Primeros Vídeos con el Generador de Prompt',
            duration: '12:30',
            videoId: 'wtAsS5r2A9E',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-2-2',
            title: 'Lección 2 - Ejemplos de vídeos virales',
            duration: '8:55',
            videoId: 'GK3v3JumvpA',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-2-3',
            title: 'Lección 3 - Generador de Guiones Virales',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-2-4',
            title: 'Lección 4 - Cómo Hacer 53 Vídeos por Día',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-3',
        title: 'Módulo 3 - Estrategias de Monetización',
        lessons: [
          {
            id: 'lesson-3-1',
            title: 'Estrategias para Monetizar',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-4',
        title: 'Módulo 4 - Empezando de Cero en la Práctica',
        lessons: [
          {
            id: 'lesson-4-1',
            title: 'Lección 1 - Creando y Publicando los Primeros Vídeos',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-5',
        title: 'Módulo 5 - Técnicas Avanzadas',
        lessons: [
          {
            id: 'lesson-5-1',
            title: 'Lección 1 - Cómo hacer Vídeos Comerciales Para Tu Empresa o Para Clientes',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-5-2',
            title: 'Lección 2 - Cómo Hacer Vídeos de Más de 8 Segundos',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-6',
        title: 'Módulo 6 - Guía secreta de la monetización en 7 días (MUY RÁPIDO)',
        isLocked: true,
        lessons: [
          {
            id: 'lesson-6-1',
            title: '1- 20 ideas geniales',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
           {
            id: 'lesson-6-2',
            title: '2- técnica infalible de viralización y ganar mucho dinero de diversas formas (CAMBIO DE CHIP)',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
           {
            id: 'lesson-6-3',
            title: '3- Monetizando en 7 días (aprovechen)',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-7',
        title: 'Módulo 7 - Soporte y Comunidad',
        isLocked: true,
        lessons: [
          {
            id: 'lesson-7-1',
            title: 'Whatsapp para Soporte',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [
              { label: 'Acceder a Whatsapp', url: '#', icon: MessageCircle },
            ],
          },
           {
            id: 'lesson-7-2',
            title: 'Comunidad',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [
               { label: 'Acceder a la Comunidad', url: '#', icon: Group },
            ],
          },
        ],
      },
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
                { label: 'Documentación de Tailwind', url: '#', icon: Book },
                { label: 'Archivos del Proyecto', url: '#', icon: Download },
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
    category: 'PRÓXIMO NIVEL',
    purchased: false,
    checkoutUrl: '#',
    modules: [],
  },
];

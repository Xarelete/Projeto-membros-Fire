import { type Course } from './types';
import { Book, Download, Group, Video, MessageCircle, Link2 } from 'lucide-react';

export const courses: Course[] = [
  {
    id: 'veolab-academy',
    title: 'Veolab Academy',
    description: '',
    bannerUrl: 'https://i.imgur.com/xhVrV2g.png',
    category: 'MIS CURSOS',
    purchased: true,
    checkoutUrl: '#',
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
            description: `<p>Enlace para crear una cuenta gratuita: <a href="https://labs.google/flow/about#pricing" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://labs.google/flow/about#pricing</a></p>`,
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
            resources: [
              { label: 'Generador de Prompts aquí', url: 'https://chatgpt.com/g/g-683c8d0cbbc08191b7119e86d4b20914-gerador-de-prompts', icon: Link2 },
              { label: 'Crea tus vídeos aquí en este enlace', url: 'https://labs.google/flow/about', icon: Link2 },
            ],
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
            isLocked: true,
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-2-4',
            title: 'Lección 4 - Cómo Hacer 53 Vídeos por Día',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            isLocked: true,
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-3',
        title: 'Módulo 3 - Estrategias de Monetización',
        isLocked: true,
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
        isLocked: true,
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
        isLocked: true,
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
    title: 'Plano Rápido: Cómo cerrar tu 1er cliente con videos de IA',
    description: '',
    bannerUrl: 'https://i.imgur.com/Fp4tHPW.png',
    category: 'MIS CURSOS',
    purchased: true,
    checkoutUrl: '#',
    modules: [
        {
          id: 'module-1',
          title: 'Módulo 1 - Determinando tu público objetivo',
          isLocked: true,
          lessons: [
            {
              id: 'lesson-1-1',
              title: '¿Cómo Elegir tu Nicho?',
              duration: '00:00',
              videoId: 'dQw4w9WgXcQ',
              description: '',
              resources: [],
            },
          ]
        },
        {
          id: 'module-2',
          title: 'Módulo 2 - Creando Tus Primeros Videos Comerciales',
          isLocked: true,
          lessons: [
            {
              id: 'lesson-2-1',
              title: 'Cómo Crear Videos para Empresas o Negocios',
              duration: '00:00',
              videoId: 'dQw4w9WgXcQ',
              description: '',
              resources: [],
            },
          ]
        },
        {
          id: 'module-3',
          title: 'Módulo 3 - Prospección y Abordaje',
          isLocked: true,
          lessons: [
            {
              id: 'lesson-3-1',
              title: 'Cómo Prospectar tus Primeros Clientes',
              duration: '00:00',
              videoId: 'dQw4w9WgXcQ',
              description: '',
              resources: [],
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
    checkoutUrl: '#',
    modules: [
        {
          id: 'module-1',
          title: 'Módulo 1 - Tendencia extremadamente viral',
          isLocked: true,
          lessons: [
            {
              id: 'lesson-1-1',
              title: 'Lección 1 - Cómo Hacer los Videos de la Tendencia de los Bebés',
              duration: 'Video',
              videoId: 'dQw4w9WgXcQ',
              description: '',
              resources: [
                  { label: 'Link de la IA', url: 'https://www.hedra.com/app/home', icon: Link2 },
                  { label: 'Link del Prompt Aquí', url: 'https://drive.google.com/drive/folders/19iMK1ttLyCP54AzVyHQAlwfFe5U8Ii0V?usp=sharing', icon: Download }
              ],
            },
            {
              id: 'lesson-1-2',
              title: 'Lección 2 - Cómo Hacer Videos de Más de 20 Segundos',
              duration: 'Video',
              videoId: 'dQw4w9WgXcQ',
              description: '',
              resources: [],
            }
          ]
        }
    ],
  },
  {
    id: 'pack-de-templates',
    title: 'Pack de plantillas',
    description: '',
    bannerUrl: 'https://i.imgur.com/oskQRSx.png',
    category: 'ACELERAR VIRALIZACIÓN',
    purchased: true,
    checkoutUrl: '#',
    modules: [
      {
        id: 'module-1',
        title: 'Módulo 1 - Facilitando tu vida con el pack',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Plantilla viral aquí',
            duration: 'Contenido',
            videoId: '',
            description: '<p>Accede a la plantilla de Canva para crear tus videos virales.</p>',
            resources: [
              { label: 'Pack de plantillas aquí', url: 'https://www.canva.com/design/DAGo26xMUJo/SnLMMQT8IiseavQVWvdRXA/edit?utm_content=DAGo26xMUJo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', icon: Link2 },
            ],
          },
          {
            id: 'lesson-1-2',
            title: 'Pack de sonidos',
            duration: 'Contenido',
            videoId: '',
            description: '<p>Descarga los efectos de sonido para usar en tus videos.</p>',
            resources: [
               { label: 'Efectos sonoros aquí', url: 'https://drive.google.com/drive/folders/1WI9FdVB-xDUVAoF_byBBsMLYPcMNj97p?usp=sharing', icon: Download },
            ],
          },
        ],
      },
      {
        id: 'module-2',
        title: 'Módulo 2 - Cómo usar la plantilla y los efectos de sonido',
        isLocked: true,
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Aula completa de edición en la práctica',
            duration: '15:00',
            videoId: 'dQw4w9WgXcQ',
            description: '',
            resources: [],
          },
        ],
      },
    ],
  },
    {
    id: 'perfis-para-modelar',
    title: '10 perfiles para modelar',
    description: '',
    bannerUrl: 'https://i.imgur.com/OYJyVIN.png',
    category: 'ACELERAR VIRALIZACIÓN',
    purchased: true,
    checkoutUrl: '#',
    modules: [
        {
            id: 'module-1',
            title: 'Módulo 1 - Descarga el Archivo Aquí 👇🏻',
            lessons: [
                {
                    id: 'lesson-1-1',
                    title: 'Contenido',
                    duration: 'Contenido',
                    videoId: '',
                    description: `
                        <p>Hola a todos, aquí tienen 10 perfiles listos para que puedan modelar, es decir, pueden hacer videos iguales a los de estas personas, con nuestro generador de prompts.</p>
                        <p>Simplemente describan la escena y el diálogo de los videos que más les gusten en el generador de prompts y podrán crear videos ¡idénticos a esos!</p>
                        <p>Y si tienen alguna duda para hacer vídeos como este, pueden contactarme por el soporte de WhatsApp: (12) 99259-1593</p>
                        <ul class="list-disc pl-5 mt-4 space-y-2">
                            <li><a href="https://www.instagram.com/ramos_channel/" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.instagram.com/ramos_channel/</a></li>
                            <li><a href="https://www.instagram.com/bibliaemselfie/" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.instagram.com/bibliaemselfie/</a></li>
                            <li><a href="https://www.instagram.com/layna.eng/" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.instagram.com/layna.eng/</a></li>
                            <li><a href="https://www.instagram.com/maquinadotemp0.ia/" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.instagram.com/maquinadotemp0.ia/</a></li>
                            <li><a href="https://www.tiktok.com/@podcastdabiblia2" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.tiktok.com/@podcastdabiblia2</a></li>
                            <li><a href="https://www.tiktok.com/@vloghistorico" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.tiktok.com/@vloghistorico</a></li>
                            <li><a href="https://www.tiktok.com/@gorilaosoltoporai" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.tiktok.com/@gorilaosoltoporai</a></li>
                            <li><a href="https://www.tiktok.com/@vlogbiblico" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.tiktok.com/@vlogbiblico</a></li>
                            <li><a href="https://www.tiktok.com/@criatividade.ia01" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.tiktok.com/@criatividade.ia01</a></li>
                            <li><a href="https://www.tiktok.com/@bobbb_williiii788" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">https://www.tiktok.com/@bobbb_williiii788</a></li>
                        </ul>
                    `,
                    resources: [],
                }
            ]
        }
    ],
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

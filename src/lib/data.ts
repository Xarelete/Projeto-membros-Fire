import { type Course } from './types';
import { Book, Download, Group, Video } from 'lucide-react';

export const courses: Course[] = [
  {
    id: 'veolab-academy',
    title: 'Veolab Academy',
    description: '',
    bannerUrl: 'https://i.imgur.com/xhVrV2g.png',
    category: 'MEUS CURSOS',
    purchased: true,
    modules: [
      {
        id: 'module-1',
        title: 'Módulo 1 - Criação de Conta',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Aula 1 - Criando Conta',
            duration: '10:45',
            videoId: '6ZmYa_KnPzg',
            description: ``,
            resources: [],
          },
        ],
      },
      {
        id: 'module-2',
        title: 'Módulo 2 - Criando Vídeos Virais',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Aula 1 - Criando seus Primeiros Vídeos com o Gerador de Prompt',
            duration: '12:30',
            videoId: 'wtAsS5r2A9E',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-2-2',
            title: 'Aula 2 - Exemplos de vídeos virais',
            duration: '8:55',
            videoId: 'GK3v3JumvpA',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-2-3',
            title: 'Aula 3 - Gerador de Roteiros Virais',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
          },
          {
            id: 'lesson-2-4',
            title: 'Aula 4 - Como Fazer 53 Vídeos por Dia',
            duration: '00:00',
            videoId: 'dQw4w9WgXcQ',
            description: ``,
            resources: [],
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
    category: 'MEUS CURSOS',
    purchased: true,
    modules: [
        {
          id: 'module-1',
          title: 'Módulo 1',
          lessons: [
            {
              id: 'lesson-1-1',
              title: 'Aula 1',
              duration: '18:30',
              videoId: 'dQw4w9WgXcQ',
              description: '',
              resources: [
                { label: 'Documentação Tailwind', url: '#', icon: Book },
                { label: 'Arquivos do Projeto', url: '#', icon: Download },
              ],
            },
          ]
        }
    ]
  },
   {
    id: 'trend-dos-bebes',
    title: 'Trend dos bebês',
    description: '',
    bannerUrl: 'https://i.imgur.com/cFmyne3.png',
    category: 'MEUS CURSOS',
    purchased: true,
    modules: [],
  },
  {
    id: 'pack-de-templates',
    title: 'Pack de templates',
    description: '',
    bannerUrl: 'https://i.imgur.com/oskQRSx.png',
    category: 'ACELERAR VIRALIZAÇÃO',
    purchased: true,
    checkoutUrl: '#',
    modules: [],
  },
    {
    id: 'perfis-para-modelar',
    title: '10 perfis para modelar',
    description: '',
    bannerUrl: 'https://i.imgur.com/OYJyVIN.png',
    category: 'ACELERAR VIRALIZAÇÃO',
    purchased: true,
    modules: [],
  },
  {
    id: 'veolab-empresarial',
    title: 'Veolab Empresarial',
    description: '',
    bannerUrl: 'https://i.imgur.com/1sphFox.png',
    category: 'PRÓXIMO NÍVEL',
    purchased: false,
    checkoutUrl: '#',
    modules: [],
  },
];

import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  GreetingsType,
  ProjectType,
  SEODataType,
  SkillsSectionType,
  SocialLinksType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mauro Maio',
  title: 'Mauro Maio',
  description:
    'Sou um desenvolvedor front-end apaixonado por tecnologia e inovação com experiência em aplicações web com React.js, Vue.js, Next.js e Nuxt.js.',
  resumeLink:
    'https://drive.google.com/file/d/1oMhLEnmiZAlLH5eIHdEM28ZXo8jCTiTm/view',
};

export const openSource = {
  githubUserName: 'mauromaiodev',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/mauromaiodev',
  linkedin: 'https://www.linkedin.com/in/mauromaio-dev',
  github: 'https://github.com/mauromaiodev',
  instagram: 'https://www.instagram.com/mauromaioficial/',
};

export const skillsSection: SkillsSectionType = {
  title: 'O que faço?',
  subTitle: 'FRONT END DEVELOPER APAIXONADO POR TECNOLOGIA E INOVAÇÃO',
  data: [
    {
      title: 'Front End Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Construindo Aplicativos de Página Única (SPA) responsivos e PWA em React.js'
        ),
        emoji('⚡ Construindo sites estáticos responsivos usando Next.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Arquitetura Cloud',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Experiência de trabalho em várias plataformas de nuvem'),
        emoji(
          '⚡ Hospedagem e manutenção de sites em instâncias de máquinas virtuais'
        ),
        emoji(
          '⚡ Construindo pipelines de CI/CD para testes e implantação automatizados usando o Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'VERCEL',
          iconifyTag: 'logos:vercel',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Anhanguera Educacional',
    subHeader: 'Análise e Desenvolvimento de Sistemas',
    duration: 'Jan 2021 - April 2023',
    desc: 'Criar soluções tecnológicas eficientes para atender às necessidades específicas de organizações e usuários.',
    descBullets: [
      'Construção efetiva do software;',
      'Programação, teste, integração de componentes e o uso de tecnologias específicas para a criação do sistema;',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Analista de Sistemas - WEB',
    company: 'ACP Group - Avansys',
    companyLogo: '/img/icons/common/acp-logo.jpg',
    date: 'Mar 2022 – Abr 2023',
    desc: 'Desenvolvimento de sistemas Web de alta escala, como os projetos na Secretaria de Educação da Bahia, que registrou milhões de acessos. Utilizei tecnologias como React, Redux, TypeScript, Axios e React Query para desenvolver soluções eficientes e escaláveis',
  },
  {
    role: 'Fullstack Developer',
    company: 'Kokua IT',
    companyLogo: '/img/icons/common/kokua-logo.jpg',
    date: 'Nov 2020 – Mar 2022',
    desc: 'Fiz parte da equipe de desenvolvimento, criando softwares para a área de gerenciamento de projetos atuando como Fullstack com ênfase em Frontend. Utilizei tecnologias como Vue, Vite, Axios e Vuetify.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'portfolio-mauro-maio',
    desc: 'Software Developer Portfolio',
    github: 'https://github.com/mauromaiodev/portfolio-mauro-maio',
    link: 'https://mauromaioportfolio.vercel.app',
  },
  {
    name: 'React Admin Dashboard',
    desc: 'Completed React Admin Dashboard',
    github: 'https://github.com/mauromaiodev/react-admin-dashboard',
    link: 'https://react-adm-dashboard.vercel.app/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Maurício Dias',
    feedback:
      'Mauro é um profissional capaz e cresceu muito neste primeiro trimestre do ano de 2023. Com entregas dentro do prazo, bastante comunicativo, proativo e tem tudo para ser um profissional de alta performance, e quando tem tempo em suas tarefas, vai além e não se contenta em fazer apenas o básico. Aceita desafios e as cumpre, não tem medo de aprender e de se desenvolver.',
  },
  {
    name: 'Rodrigo Godinho',
    feedback:
      'Trabalhei diretamente com Mauro e pude notar o seu amadurecimento durante a sua jornada. Sendo sempre proativo e muito estudioso, nunca teve um desafio que o abalasse. Me chamou atenção sua humildade, resiliência, empatia e excelente capacidade de comunicação.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mauro Maio',
  description: 'A passionate Front End Web Developer.',
  author: 'Mauro Maio',
  url: 'https://mauromaio.vercel.app/',
  keywords: ['Mauro Maio', 'mauromaiodev', 'Portfolio', 'Mauro Maio Portfolio'],
};

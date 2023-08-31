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
    'Sou um desenvolvedor Fullstack apaixonado por tecnologia e inovação com experiência em aplicações web com React.js, Vue.js, Next.js, Nuxt.js e Node.js,',
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
  subTitle: 'FULLSTACK DEVELOPER APAIXONADO POR TECNOLOGIA E INOVAÇÃO',
  data: [
    {
      title: 'Fullstack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji(
          '⚡ Construindo Aplicativos de Página Única (SPA) responsivos e PWA em React.js/Next.js'
        ),
        emoji(
          '⚡ Desenvolvendo APIs e gerenciando banco de dados com Node.js/MongoDB '
        ),
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
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'NodeJS',
          iconifyTag: 'devicon:nodejs-wordmark',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'Mongoose',
          iconifyTag: 'devicon:mongoose-wordmark',
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
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'AZURE',
          iconifyTag: 'logos:azure',
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
  {
    schoolName: 'Rocketseat',
    subHeader: 'Fullstack Developer, Information Technology',
    duration: 'Mar 2020 - Jul 2020',
    desc: 'Desenvolvimento de sistemas Web, utilizando ReactJS no frontend, Node.js para a construção do backend, além do app mobile (Android e iOS) com React Native.',
    descBullets: [
      'Executando aplicações, como banco de dados PostgreSQL, MongoDB (noSQL) em containers Docker.',
      'Utilizando Styled Components para estilização dos componentes de interface gráfica.',
      'Context API e Redux para o gerenciamento de estados do React.',
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
    name: 'next-portfolio-mauro',
    desc: 'Software Developer Portfolio built with Next.js',
    github: 'https://github.com/mauromaiodev/next-portfolio-mauro',
    link: 'https://mauromaio.vercel.app/',
  },
  {
    name: 'Coffee Delivery',
    desc: 'Desafio criado pela trilha Ignite da RocketSeat no curso de React',
    github: 'https://github.com/mauromaiodev/coffee-delivery-challenge',
    link: 'https://coffeedelivery-ignite.vercel.app/',
  },
  {
    name: 'E-commerce Capputeeno',
    desc: 'E-commerce Capputeeno, desenvolvido como solução do Rocketseat frontend challenge.',
    github: 'https://github.com/mauromaiodev/challenge-frontend-rocketseat',
  },
  {
    name: 'API com Node.js, MongoDB',
    desc: 'API com Node, MongoDB, Express, TypeScript, JWT, Criptografia e arquitetura MSC + Routes',
    github: 'https://github.com/mauromaiodev/node-api-mongo-concepts',
  },
  {
    name: 'React Admin Dashboard',
    desc: 'React Admin Dashboard',
    github: 'https://github.com/mauromaiodev/react-admin-dashboard',
    link: 'https://react-adm-dashboard.vercel.app/',
  },
  {
    name: 'Controle de despesas',
    desc: 'Controle financeiro: Inserção e remoção de débitos e saldos',
    github: 'https://github.com/mauromaiodev/finance-control',
    link: 'https://finance-control-v1.vercel.app/',
  },
  {
    name: 'Beta Fotografia',
    desc: 'Portfólio de fotografia feito em React',
    github: 'https://github.com/mauromaiodev/beta-fotografia',
    link: 'https://betabahiafotografia.vercel.app/',
  },
  {
    name: 'To-do List - Ignite Rocketseat',
    desc: 'Praticando Conceitos - Ignite da Rocketseat',
    github: 'https://github.com/mauromaiodev/todo-list-ignite',
    link: 'https://todo-list-ignite-v1.vercel.app/',
  },
  {
    name: 'Timer - Ignite Rocketseat',
    desc: 'Praticando Conceitos em React - Ignite da Rocketseat',
    github: 'https://github.com/mauromaiodev/timer-ignite',
    link: 'https://timer-ignite-v1.vercel.app/',
  },
  {
    name: 'portfolio-mauro-maio',
    desc: 'Software Developer Portfolio',
    github: 'https://github.com/mauromaiodev/portfolio-mauro-maio',
    link: 'https://mauromaioportfolio.vercel.app',
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

export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mauro Maio',
  description: 'A passionate Front End Web Developer.',
  author: 'Mauro Maio',
  url: 'https://mauromaio.vercel.app/',
  keywords: ['Mauro Maio', 'mauromaiodev', 'Portfolio', 'Mauro Maio Portfolio'],
};

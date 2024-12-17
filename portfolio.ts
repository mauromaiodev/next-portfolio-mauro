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
  description: `Sou um Engenheiro de Software / Web Developer com mais de quatro anos de experiência em construir aplicações. Tenho experiência em aplicações web com React, Vue, Angular, Next.js, Nuxt.js, Node.js e Java.`,
  resumeLink:
    'https://drive.google.com/file/d/1sg34EV7I5ru2Ob3jEFGkcgBMV0Xtnb1y/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'mauromaiodev',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  instagram: 'https://www.instagram.com/mauromaioficial/',
  github: 'https://github.com/mauromaiodev',
  linkedin: 'https://www.linkedin.com/in/mauromaio-dev',
};

export const skillsSection: SkillsSectionType = {
  title: 'O que faço?',
  subTitle: 'DESENVOLVO SOLUÇÕES ATRAVÉS DA ENGENHARIA DE SOFTWARE',
  data: [
    {
      title: 'Fullstack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji('⚡ Desenvolvendo soluções através do Javascript/Typescript'),
        emoji(
          '⚡ Construindo Aplicativos de Página Única (SPA) responsivos e PWA em React.js/Next.js'
        ),
        emoji(
          '⚡ Desenvolvendo APIs e gerenciando banco de dados com Node.js/MongoDB/Supabase '
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
          skillName: 'Javascript',
          iconifyTag: 'devicon:javascript',
        },
        {
          skillName: 'Typescript',
          iconifyTag: 'devicon:typescript',
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
        emoji('⚡ Experiência de trabalho em plataformas de nuvem'),
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
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
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
    role: 'Engenheiro de Software',
    company: 'Peregrina Investimentos',
    companyLogo: '/img/icons/common/peregrina-logo.jpg',
    date: 'Dez 2023 - Atualmente',
    desc: 'Desenvolvimento dos projetos da Peregrina Investimentos com Next 13+, trabalho com foco na acessibilidade através das fontes, cores, contrastes e interatividade das aplicações. Utilizo tecnologias como React, Next 13+, TypeScript, Styled Components, Zod, React Hook Form, Axios, Azure DevOps.',
  },
  {
    role: 'Engenheiro de Software',
    company: 'Saúde TV',
    companyLogo: '/img/icons/common/saudetv-logo.jpg',
    date: 'Abr 2023 - Mar 2024',
    desc: 'Atuando na construção de soluções WEB/API utilizando React, Next, Vue, Nuxt, TypeScript, NodeJS, MongoDB, Mongoose, Express, Styled Components, Sass e Tailwind com foco em performance com SSR e otimizações de SEO.',
  },
  {
    role: 'Engenheiro de Software',
    company: 'ACP Group - Avansys',
    companyLogo: '/img/icons/common/acp-logo.jpg',
    date: 'Mar 2022 – Abr 2023',
    desc: 'Desenvolvimento de sistemas Web de alta escala, como os projetos na Secretaria de Educação da Bahia, que registrou milhões de acessos. Utilizei tecnologias como React, Redux, TypeScript, Axios e React Query para desenvolver soluções eficientes e escaláveis.',
  },
  {
    role: 'Engenheiro de Software',
    company: 'Kokua IT',
    companyLogo: '/img/icons/common/kokua-logo.jpg',
    date: 'Nov 2020 – Mar 2022',
    desc: 'Fiz parte da equipe de desenvolvimento, criando softwares para a área de gerenciamento de projetos atuando como Fullstack com ênfase em Frontend. Utilizei tecnologias como Vue, Vite, Axios e Vuetify.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Dev Divers',
    desc: 'Template para projetos Next 13+, TypeScript, Tailwind e modelo para meus projetos SaaS',
    github: 'https://github.com/mauromaiodev/dev-divers',
    link: 'https://dev-divers.vercel.app/',
  },
  {
    name: 'Dev Blog',
    desc: 'Blog feito com Next 14, Upstash (Redis), TypeScript, Tailwind',
    github: 'https://github.com/mauromaiodev/dev-blog',
    link: 'https://devdivers-blog.vercel.app/posts',
  },
  {
    name: 'Prod Guardian',
    desc: 'Sistema para gerenciamento de produtos e fornecedores com autenticação e autorização. Usando Next 13+ e API next, Zustand, MongoDB, JOI.',
    github: 'https://github.com/mauromaiodev/prod-guardian-next13',
  },
  {
    name: 'next-portfolio-mauro',
    desc: 'Meu portfolio criado com Next 13+, Typescript, Bootstrap, GraphQL, Moment e React-Tools',
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
    name: 'Template Next 13',
    desc: 'Template com configurações para iniciar qualquer projeto em Next.js',
    github: 'https://github.com/mauromaiodev/next-react-template',
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

export const seoData: SEODataType = {
  title: 'Mauro Maio',
  description: 'Software Engineer.',
  author: 'Mauro Maio',
  url: 'https://mauromaio.vercel.app/',
  keywords: ['Mauro Maio', 'mauromaiodev', 'Portfolio', 'Mauro Maio Portfolio'],
};

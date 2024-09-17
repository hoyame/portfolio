import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hoyame Zouhari",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer & CEO of Hoxtio",
  summary:
    "J'ai quitté le parcours scolaire plus tôt pour me concentrer sur des apprentissages que je jugeais plus utiles. Pendant mon adolescence, j'ai acquis des compétences en gestion de communautés en ligne, en programmation, et en entrepreneuriat. J'ai ensuite tenté de réintégrer le système scolaire pour obtenir un diplôme en programmation, mais j'ai abandonné en raison de la longueur du cursus et du manque de pertinence que je percevais. Aujourd'hui, je souhaite développer mes compétences dans les domaines des relations humaines, du commerce, ainsi que dans la gestion d'équipes et d'entreprises.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "OpenAI",
    "SCSS",
    "HTML & CSS",
    "Javascript",
    "Lua",
    "C",
    "IA Tools",
    "Git",
  ],
  langages: [
    "Français",
    "Italien",
    "Arabe",
    "Anglais (compréhension normale, expression orale difficile)"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hoyame@hoxtio.com",
    tel: "+33 6 02 22 78 25",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hoyame",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hoyame",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/@iamhoyame",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@iamhoyame",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hoyame@hoxtio.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "General Electric",
      href: "",
      badges: [],
      location: "",
      title: "Monteur",
      logoUrl: "https://media.cdn.gradconnection.com/uploads/f3d4fc87-68af-409b-be7e-34dd774bd966-GE_VERNOVA_LOGO.png",
      start: "Février 2024",
      end: "Juin 2024",
      description:
        "Contrôle qualité pour s'assurer de la conformité des pièces. Utilisation de logiciels (SAP, base ANDONS). Transport des pièces à nettoyer ou à monter pour les opérateurs. Gestion des problèmes liés aux manquants dans les stocks. Suivi des différentes affaires/travées, du nettoyage jusqu’au montage.",
    },
    {
      company: "Kom Transport",
      href: "",
      badges: [],
      location: "",
      title: "Livreur Amazon",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdHu4uqnszX0jYVHK-lr5Q6dX5GwbXHXNRg&s",
      start: "Octobre 2023",
      end: "Novembre 2023",
      description:
        "Conduire en toute sécurité jusqu’aux adresses de livraison prévues. Livrer les colis aux clients en respectant les délais. Interagir professionnellement avec les clients lors de la livraison. Utiliser des outils pour enregistrer les signatures ou les confirmations de livraison.",
    },
    {
      company: "Indépendant",
      href: "",
      badges: [],
      location: "Lyon, Auvergne-Rhône-Alpes, France · À distance",
      title: "Software Engineer Full-Stack",
      logoUrl: "/independant.png",
      start: "Mai 2020",
      end: "Juin 2023",
      description:
        "Développement Frontend avec React.js, Angular, et Vue.js. Création de modules front/back-end pour serveurs de jeu, utilisant MySQL et les natives de GTA 5. Compétences : MySQL, Développement front-end, Node.js, HTML5, React.js, Vue.js, JavaScript, CSS, Développement full-stack, FiveM.",
    },
    {
      company: "GLife",
      href: "",
      badges: [],
      location: "À distance",
      title: "Software Engineer Front-End",
      logoUrl: "https://pbs.twimg.com/profile_images/1301696020171108353/-93Oe5qJ_400x400.jpg",
      start: "Avril 2020",
      end: "Mai 2021",
      description:
        "Développement d'interfaces utilisateurs pour intégration sur un serveur de jeu. Compétences : Design d’interface utilisateur, Développement front-end.",
    },
    {
      company: "Chez Poncho",
      href: "",
      badges: [],
      location: "",
      title: "Stage - Restauration rapide",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3ESh-XFtR5WHbGpJ-0Mkpg4XuI4IowhtYA&s",
      start: "Mai 2021",
      end: "Juin 2021",
      description:
        "Assurer la préparation efficace des commandes tout en maintenant un service client de qualité et en résolvant rapidement les problèmes en cuisine ou au comptoir.",
    },
    {
      company: "AS Media Concept",
      href: "",
      badges: [],
      location: "",
      title: "Stage - Réparateur de téléphones",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5E97iYdkc6FjXL0iH__hvHCQHiKh1u3QKw&s",
      start: "Février 2020",
      end: "Avril 2020",
      description:
        "Effectuer des diagnostics pour identifier les problèmes techniques des téléphones et proposer des solutions de réparation appropriées.",
    },
  ],
  education: [
    {
      school: "42 Lyon",
      href: "",
      degree: "Concours d’école d’ingénieur en informatique",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfAZMOWHDQ3DKE63A9jWhIqQaKcKqUIXvzg&s",
      start: "2023",
      end: "Cursus arrêté",
    },
    {
      school: "Autoformation en programmation",
      href: "https://openclassrooms.com",
      degree: "Formation en programmation (OpenClassrooms)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgC4z9Q7FvTI-cGzHglUk0mIDW0lN6g9DkbA&s",
      start: "2016",
      end: "2021",
    },   
  ],
  projets: [
    {
      company: "Hoxtio",
      href: "",
      badges: [],
      location: "À distance",
      title: "Founder & CEO",
      logoUrl: "https://avatars.githubusercontent.com/u/168445066?s=200&v=4",
      start: "Fevrier 2022",
      end: "En cours",
      description:
        "IT Company",
    },
    {
      company: "VelocityRP",
      href: "",
      badges: [],
      location: "À distance",
      title: "Owner and Manager of a Multiplayer Game Server",
      logoUrl: "https://avatars.githubusercontent.com/u/112497749?s=200&v=4",
      start: "Juin 2021",
      end: "Fevrier 2021",
      description:
        "Gestion complète d'un serveur de jeu, incluant la configuration et l'optimisation des serveurs, la gestion de la communauté, et la coordination d'une équipe de modérateurs et de développeurs. Création et gestion d'une boutique en jeu, développement de stratégies marketing pour attirer de nouveaux joueurs. Compétences : Gestion des services informatiques, Gestion de projet, Gestion d’équipe.",
    },
    {
      company: "AdversityLife",
      href: "",
      badges: [],
      location: "À distance",
      title: "Owner and Manager of a Multiplayer Game Server",
      logoUrl: "https://pbs.twimg.com/profile_images/1194972413055946754/qpdV5B-S_400x400.jpg",
      start: "Septembre 2019",
      end: "Décembre 2019",
      description:
        "Gestion complète d'un serveur de jeu, incluant la configuration et l'optimisation des serveurs, la gestion de la communauté, et la coordination d'une équipe de modérateurs et de développeurs. Création et gestion d'une boutique en jeu, développement de stratégies marketing pour attirer de nouveaux joueurs. Compétences : Gestion des services informatiques, Gestion de projet, Gestion d’équipe.",
    },
    {
      company: "BlueVinity - VinityLife",
      href: "",
      badges: [],
      location: "À distance",
      title: "Owner and Manager of a Multiplayer Game Server",
      logoUrl: "https://repository-images.githubusercontent.com/202152507/bb6dd500-21c6-11ea-86e4-106d1c32eb85",
      start: "Janvier 2018",
      end: "Septembre 2019",
      description:
        "Gestion complète d'un serveur de jeu, incluant la configuration et l'optimisation des serveurs, la gestion de la communauté, et la coordination d'une équipe de modérateurs et de développeurs. Création et gestion d'une boutique en jeu, développement de stratégies marketing pour attirer de nouveaux joueurs. Compétences : Gestion des services informatiques, Gestion de projet, Gestion d’équipe.",
    },
    {
      company: "DreamLand",
      href: "",
      badges: [],
      location: "Hybride",
      title: "Manager of a Multiplayer Game Server",
      logoUrl: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/8971o8789584a4/287d4193bd6308e0b4b54393513a1ae5f8c8ac14.jpg",
      start: "Novembre 2017",
      end: "Décembre 2017",
      description:
        "Gestion d'un serveur de jeu, mise en place de stratégies marketing et gestion de la communauté. Compétences : Gestion des services informatiques, Gestion de projet.",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

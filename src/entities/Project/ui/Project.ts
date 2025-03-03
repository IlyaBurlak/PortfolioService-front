export interface Project {
    id: number;
    title: string;
    image: string;
    imageBig: string;
    tags?: string[];
    github?: string;
    linkOnDeploy?: string;
    link: string;
    filter: 'lite' | 'medium' | 'hard';
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Base Bootstrap and JS',
        image: '/img/projects/05.png',
        imageBig: "/img/projects/05Big.png",
        tags: ["CSS", 'HTML', 'JavaScript', 'Bootstrap'],
        github: "https://github.com/IlyaBurlak/JS-Bootsrap",
        linkOnDeploy: "https://ilyaburlak.github.io/JS-Bootsrap/",
        link: '/05-project',
        filter: 'lite',
    },
    {
        id: 2,
        title: 'Quote Generator',
        image: '/img/projects/01.png',
        imageBig: 'img/projects/01Big.png',
        tags: ["CSS", 'HTML', 'JavaScript'],
        github: "https://github.com/IlyaBurlak/Quotes",
        linkOnDeploy: "https://ilyaburlak.github.io/Quotes/",
        link: '/01-project',
        filter: 'lite',
    },
    {
        id: 3,
        title: 'Flashcards',
        image: '/img/projects/02.png',
        imageBig: "/img/projects/02Big.png",
        tags: ["CSS", 'HTML', 'JavaScript'],
        github: "https://github.com/IlyaBurlak/Fleshcards",
        linkOnDeploy: "https://ilyaburlak.github.io/Fleshcards/",
        link: '/02-project',
        filter: 'lite',
    },
    {
        id: 4,
        title: 'Calculator',
        image: '/img/projects/03.png',
        imageBig: "/img/projects/03Big.png",
        tags: ["CSS", 'HTML', 'JavaScript'],
        github: "https://github.com/IlyaBurlak/Calculator",
        linkOnDeploy: "https://ilyaburlak.github.io/Calculator/",
        link: '/03-project',
        filter: 'lite',
    },
    {
        id: 5,
        title: 'Animated Portfolio',
        image: '/img/projects/04.png',
        imageBig: "/img/projects/04Big.png",
        tags: ["CSS", "HTML", "AOS", "JavaScript"],
        github: "https://github.com/IlyaBurlak/AOS",
        linkOnDeploy: "https://ilyaburlak.github.io/AOS/",
        link: '/04-project',
        filter: 'lite',
    },
    {
        id: 6,
        title: 'Weather App',
        image: '/img/projects/06.png',
        imageBig: "/img/projects/06Big.png",
        tags: ["CSS", 'HTML', 'JavaScript', 'API'],
        github: "https://github.com/IlyaBurlak/Weather",
        linkOnDeploy: "https://ilyaburlak.github.io/Weather/",
        link: '/06-project',
        filter: 'medium',
    },
    {
        id: 7,
        title: 'Hangman',
        image: '/img/projects/07.png',
        imageBig: "/img/projects/07Big.png",
        tags: ["CSS", 'TypeScript', 'JavaScript', 'Vite' , 'React'],
        github: "https://github.com/IlyaBurlak/Hangman",
        linkOnDeploy: "https://ilyaburlak.github.io/Hangman/",
        link: '/07-project',
        filter: 'medium',
    },
    {
        id: 8,
        title: 'Admin Soft',
        image: '/img/projects/08.png',
        imageBig: "/img/projects/08Big.png",
        tags: ["CSS", 'HTML', 'JavaScript', 'React'],
        github: "https://github.com/IlyaBurlak/Altair-Admin",
        linkOnDeploy: "https://altair-admin-c34idca1g-ilyas-projects-d95573b2.vercel.app",
        link: '/08-project',
        filter: 'hard',
    },
];
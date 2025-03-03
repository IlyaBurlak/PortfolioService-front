export interface Project {
    id: number;
    title: string;
    image: string;
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
        filter: 'lite',
        link: '/05-project',
    },
    {
        id: 2,
        title: 'Quote Generator',
        image: '/img/projects/my-first.png',
        filter: 'lite',
        link: '/01-project',
    },
    {
        id: 3,
        title: 'Flashcards',
        image: '/img/projects/02.png',
        filter: 'lite',
        link: '/02-project',
    },
    {
        id: 4,
        title: 'Calculator',
        image: '/img/projects/03.png',
        filter: 'lite',
        link: '/03-project',
    },
    {
        id: 5,
        title: 'Animated Portfolio',
        image: '/img/projects/04.png',
        filter: 'lite',
        link: '/04-project',
    },
    {
        id: 6,
        title: 'Weather App',
        image: '/img/projects/06.png',
        filter: 'medium',
        link: '/06-project',
    },
    {
        id: 7,
        title: 'Hangman',
        image: '/img/projects/07.png',
        filter: 'medium',
        link: '/07-project',
    },
    {
        id: 8,
        title: 'Admin Soft',
        image: '/img/projects/08.png',
        filter: 'hard',
        link: '/08-project',
    },
];

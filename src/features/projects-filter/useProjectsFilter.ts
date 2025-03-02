import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    image: string;
    filter: 'lite' | 'medium' | 'hard';
    link: string;
}

const useProjectsFilter = () => {
    const [filter, setFilter] = useState<'all' | 'lite' | 'medium' | 'hard'>('all');

    const projects: Project[] = [
        {
            id: 1,
            title: 'Base Bootstrap and JS',
            image: '/img/projects/05.png',
            filter: 'lite',
            link: 'html/projects/5-project.html',
        },
        {
            id: 2,
            title: 'Quote Generator',
            image: '/img/projects/my-first.png',
            filter: 'lite',
            link: 'html/projects/1-project.html',
        },
        {
            id: 3,
            title: 'Flashcards',
            image: '/img/projects/02.png',
            filter: 'lite',
            link: 'html/projects/2-project.html',
        },
        {
            id: 4,
            title: 'Calculator',
            image: '/img/projects/03.png',
            filter: 'lite',
            link: 'html/projects/3-project.html',
        },
        {
            id: 5,
            title: 'Animated Portfolio',
            image: '/img/projects/04.png',
            filter: 'lite',
            link: 'html/projects/4-project.html',
        },
        {
            id: 6,
            title: 'Weather App',
            image: '/img/projects/06.png',
            filter: 'medium',
            link: 'html/projects/6-project.html',
        },
        {
            id: 7,
            title: 'Hangman',
            image: '/img/projects/07.png',
            filter: 'medium',
            link: 'html/projects/7-project.html',
        },
        {
            id: 8,
            title: 'Admin Soft',
            image: '/img/projects/08.png',
            filter: 'hard',
            link: 'html/projects/8-project.html',
        },
    ];

    const filterProjects = (type: 'all' | 'lite' | 'medium' | 'hard') => {
        setFilter(type);
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.filter === filter);

    return { filteredProjects, filterProjects };
};

export default useProjectsFilter;
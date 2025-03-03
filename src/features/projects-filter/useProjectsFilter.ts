import { useState } from 'react';
import { Project, projects } from '../../entities/Project/ui/Project';

const useProjectsFilter = () => {
    const [filter, setFilter] = useState<'all' | 'lite' | 'medium' | 'hard'>('all');

    const filterProjects = (type: 'all' | 'lite' | 'medium' | 'hard') => {
        setFilter(type);
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.filter === filter);

    return { filteredProjects, filterProjects, currentFilter: filter };
};

export default useProjectsFilter;
// src/features/projects-filter/useProjectsFilter.ts
import { useState, useEffect, useCallback } from 'react';
import { fetchProjects } from './api';
import {Project} from "../../entities/Project/ui/Project";

export default function useProjectsFilter() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
                setFilteredProjects(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load projects');
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    const filterProjects = useCallback((filter: string) => {
        if (filter === 'all') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(p => p.filter === filter);
            setFilteredProjects(filtered);
        }
    }, [projects]);

    return {
        filteredProjects,
        filterProjects,
        loading,
        error
    };
}
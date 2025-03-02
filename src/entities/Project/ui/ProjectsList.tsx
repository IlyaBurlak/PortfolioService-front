import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectsListProps {
    projects: Array<{
        title: string;
        image: string;
        filter: string;
    }>;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ul className="projects">
            {projects.map((project, index) => (
                <ProjectCard key={index} title={project.title} image={project.image} filter={project.filter} />
            ))}
        </ul>
    );
};

export default ProjectsList;
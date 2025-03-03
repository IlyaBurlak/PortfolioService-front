import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from './Project';

interface ProjectsListProps {
    projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ul className="projects">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    filter={project.filter}
                    link={project.link}
                />
            ))}
        </ul>
    );
};

export default ProjectsList;
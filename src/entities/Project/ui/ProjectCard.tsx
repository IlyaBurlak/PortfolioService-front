import React from 'react';

interface ProjectCardProps {
    title: string;
    image: string;
    filter: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, filter }) => {
    return (
        <li className="project">
            <a href={`html/projects/${title.toLowerCase().replace(/ /g, '-')}.html`}>
                <img src={image} alt="Project img" className="project__img" />
                <h3 className="project__title">{title}</h3>
                <button className={`filter ${filter}`}>{filter}</button>
            </a>
        </li>
    );
};

export default ProjectCard;
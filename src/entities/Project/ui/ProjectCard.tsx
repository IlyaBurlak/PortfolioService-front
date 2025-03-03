import React from 'react';

interface ProjectCardProps {
    title: string;
    image: string;
    filter: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, filter , link}) => {
    return (
        <li className="project">
            <a href={link}>
                <img src={image} alt="Project img" className="project__img" />
                <h3 className="project__title">{title}</h3>
                <button className={`filter ${filter}`}>{filter}</button>
            </a>
        </li>
    );
};

export default ProjectCard;
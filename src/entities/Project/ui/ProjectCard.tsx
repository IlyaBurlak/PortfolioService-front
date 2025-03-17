import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    image: string;
    filter: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, filter, link }) => {
    return (
        <li className="project">
            <Link to={`/project/${link.split('/')[1]}`}>
                <img src={image} alt="Project img" className="project__img" />
                <h3 className="project__title">{title}</h3>
                <button className={`filter ${filter}`}>{filter}</button>
            </Link>
        </li>
    );
};

export default ProjectCard;
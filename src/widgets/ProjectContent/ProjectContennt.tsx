import React from "react";

interface ProjectContentProps {
    title: string;
    imageBig: string;
    tags: string[];
    github: string;
    linkOnDeploy: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ title, imageBig, tags, github, linkOnDeploy }) => {
    return (
        <div className="project-details">
            <h1 className="title-1">{title}</h1>

            <img src={imageBig} alt={title} className="project-details__cover" />

            <div className="project-details__desc">
                <p>Skills: {tags.join(", ")}</p>
            </div>

            <a href={github} className="btn-outline" target="_blank" rel="noopener noreferrer">
                <img src="../img/icons/gitHub-black.svg" alt="GitHub" />
                GitHub
            </a>

            <a href={linkOnDeploy} className="btn-outline" target="_blank" rel="noopener noreferrer">
                <img src="../img/icons/world-wide-web.png" alt="Go to page" className="go-to-page" />
                Go to page
            </a>
        </div>
    );
};

export default ProjectContent;
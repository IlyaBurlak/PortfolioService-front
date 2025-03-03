import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../widgets/Header';
import useDarkMode from '../../features/dark-mode-toggle/useDarkMode';
import Footer from '../../widgets/Footer';
import ProjectContent from '../../widgets/ProjectContent';
import { projects } from '../../entities/Project/ui/Project';

const ProjectPage: React.FC = () => {
    const { projectLink } = useParams<{ projectLink: string }>();
    const navigate = useNavigate();
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    // Ищем проект по полю link
    const project = projects.find(p => p.link === `/${projectLink}`);

    if (!project) {
        navigate('/404');
        return null;
    }

    return (
        <>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <ProjectContent
                title={project.title}
                imageBig={project.imageBig}
                tags={project.tags || []}
                github={project.github || '#'}
                linkOnDeploy={project.linkOnDeploy || '#'}
            />
            <Footer />
        </>
    );
};

export default ProjectPage;
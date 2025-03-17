import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../widgets/Header';
import useDarkMode from '../../features/dark-mode-toggle/useDarkMode';
import Footer from '../../widgets/Footer';
import ProjectContent from '../../widgets/ProjectContent';
import {Project} from "../../entities/Project/ui/Project";
import {fetchProjectByLink} from "../../features/projects-filter/api";
import {Loader} from "../../shared/ui/Loader/Loader";

const ProjectPage: React.FC = () => {
    const { projectLink } = useParams<{ projectLink: string }>();
    const navigate = useNavigate();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProject = async () => {
            try {
                if (!projectLink) {
                    navigate('/404');
                    return;
                }

                const data = await fetchProjectByLink(projectLink);
                if (!data) {
                    navigate('/404');
                    return;
                }

                setProject(data);
            } catch (error) {
                console.error('Error loading project:', error);
                navigate('/404');
            } finally {
                setLoading(false);
            }
        };

        loadProject();
    }, [projectLink, navigate]);

    if (loading) return (
        <div className="loading-wrapper">
            if (loading) return <Loader text="Загрузка проекта..." />;
        </div>
    );    if (!project) return null;

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
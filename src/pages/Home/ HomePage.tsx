import React from 'react';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import ProjectsList from '../../entities/Project/ui/ProjectsList';
import useDarkMode from '../../features/dark-mode-toggle/useDarkMode';
import useProjectsFilter from '../../features/projects-filter/useProjectsFilter';

const HomePage: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { filteredProjects, filterProjects } = useProjectsFilter();

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Header toggleDarkMode={toggleDarkMode} />
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <nav className="filter-menu">
                        <div className="menu-items">
                            <button className="menu-item filter all" onClick={() => filterProjects('all')}>All</button>
                            <button className="menu-item filter lite" onClick={() => filterProjects('lite')}>Lite</button>
                            <button className="menu-item filter medium" onClick={() => filterProjects('medium')}>Medium</button>
                            <button className="menu-item filter hard" onClick={() => filterProjects('hard')}>Hard</button>
                        </div>
                    </nav>
                    <ProjectsList projects={filteredProjects} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
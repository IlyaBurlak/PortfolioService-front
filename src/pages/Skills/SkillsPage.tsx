import React from 'react';
import Header from "../../widgets/Header";
import useDarkMode from "../../features/dark-mode-toggle/useDarkMode";
import SkillsContent from "../../widgets/SkillsContent";
import Footer from "../../widgets/Footer";

const SkillsPage: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <SkillsContent />
            <Footer />
        </div>
    );
};

export default SkillsPage;
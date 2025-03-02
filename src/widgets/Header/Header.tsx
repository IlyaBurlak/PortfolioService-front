import React from 'react';
import DarkModeToggle from '../ DarkModeToggle';
import NavList from '../../shared/ui/NavList/NavList';
import Preview from "../../shared/ui/Preview";

interface HeaderProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <a href="./index.html" className="logo"><strong>My</strong> portfolio</a>
                        <NavList />
                        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

                    </div>
                </div>
            </nav>
            <Preview />
        </>
    );
};

export default Header;
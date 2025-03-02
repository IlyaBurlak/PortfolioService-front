import React from 'react';
import DarkModeToggle from '../ DarkModeToggle';
import NavList from '../../shared/ui/NavList/NavList';
import Preview from "../../shared/ui/Preview";

interface HeaderProps {
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <a href="./index.html" className="logo"><strong>My</strong> portfolio</a>
                    <DarkModeToggle toggleDarkMode={toggleDarkMode} />
                    <NavList />
                </div>
                <Preview/>
            </div>
        </nav>
    );
};

export default Header;
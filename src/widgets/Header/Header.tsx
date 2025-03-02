import React from 'react';
import DarkModeToggle from '../ DarkModeToggle';
import NavList from '../../shared/ui/NavList/NavList';
import {Link} from "react-router-dom";

interface HeaderProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
    return (
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <Link to="/" className="logo"><strong>My</strong> portfolio </Link>
                        <NavList />
                        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                    </div>
                </div>
            </nav>
);
};

export default Header;
// Header.tsx
import React from 'react';
import DarkModeToggle from '../ DarkModeToggle';
import NavList from '../../shared/ui/NavList/NavList';
import { Link } from "react-router-dom";
import LogoutButton from "../../shared/ui/Button/LogoutButton";
import { useAuth } from "../../context/AuthContext";
import './Header.css'

interface HeaderProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
    const { user } = useAuth();

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/" className="logo"><strong>My</strong> portfolio </Link>

                    <div className="nav-list-container">
                        <NavList />
                    </div>

                    <div className="right-elements">
                        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                        {user && (
                            <div className="user-info">
                                {user.name} {user.surname}
                            </div>
                        )}
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Header;
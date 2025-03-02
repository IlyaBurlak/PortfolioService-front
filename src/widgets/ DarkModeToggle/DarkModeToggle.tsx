import React from 'react';
import './DarkModeToggle.css';

interface DarkModeToggleProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <button className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
            <div className="dark-mode-toggle__icons">
                <img src="/img/icons/sun.svg" alt="Light mode" className="dark-mode-toggle__icon" />
                <img src="/img/icons/moon.svg" alt="Dark mode" className="dark-mode-toggle__icon" />
            </div>
            <div className="dark-mode-toggle__slider"></div>
        </button>
    );
};

export default DarkModeToggle;
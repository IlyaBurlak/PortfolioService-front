import React from 'react';

interface DarkModeToggleProps {
    toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleDarkMode }) => {
    return (
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src="/img/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon" />
            <img src="/img/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
};

export default DarkModeToggle;
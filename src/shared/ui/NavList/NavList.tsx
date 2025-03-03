import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavList: React.FC = () => {
    const location = useLocation();

    return (
        <ul className="nav-list">
            <li className="nav-list__item">
                <Link to="/" className={`nav-list__link ${location.pathname === '/' ? 'nav-list__link--active' : ''}`}>Home</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/skills" className={`nav-list__link ${location.pathname === '/skills' ? 'nav-list__link--active' : ''}`}>Skills</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/contacts" className={`nav-list__link ${location.pathname === '/contacts' ? 'nav-list__link--active' : ''}`}>Contacts</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/comment" className={`nav-list__link ${location.pathname === '/comment' ? 'nav-list__link--active' : ''}`}>Comments</Link>
            </li>
        </ul>
    );
};

export default NavList;

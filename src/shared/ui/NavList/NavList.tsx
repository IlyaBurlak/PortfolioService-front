import React from 'react';
import { Link } from 'react-router-dom';

const NavList: React.FC = () => {
    return (
        <ul className="nav-list">
            <li className="nav-list__item">
                <Link to="/" className="nav-list__link nav-list__link--active">Projects</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/skills" className="nav-list__link">Skills</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/contacts" className="nav-list__link">Contacts</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/comment" className="nav-list__link">Comments</Link>
            </li>
        </ul>
    );
};

export default NavList;



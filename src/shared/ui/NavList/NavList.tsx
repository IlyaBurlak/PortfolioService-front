import React from 'react';

const NavList: React.FC = () => {
    return (
        <ul className="nav-list">
            <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Projects</a></li>
            <li className="nav-list__item"><a href="html/skills.html" className="nav-list__link">Skills</a></li>
            <li className="nav-list__item"><a href="html/contacts.html" className="nav-list__link">Contacts</a></li>
        </ul>

    );
};

export default NavList;
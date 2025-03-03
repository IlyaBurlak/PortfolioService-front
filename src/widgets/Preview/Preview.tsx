import React from 'react';
import useDownloadCV from '../../shared/hooks/useDownloadCV';

const Preview: React.FC = () => {
    const { downloadCV } = useDownloadCV();

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Ilya</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <button id='CV-btn' className="btn" onClick={downloadCV}>Download CV</button>
            </div>
        </header>
    );
};

export default Preview;
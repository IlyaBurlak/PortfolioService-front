import React from 'react';

const Preview: React.FC = () => {
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
                <a id='CV-btn' className="btn">Download CV</a>
            </div>
        </header>
    );
};

export default Preview;
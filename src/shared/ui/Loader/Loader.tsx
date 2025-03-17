import React from 'react';
import './Loader.css';

export const Loader: React.FC<{ text?: string }> = ({ text = 'Загрузка...' }) => (
    <div className="loader-wrapper">
        <div
            className="pulse-loader"
            style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: `radial-gradient(circle, var(--accent) 60%, transparent 70%)`
            }}
        />
        <div className="loading-text">
            {text}
        </div>
    </div>
);
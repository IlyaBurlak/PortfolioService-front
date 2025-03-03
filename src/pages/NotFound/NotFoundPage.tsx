import React from "react";
import'./NotFoundPage.css'
import {Link} from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <>
            <html lang="ru">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Страница не найдена</title>
                <link rel="stylesheet" href="styles.css"/>
            </head>
            <body className="dark">
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-text">Упс! Страница, которую вы ищете, не найдена.</p>
                <Link to="/" className="not-found-button">Вернуться на главную</Link>
            </div>
            </body>
            </html>
        </>
    )
}

export default NotFoundPage
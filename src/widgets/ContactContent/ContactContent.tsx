import React from "react";

const ContactContent: React.FC = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>St.Petersburg, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+89898073512">8 (989) 807-35-12</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:ilya.burlak.burlak@mail.ru">ilya.burlak.burlak@mail.ru</a></p>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default ContactContent;
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://vk.com/fruit_doc">
                                <img src="/img/icons/vk.svg" alt="VK" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src="/img/icons/instagram.svg" alt="Instagram" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src="/img/icons/twitter.svg" alt="Twitter" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/IlyaBurlak">
                                <img src="/img/icons/gitHub.svg" alt="GitHub" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src="/img/icons/linkedIn.svg" alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 by Ilya Burlak</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
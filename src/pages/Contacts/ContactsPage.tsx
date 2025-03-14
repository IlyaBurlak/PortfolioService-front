import React from 'react';
import Header from "../../widgets/Header";
import useDarkMode from "../../features/dark-mode-toggle/useDarkMode";
import Footer from "../../widgets/Footer";
import ContactContent from "../../widgets/ContactContent";

const ContactsPage: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <ContactContent/>
            <Footer/>
        </>
    );
};

export default ContactsPage;

export {};
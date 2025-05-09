import React from "react";
import useDarkMode from "../../features/dark-mode-toggle/useDarkMode";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import CommentContent from "../../widgets/CommentContent";
import './CommentContent.css'

const ContactsPage: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <CommentContent />
            <Footer/>
        </>
    );
};

export default ContactsPage;


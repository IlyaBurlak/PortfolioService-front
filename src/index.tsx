import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SkillsPage from './pages/Skills';
import ContactsPage from './pages/Contacts';
import CommentsPage from "./pages/Comments";
import NotFoundPage from "./pages/NotFound";
import LogInPage from "./pages/Auth/LogInPage";
import RegistrationPage from "./pages/Auth/RegistrationPage";
import ProjectPage from './pages/Project';
import { projects } from './entities/Project/ui/Project';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/comment" element={<CommentsPage />} />
            <Route path="/project/:projectLink" element={<ProjectPage />} />
            <Route path="auth/login" element={<LogInPage />} />
            <Route path="auth/register" element={<RegistrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AppRoutes />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

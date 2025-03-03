import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SkillsPage from './pages/Skills';
import ContactsPage from './pages/Contacts';
import CommentsPage from "./pages/Comments";
import NotFoundPage from "./pages/NotFound";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/comment" element={<CommentsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')

);
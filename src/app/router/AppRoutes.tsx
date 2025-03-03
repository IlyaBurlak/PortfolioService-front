import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/Home";
import SkillsPage from "../../pages/Skills";
import ContactsPage from "../../pages/Contacts";
import CommentsPage from "../../pages/Comments/CommentsPage";
import ProjectPage from "../../pages/Project";
import LogInPage from "../../pages/Auth/LogInPage/LogInPage";
import RegistrationPage from "../../pages/Auth/RegistrationPage";
import NotFoundPage from "../../pages/NotFound";
import React from "react";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<LogInPage />} />
            <Route path="/auth/register" element={<RegistrationPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/comment" element={<CommentsPage />} />
                <Route path="/project/:projectLink" element={<ProjectPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
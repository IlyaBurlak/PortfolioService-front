import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AppRoutes} from "./app/router/AppRoutes";
import {AuthProvider} from "./context/AuthContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
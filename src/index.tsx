import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from "./app/router/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <SpeedInsights />
                <AppRoutes />
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
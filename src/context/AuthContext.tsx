import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    isGuest: boolean;
    createdAt: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    login: (accessToken: string, refreshToken: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });

            setUser({
                id: response.data.id,
                name: response.data.name,
                surname: response.data.surname,
                email: response.data.email,
                isGuest: response.data.isGuest,
                createdAt: response.data.createdAt,
            });
        } catch (error) {
            await logout();
            throw error;
        }
    };

    useEffect(() => {
        const checkAuth = async () => {
            const accessToken = localStorage.getItem('access_token');
            if (accessToken) {
                try {
                    await fetchUserData();
                    setIsAuthenticated(true);
                } catch {
                    await logout();
                }
            }
            setIsLoading(false);
        };
        checkAuth();
    }, []);

    const login = async (accessToken: string, refreshToken: string) => {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        try {
            await fetchUserData();
            setIsAuthenticated(true);
        } catch (error) {
            await logout();
            throw error;
        }
    };

    const logout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
                await axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`, {
                    refresh_token: refreshToken
                });
            }
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
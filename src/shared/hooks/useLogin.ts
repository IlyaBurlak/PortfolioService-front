import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/login`,
                { email, password }
            );
            await login(response.data.access_token, response.data.refresh_token);
            navigate('/');
        } catch (err) {
            setError('Invalid email or password');
            throw err;
        }
    };

    const handleGuestLogin = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/guest-login`
            );
            await login(response.data.access_token, response.data.refresh_token);
            navigate('/');
        } catch (err) {
            setError('Guest login failed');
            throw err;
        }
    };

    return { handleLogin, handleGuestLogin, error };
};

export default useLogin;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';
import useLogin from "../../../shared/hooks/useLogin";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, handleGuestLogin, error } = useLogin();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleLogin(email, password);
    };

    return (
        <div className="login-page">
            <div className="auth-container">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="auth-button">Log In</button>

                    <div className="guest-section">
                        <button
                            type="button"
                            className="auth-button guest-button"
                            onClick={handleGuestLogin}
                        >
                            Sign in as Guest
                        </button>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <div className="auth-link">
                        Don't have an account?
                        <Link to="/auth/register">Registration</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
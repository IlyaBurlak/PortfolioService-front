import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../Auth.css';

const RegistrationPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        try {
            await axios.post('/auth/register', { email, password, name, surname });
            setSuccess(true);
            setTimeout(() => navigate('/auth/login'), 2000);
        } catch (err) {
            setError('Registration error');
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (value !== password) {
            setError('The passwords do not match');
        } else {
            setError(null);
        }
    };

    return (
        <div className="login-page">
            <div className="auth-container">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname"> </label>
                        <input
                            type="text"
                            id="Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                            placeholder="Surname"
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword"></label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange} // Изменено здесь
                            required
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button type="submit" className="auth-button">Register</button>

                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Registration successful!</p>}

                    <div className="auth-link">
                        Already have an account?
                        <Link to="/auth/login">Войти</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;

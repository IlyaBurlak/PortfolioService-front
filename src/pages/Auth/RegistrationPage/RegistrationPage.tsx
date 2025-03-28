import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';
import useRegistration from "../../../shared/hooks/useRegistration";

const RegistrationPage: React.FC = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        name,
        setName,
        surname,
        setSurname,
        error,
        success,
        handleSubmit,
        handleConfirmPasswordChange
    } = useRegistration();

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
                            onChange={handleConfirmPasswordChange}
                            required
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button type="submit" className="auth-button">Register</button>

                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Registration successful!</p>}

                    <div className="auth-link">
                        Already have an account?
                        <Link to="/auth/login">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
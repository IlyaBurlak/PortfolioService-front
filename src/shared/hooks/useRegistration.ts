import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const useRegistration = () => {
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
            await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/register`,
                { email, password, name, surname }
            );
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

    useEffect(() => {
        if (success) {
            const count = 200;
            const defaults = {
                origin: { y: 0.7 }
            };

            const fire = (particleRatio: number, opts: any) => {
                confetti({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio)
                });
            };

            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });

            fire(0.25, { spread: 26, startVelocity: 55 });
            fire(0.2, { spread: 60 });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            fire(0.1, { spread: 120, startVelocity: 45 });
        }
    }, [success]);

    return {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        name,
        setName,
        surname,
        setSurname,
        error,
        success,
        handleSubmit,
        handleConfirmPasswordChange
    };
};

export default useRegistration;
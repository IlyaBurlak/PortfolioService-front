import { useState } from 'react';
import { message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";

const useDeleteAccount = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const deleteAccount = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem('token');

            if (!token) {
                await logout();
                navigate('/login');
                return;
            }

            await axios.delete(
                `${process.env.REACT_APP_API_URL}/auth/delete`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            message.success('Аккаунт успешно удален');
            await logout();
            navigate('/', { replace: true });
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response?.status === 401) {
                    message.error('Сессия истекла. Пожалуйста, войдите снова.');
                    await logout();
                    navigate('/login');
                    return;
                }

                const serverMessage = err.response?.data?.message;
                message.error(serverMessage || 'Ошибка сервера');
            } else {
                message.error('Неизвестная ошибка');
            }
        } finally {
            setLoading(false);
        }
    };

    return { deleteAccount, loading };
};

export default useDeleteAccount;
import { Button, message } from "antd";
import { useAuth } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/DeleteAccount.css'

const DeleteAccountButton = () => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        if (!window.confirm("Are you sure you want to permanently delete your account? This action cannot be undone!")) {
            return;
        }

        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/auth/delete`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            message.success('Account deleted successfully');
            await logout();
            navigate('/');
        } catch (err) {
            message.error('Failed to delete account');
            console.error('Delete account error:', err);
        }
    };

    return (
        <Button
            danger
            onClick={handleDeleteAccount}
            className='delete-account-button'
        >
            Delete Account
        </Button>
    );
};

export default DeleteAccountButton;
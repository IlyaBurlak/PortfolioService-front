import {useAuth} from "../../../../context/AuthContext";
import '../css/LogOut.css'

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <button className='log-out' onClick={logout}>
            Log out
        </button>
    );
};

export default LogoutButton;
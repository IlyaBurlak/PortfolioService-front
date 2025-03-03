import {useAuth} from "../../../context/AuthContext";

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <button onClick={logout}>
            Log out
        </button>
    );
};

export default LogoutButton;
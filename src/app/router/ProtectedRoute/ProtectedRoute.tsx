import { Row, Col } from 'antd';
import './Loader.css';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const PulseLoader = () => (
    <div
        className="pulse-loader"
        style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: `radial-gradient(circle, var(--accent) 60%, transparent 70%)`
        }}
    />
);

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <Row
                justify="center"
                align="middle"
                style={{
                    minHeight: '100vh',
                    background: 'var(--page-bg)',
                    transition: 'background 0.3s ease'
                }}
            >
                <Col>
                    <PulseLoader />
                    <div className="loading-text">
                        Загрузка...
                    </div>
                </Col>
            </Row>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
import { Row, Col } from 'antd';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import {Loader} from "../../../shared/ui/Loader/Loader";

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
                    <Loader text="Проверка авторизации..." />
                </Col>
            </Row>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Avatar, Drawer, Button, Space, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DarkModeToggle from '../ DarkModeToggle';
import NavList from '../../shared/ui/NavList/NavList';
import LogoutButton from '../../shared/ui/Button/LogoutButton';
import './Header.css';

interface HeaderProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
    const { user } = useAuth();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
    };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/" className="logo">
                        <strong>My</strong> portfolio
                    </Link>

                    <div className="nav-list-container">
                        <NavList />
                    </div>

                    <div className="right-elements">
                        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                        {user && (
                            <Space>
                                <Avatar
                                    size="large"
                                    icon={<UserOutlined />}
                                    onClick={showDrawer}
                                    style={{ cursor: 'pointer' }}
                                />
                                <span style={{ cursor: 'pointer' }} onClick={showDrawer}>
                                    {user.name} {user.surname}
                                </span>
                            </Space>
                        )}
                    </div>
                </div>
            </div>

            <Drawer
                title="Account Information"
                placement="right"
                onClose={onClose}
                visible={drawerVisible}
                width={400}
                className={isDarkMode ? 'dark' : 'light'}
                destroyOnClose
            >
                {user && (
                    <Descriptions column={1}>
                        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                        <Descriptions.Item label="Surname">{user.surname}</Descriptions.Item>
                        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                        <Descriptions.Item label="Created At">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </Descriptions.Item>
                    </Descriptions>
                )}
                <LogoutButton />
            </Drawer>
        </nav>
    );
};

export default Header;